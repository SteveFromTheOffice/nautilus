import { FC } from 'react';

import style from './ToggleButton.module.scss';
import Button, { ButtonProps } from '../Button/Button';

interface ToggleButtonProps extends ButtonProps {}

const ToggleButton: FC<ToggleButtonProps> = ({ onClick, value }) => {
  return <Button className={style.toggleButton} onClick={onClick} value={value} />;
};

export default ToggleButton;
