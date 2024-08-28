"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./OrderHero.module.css";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";

const OrderHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Nav color='olive' barColor='oliveBar' />
      <LayoutWrapper>
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.left}
          >
            <h1 className={styles.heading}>Let&apos;s start <br /> a conversation</h1>
            <p className={styles.copy}>
              The key to your perfect event starts with us understanding your
              vision. Share your ideas with us in as much detail as possible,
              and we’ll turn them into reality!
            </p>
          </motion.div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default OrderHero;
