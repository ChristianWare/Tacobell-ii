"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicesHero.module.css";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Image from "next/image";
import S1 from "../../public/images/service1.jpg";
import S2 from "../../public/images/service2.jpg";
import S3 from "../../public/images/service3.jpg";

const data = [
  {
    id: 1,
    src: S1,
  },
  {
    id: 2,
    src: S2,
  },
  {
    id: 3,
    src: S3,
  },
];

const ServicesHero = () => {
  return (
    <div className={styles.container}>
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
            <h1 className={styles.heading}>Our Services</h1>
            <p className={styles.copy}>
              We empower property owners to take control of their bookings with
              a custom website to showcase thier unique offerings.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.bottom}
        >
          {data.map((x) => (
            <div key={x.id} className={styles.imgContainer}>
              <Image src={x.src} alt='' fill className={styles.img} />
            </div>
          ))}
        </motion.div>
      </LayoutWrapper>
    </div>
  );
};

export default ServicesHero;
