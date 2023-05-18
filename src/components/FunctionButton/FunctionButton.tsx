import { FC } from 'react';

import style from './FunctionButton.module.scss';
import Button, { ButtonProps } from '../Button/Button';

interface FunctionButtonProps extends ButtonProps {}

const FunctionButton: FC<FunctionButtonProps> = ({ onClick, value }) => {
  return <Button className={style.functionButton} onClick={onClick} value={value} />;
};

export default FunctionButton;
