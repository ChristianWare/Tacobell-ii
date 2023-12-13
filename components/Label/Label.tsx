import { FC } from "react";
import styles from "./Label.module.css";

interface Props {
  text: string | number;
  color?: string;
}

const Label: FC<Props> = ({ text, color = "" }) => {
  return (
    <div>
      <span className={`${styles.span} ${styles[color]}`}>{text}</span>
    </div>
  );
};
export default Label;
