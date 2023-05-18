import {FC} from "react";
import {useDispatch} from "react-redux";
import {Actions as CalculatorActions} from "../../stores/calculatorSlice";

import Button from "../Button/Button";

import style from "./Calculator.module.scss";

interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.calculator}>
      <Button value="C" onClick={() => dispatch(CalculatorActions.clear())} />
      <Button value="⌫" onClick={() => dispatch(CalculatorActions.backspace())} />
      <Button value="%" onClick={() => dispatch(CalculatorActions.percent())} />
      <Button value="÷" onClick={() => dispatch(CalculatorActions.appendEquation(" ÷ "))} />

      <Button value="7" onClick={() => dispatch(CalculatorActions.appendEquation("7"))} />
      <Button value="8" onClick={() => dispatch(CalculatorActions.appendEquation("8"))} />
      <Button value="9" onClick={() => dispatch(CalculatorActions.appendEquation("9"))} />
      <Button value="×" onClick={() => dispatch(CalculatorActions.appendEquation(" × "))} />

      <Button value="4" onClick={() => dispatch(CalculatorActions.appendEquation("4"))} />
      <Button value="5" onClick={() => dispatch(CalculatorActions.appendEquation("5"))} />
      <Button value="6" onClick={() => dispatch(CalculatorActions.appendEquation("6"))} />
      <Button value="-" onClick={() => dispatch(CalculatorActions.appendEquation(" - "))} />

      <Button value="1" onClick={() => dispatch(CalculatorActions.appendEquation("1"))} />
      <Button value="2" onClick={() => dispatch(CalculatorActions.appendEquation("2"))} />
      <Button value="3" onClick={() => dispatch(CalculatorActions.appendEquation("3"))} />
      <Button value="+" onClick={() => dispatch(CalculatorActions.appendEquation(" + "))} />

      <Button value="±" onClick={() => dispatch(CalculatorActions.flipSign())} />
      <Button value="0" onClick={() => dispatch(CalculatorActions.appendEquation("0"))} />
      <Button value="." onClick={() => dispatch(CalculatorActions.appendEquation("."))} />
      <Button value="=" onClick={() => dispatch(CalculatorActions.calculate())} />
    </div>
  );
};

export default Calculator;
