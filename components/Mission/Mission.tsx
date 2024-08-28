"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Mission.module.css";
import Label from "../Label/Label";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";

const mission = [
  {
    feature: "Trust & Transparency",
    desc: "We prioritize trust and transparency, building a reliable and secure environment for vacation rental owners.",
  },
  {
    feature: "User-Friendly",
    desc: "We strive to offer a personalized and user-friendly experience, tailoring our services to meet the unique needs of each host.",
  },
  {
    feature: "Growth",
    desc: "Our mission is to contribute to the growth of vacation rental businesses, enabling hosts to thrive in a competitive marketplace",
  },
  {
    feature: "Personalization",
    desc: "Continuously enhance user experience by offering personalized solutions that cater to the specific requirements of each vacation rental owner.",
  },
];

const Mission = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <Label text='purpose' />
          <h2 className={styles.topHeading}>Our Vission</h2>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.top}
          >
            <div className={styles.topLeft}>
              <h3 className={styles.heading}>
                Empowering vacation rental owners with personalized and
                user-friendly direct booking websites, our mission is to
                liberate hosts from intermediary platforms, fostering
                independence, trust, and growth in their businesses, as we
                redefine the vacation rental experience away from Airbnb. Here
                are the four ways we plan on accomplishing that goal:
              </h3>
            </div>
            <div className={styles.topRight}></div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.bottom}
          >
            {mission.map((x, index) => (
              <div key={index} className={styles.box}>
                <span className={styles.index}>Step {index + 1}</span>
                <h4 className={styles.feature}>{x.feature}</h4>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default Mission;
