import {FC, HTMLAttributes} from "react";

import style from "./Button.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

const Button: FC<ButtonProps> = ({onClick, value}) => {
  return (
    <button className={style.button} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
