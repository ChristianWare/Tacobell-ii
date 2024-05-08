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
                Empowering our brand with user-friendly direct ordering systems,
                Taco Bell is dedicated to cutting out intermediary platforms,
                enhancing trust and growth. Here&apos;s how we plan to redefine
                the fast-food experience
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
