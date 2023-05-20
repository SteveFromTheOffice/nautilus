import { FC } from 'react';

import { AppDispatch, RootState } from '../../stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { Actions as CalculatorActions } from '../../stores/calculatorSlice';

import FunctionButton from '../FunctionButton/FunctionButton';
import NumberButton from '../NumberButton/NumberButton';

import style from './Calculator.module.scss';
import { fetchBitcoinPrice } from '../../actions/calculator/fetchBitcoinPrice';

interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const isBitcoin = useSelector((state: RootState) => state.calculator.bitcoin);

  const btcString = !isBitcoin ? 'BTC' : 'CAD';

  return (
    <div className={style.calculator}>
      {/* Developer note: While this could be mapped, the buttons are not currently dynamic, 
      and it was actually a little harder to read intuitively so it didn't seem nessesary. */}
      <FunctionButton value="C" onClick={() => dispatch(CalculatorActions.clear())} />
      <FunctionButton value={btcString} onClick={() => dispatch(fetchBitcoinPrice())} />
      <FunctionButton value="%" onClick={() => dispatch(CalculatorActions.percent())} />
      <FunctionButton value="÷" onClick={() => dispatch(CalculatorActions.appendEquation(' ÷ '))} />

      <NumberButton value="7" onClick={() => dispatch(CalculatorActions.appendEquation('7'))} />
      <NumberButton value="8" onClick={() => dispatch(CalculatorActions.appendEquation('8'))} />
      <NumberButton value="9" onClick={() => dispatch(CalculatorActions.appendEquation('9'))} />
      <FunctionButton value="×" onClick={() => dispatch(CalculatorActions.appendEquation(' × '))} />

      <NumberButton value="4" onClick={() => dispatch(CalculatorActions.appendEquation('4'))} />
      <NumberButton value="5" onClick={() => dispatch(CalculatorActions.appendEquation('5'))} />
      <NumberButton value="6" onClick={() => dispatch(CalculatorActions.appendEquation('6'))} />
      <FunctionButton value="-" onClick={() => dispatch(CalculatorActions.appendEquation(' - '))} />

      <NumberButton value="1" onClick={() => dispatch(CalculatorActions.appendEquation('1'))} />
      <NumberButton value="2" onClick={() => dispatch(CalculatorActions.appendEquation('2'))} />
      <NumberButton value="3" onClick={() => dispatch(CalculatorActions.appendEquation('3'))} />
      <FunctionButton value="+" onClick={() => dispatch(CalculatorActions.appendEquation(' + '))} />

      <FunctionButton value="±" onClick={() => dispatch(CalculatorActions.flipSign())} />
      <NumberButton value="0" onClick={() => dispatch(CalculatorActions.appendEquation('0'))} />
      <NumberButton value="." onClick={() => dispatch(CalculatorActions.appendEquation('.'))} />
      <FunctionButton value="=" onClick={() => dispatch(CalculatorActions.calculate())} />
    </div>
  );
};

export default Calculator;
