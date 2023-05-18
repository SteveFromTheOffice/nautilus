import { FC } from 'react';

import style from './NumberButton.module.scss';
import Button, { ButtonProps } from '../Button/Button';

interface NumberButtonProps extends ButtonProps {}

const NumberButton: FC<NumberButtonProps> = ({ onClick, value }) => {
  return <Button className={style.numberButton} onClick={onClick} value={value} />;
};

export default NumberButton;
