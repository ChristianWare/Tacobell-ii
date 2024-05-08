"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingText.module.css";
import { FC } from "react";
import Taco from "../../public/icons/taco.svg";

interface RotatingTextProps {
  text: string;
  color?: string;
  showArrow?: boolean;
  showEmoji?: boolean;
}

const RotatingText: FC<RotatingTextProps> = ({ text, color = "" }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const scrollY = window.scrollY;
      const newRotationAngle = scrollY * 0.5;
      setRotationAngle(newRotationAngle);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={styles.container}>
      <svg
        className={styles.svg}
        viewBox='0 0 100 100'
        style={{
          transform: `rotate(${rotationAngle}deg)`,
        }}
      >
        <defs>
          <path
            id='circle'
            d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
          />
        </defs>
        <text font-size='12.2'>
          <textPath
            className={`${styles.svg} ${styles[color]}`}
            xlinkHref='#circle'
          >
            {text}
          </textPath>
        </text>
      </svg>
      <div className={styles.iconContainer}>
        <Taco
          className={`${styles.icon} ${styles[color]}`}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
export default RotatingText;
