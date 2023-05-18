import { FC } from 'react';
import { useSelector } from 'react-redux';

import style from './Screen.module.scss';
import { RootState } from '../../stores/store';

interface ScreenProps {}

const Screen: FC<ScreenProps> = () => {
  const equation = useSelector((state: RootState) => state.calculator.equation);
  const result = useSelector((state: RootState) => state.calculator.result);

  return (
    <div className={style.screen}>
      <div className={style.equation}>{equation}</div>
      <div className={style.result}>{result}</div>
    </div>
  );
};

export default Screen;
