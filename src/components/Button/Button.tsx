import { FC, HTMLAttributes } from 'react';

import style from './Button.module.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

const Button: FC<ButtonProps> = ({ className, onClick, value }) => {
  return (
    <button className={`${style.button} ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
