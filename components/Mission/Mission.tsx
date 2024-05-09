"use client";

import { mission } from "@/lib/data";
import styles from "./Mission.module.css";
import LayoutWrapper from "../LayoutWrapper";

const Mission = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.topHeading}>Our Mission</h2>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <h3 className={styles.heading}>
                We take pride in making the best Mexican style fast food
                providing fast, friendly, & accurate service. Here&apos;s how we
                plan to redefine the fast-food experience
              </h3>
            </div>
            <div className={styles.topRight}></div>
          </div>
          <div className={styles.bottom}>
            {mission.map((x, index) => (
              <div key={index} className={styles.box}>
                <span className={styles.index}>Step {index + 1}</span>
                <h4 className={styles.feature}>{x.feature}</h4>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default Mission;
