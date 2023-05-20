// Write unit tests for the calculatorSlice reducer in src/stores/calculatorSlice.ts

import calculatorSlice, { Actions } from '../stores/calculatorSlice';

describe('calculatorSlice', () => {
  it('should return the initial state', () => {
    expect(calculatorSlice(undefined, { type: undefined })).toEqual({
      bitcoin: false,
      equation: '',
      result: '',
      history: [],
    });
  });

  it('should handle addition', () => {
    const initialState = {
      bitcoin: false,
      equation: '1+1',
      result: '',
      history: [],
    };

    const expectedState = {
      bitcoin: false,
      equation: '',
      result: '2',
      history: [{ equation: '1+1', result: '2' }],
    };

    const action = Actions.calculate();

    expect(calculatorSlice(initialState, action)).toEqual(expectedState);
  });

  it('should handle subtraction', () => {
    const initialState = {
      bitcoin: false,
      equation: '2-1',
      result: '',
      history: [],
    };

    const expectedState = {
      bitcoin: false,
      equation: '',
      result: '1',
      history: [{ equation: '2-1', result: '1' }],
    };

    const action = Actions.calculate();

    expect(calculatorSlice(initialState, action)).toEqual(expectedState);
  });

  it('should handle multiplication', () => {
    const initialState = {
      bitcoin: false,
      equation: '2 × 2',
      result: '',
      history: [],
    };

    const expectedState = {
      bitcoin: false,
      equation: '',
      result: '4',
      history: [{ equation: '2 × 2', result: '4' }],
    };

    const action = Actions.calculate();

    expect(calculatorSlice(initialState, action)).toEqual(expectedState);
  });

  it('should handle division', () => {
    const initialState = {
      bitcoin: false,
      equation: '4 ÷ 2',
      result: '',
      history: [],
    };

    const expectedState = {
      bitcoin: false,
      equation: '',
      result: '2',
      history: [{ equation: '4 ÷ 2', result: '2' }],
    };

    const action = Actions.calculate();

    expect(calculatorSlice(initialState, action)).toEqual(expectedState);
  });

  it('should handle chaining', () => {
    const expectedState = {
      bitcoin: false,
      equation: '',
      result: '2',
      history: [
        { equation: '1+1', result: '2' },
        { equation: '2+1', result: '3' },
        { equation: '3 × 2', result: '6' },
        { equation: '6 ÷ 3', result: '2' },
      ],
    };

    let state = calculatorSlice(undefined, Actions.appendEquation('1+1'));
    state = calculatorSlice(state, Actions.calculate());
    state = calculatorSlice(state, Actions.appendEquation('+1'));
    state = calculatorSlice(state, Actions.calculate());
    state = calculatorSlice(state, Actions.appendEquation(' × 2'));
    state = calculatorSlice(state, Actions.calculate());
    state = calculatorSlice(state, Actions.appendEquation(' ÷ 3'));

    expect(calculatorSlice(state, Actions.calculate())).toEqual(expectedState);
  });
});
