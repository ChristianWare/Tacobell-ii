"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Image from "next/image";
import Img from "../../public/images/tacolove5.jpg";
import Nav from "../Nav/Nav";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../animation/variants";
import RotatingText from "../RotatingText/RotatingText";

const Hero = () => {
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
        <ContentPadding>
          <div className={styles.content}>
            <div
              // variants={fadeIn("up", 0.3)}
              // initial='hidden'
              // whileInView={"show"}
              // viewport={{ once: false, amount: 0.3 }}
              className={styles.left}
            >
              <Label text='Yo Quiero Taco Bell' color='white' />
              <h1 className={styles.heading}>
                Taco Bell: <br /> Live mas
              </h1>
              <p className={styles.copy}>
                Explore our diverse menu and indulge in tacos crafted with the
                freshest ingredients and unique, mouthwatering flavors that keep
                you coming back for more.
              </p>
              <div className={styles.btnContainer}>
                <Button text='View Menu' href='/menu' btnType='primary' />
                <Button text='Contact us' href='/contact' btnType='primaryii' />
              </div>
            </div>
            <div className={styles.right}>
              <RotatingText text='Live mas • Live mas • Live mas • Live mas • Live mas • Live mas •' />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
