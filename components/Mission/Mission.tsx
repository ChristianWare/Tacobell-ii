"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Mission.module.css";
import Label from "../Label/Label";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";

const mission = [
  {
    feature: "Trust & Transparency",
    desc: "We prioritize trust and transparency, creating a reliable and secure online experience for Taco Bell fans.",
  },
  {
    feature: "User-Friendly Design",
    desc: "We focus on delivering an intuitive and user-friendly website, making it easier than ever for customers to explore our menu and place orders.",
  },
  {
    feature: "Growth & Connection",
    desc: "Our mission is to foster growth and deepen the connection between Taco Bell and its customers, providing a digital platform that enhances brand loyalty.",
  },
  {
    feature: "Personalization",
    desc: "We continuously enhance the online experience by offering personalized features that cater to the unique preferences of every Taco Bell fan.",
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
                Transforming the Taco Bell online experience with a fresh,
                user-friendly, and innovative design, our mission is to deliver
                a seamless and personalized digital journey for customers.
                We&apos;re redefining how fans interact with Taco Bell,
                fostering convenience, trust, and brand connection. Here are the
                four key ways we aim to achieve this vision:
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
