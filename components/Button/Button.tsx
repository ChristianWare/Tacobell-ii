import { ButtonProps } from "@/lib/interface";
import Link from "next/link";
import { FC } from "react";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({ href = "", text, btnType, target = "" }) => {
  return (
    <button className={styles[btnType]}>
      <Link href={href} target={target}>
        <div className={styles.btnInner}>
          <div className={styles.btnSlide}></div>
          <span className={styles.btnContent}>{text}</span>
        </div>
      </Link>
    </button>
  );
};

export default Button;
