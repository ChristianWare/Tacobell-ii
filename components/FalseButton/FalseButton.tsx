"use client";

import styles from "./FalseButton.module.css";

interface Props {
  text: string;
  btnType: string;
  onClick?: () => void;
  disabled?: any;
}

const FalseButton = ({ text, btnType, onClick, disabled }: Props) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${styles[btnType]}`}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default FalseButton;
