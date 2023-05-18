import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {evaluate} from "mathjs";
import {parseEquation} from "../util/calculator";

export interface CalculatorState {
  equation: string;
  result: string;
  history: HistoryItem[];
}

const initialState: CalculatorState = {
  equation: "",
  result: "",
  history: [],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<{equation: string; result: string}>) => {
      state.history.push(action.payload);
    },
    appendEquation: (state, action: PayloadAction<string>) => {
      const numberOrDecimal = /^\d+(\.\d+)?$/;

      // Bring the previous result to the equation.
      if (state.result !== "" && state.equation === "" && !numberOrDecimal.test(action.payload)) {
        state.equation = state.result;
      }

      // Append new character.
      state.equation += action.payload;
    },
    backspace: (state) => {
      state.equation = state.equation.slice(0, -1);
    },
    calculate: (state) => {
      if (state.equation === "") return;

      const equation = parseEquation(state.equation);
      const result = evaluate(equation).toString();
      state.result = result;

      // Update history.
      state.history.push({
        equation: state.equation,
        result: result,
      });

      state.equation = "";
    },
    clear: (state) => {
      state.equation = "";
      state.result = "";
      state.history = [];
    },
    flipSign: (state) => {
      state.result = (parseFloat(state.result) * -1).toString();
    },
    percent: (state) => {
      const result = evaluate(`(${state.result}) / 100`).toString();
      state.result = result;

      // Update history.
      state.history.push({
        equation: state.equation,
        result: result,
      });
    },
  },
});

export const Actions = calculatorSlice.actions;
export default calculatorSlice.reducer;
