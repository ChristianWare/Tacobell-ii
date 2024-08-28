"use client";

import styles from "./ContactHero.module.css";
import Image from "next/image";
import Img from "../../public/images/veggies.jpg";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Label from "../Label/Label";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";
import LayoutWrapper from "../LayoutWrapper";

const ContactHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='img'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        priority
      />
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.left}
          >
            <Label text='Contact us' color='white' />
            <h1 className={styles.heading}>Get in touch</h1>
            <p className={styles.copy}>
              Whether you have a question about our menu, need assistance with
              an order, or just want to share your feedback, we&apos;re here to
              listen and help.
            </p>
          </motion.div>
        </div>
      </LayoutWrapper>
      <div className={styles.scrollBox}>
        <ScrollHorizontalText text="Let's Chat" />
      </div>
    </div>
  );
};
export default ContactHero;
