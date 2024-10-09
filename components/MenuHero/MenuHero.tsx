"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./MenuHero.module.css";
import Steak from "../../public/icons/steak.svg";
import Meat from "../../public/icons/meat.svg";
import Donut from "../../public/icons/taco.svg";
import Icecream from "../../public/icons/salad.svg";
import Image from "next/image";
import Img from "../../public/images/taco1.jpg";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Label from "../Label/Label";

const MenuHero = () => {
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
            <Label text='what we offer' color='white' />
            <h1 className={styles.heading}>
              Our <br /> tasty menu
            </h1>
            <p className={styles.copy}>
              The Taco Bell menu has all of your favorite Mexican inspired menu
              items. From classic tacos and burritos to our epic specialties and
              combos, there’s something for everyone. Find something new today!
            </p>
            <div className={styles.iconBox}>
              <Steak className={styles.steak} />
              <Donut className={styles.donut} />
              <Meat className={styles.meat} />
              <Icecream className={styles.icecream} />
            </div>
          </motion.div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default MenuHero;
