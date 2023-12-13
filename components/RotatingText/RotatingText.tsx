"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingText.module.css";
import { FC } from "react";

interface RotatingTextProps {
  text: string;
  showArrow?: boolean;
  showEmoji?: boolean;
}

const RotatingText: FC<RotatingTextProps> = ({ text }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const scrollY = window.scrollY;
      // Adjust the rotation speed as needed by multiplying scrollY by an appropriate factor
      const newRotationAngle = scrollY * 0.5; // You can change the factor
      setRotationAngle(newRotationAngle);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        transform: `rotate(${rotationAngle}deg)`,
      }}
    >
     <span className={styles.text}>{text}</span>
    </div>
  );
};
export default RotatingText;
