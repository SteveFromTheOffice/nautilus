import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { evaluate } from 'mathjs';
import { decimalPlaceLength, parseEquation } from '../util/calculator';
import { fetchBitcoinPrice } from '../actions/calculator/fetchBitcoinPrice';

export interface CalculatorState {
  bitcoin: boolean;
  equation: string;
  result: string;
  history: HistoryItem[];
}

const initialState: CalculatorState = {
  bitcoin: false,
  equation: '',
  result: '',
  history: [],
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    appendEquation: (state, action: PayloadAction<string>) => {
      const numberOrDecimal = /^\d+(\.\d+)?$/;

      // Bring the previous result to the equation.
      if (state.result !== '' && state.equation === '' && !numberOrDecimal.test(action.payload)) {
        state.equation = state.result;
      }

      // Append new character.
      state.equation += action.payload;
    },
    backspace: (state) => {
      state.equation = state.equation.slice(0, -1);
    },
    calculate: (state) => {
      try {
        if (state.equation === '') return;

        const equation = parseEquation(state.equation);
        const result = evaluate(equation).toString();

        // Check for decimals.
        const resultFixed = decimalPlaceLength(result, 4);

        // Update history.
        state.history.push({
          equation: state.equation,
          result: resultFixed,
        });

        state.result = resultFixed;
        state.equation = '';
      } catch (error) {
        state.result = 'ERROR';
        state.equation = '';
      }
    },
    clear: (state) => {
      state.equation = '';
      state.result = '';
      state.history = [];
    },
    flipSign: (state) => {
      if (state.result === '') return;

      const result = evaluate(`(${state.result}) * -1`).toString();
      state.result = result;

      // Update history.
      state.history.push({
        equation: `(${state.result}) * -1`,
        result: result,
      });
    },
    percent: (state) => {
      if (state.result === '') return;

      const result = evaluate(`(${state.result}) / 100`).toString();
      state.result = result;

      // Update history.
      state.history.push({
        equation: `(${state.result}) / 100`,
        result: result,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBitcoinPrice.fulfilled, (state, action) => {
      const cadValue = action.payload.cad;

      if (!state.bitcoin) {
        state.result = evaluate(`${state.result} * ${cadValue}`);
      } else {
        state.result = evaluate(`${state.result} / ${cadValue}`);
      }

      state.bitcoin = !state.bitcoin;
    });
  },
});

export const Actions = calculatorSlice.actions;
export default calculatorSlice.reducer;
