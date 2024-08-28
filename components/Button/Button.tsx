import { FC } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  text: string;
  btnType: string;
  target?: string;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({
  href = "",
  text,
  btnType,
  target = "",
  onClick,
}) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {text}
      </Link>
    </button>
  );
};
export default Button;
