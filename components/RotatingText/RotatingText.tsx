"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingText.module.css";
import { FC } from "react";

interface RotatingTextProps {
  text: string;
  showArrow?: boolean;
  color?: string;
}

const RotatingText: FC<RotatingTextProps> = ({
  text,
  color = "",
}) => {
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
        <text font-size='11'>
          <textPath
            className={`${styles.svg} ${styles[color]}`}
            xlinkHref='#circle'
          >
            {text}
          </textPath>
        </text>
      </svg>
      
    </div>
  );
};
export default RotatingText;
