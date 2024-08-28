"use client";

import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import Img from "../../public/images/tacolove2.jpg";
import styles from "./FinalCTA2.module.css";
import Button from "../Button/Button";
import RotatingText from "../RotatingText/RotatingText";
import { motion } from "framer-motion";
// import { fadeIn } from "../../animation/variants";
import Label from "../Label/Label";

const FinalCTA2 = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.imgOverlay}></div>
          <Image
            src={Img}
            alt='img'
            fill
            className={styles.img}
            sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
          />
          <div className={styles.content}>
            <div
              // variants={fadeIn("up", 0.3)}
              // initial='hidden'
              // whileInView={"show"}
              // viewport={{ once: false, amount: 0.3 }}
              className={styles.left}
            >
              <Label text='Taco Bell' color='white' />
              <h2 className={styles.heading}>
                Ready to Savor the Flavor? Order Now!
              </h2>
              <p className={styles.copy}>
                Jump into a journey of taste with just a few clicks. Place your
                order today and let us bring your favorite meals directly to
                your doorstep, fresh and bursting with flavor.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text='Start your order'
                  href='tel:+6236326780'
                  btnType='primary'
                />
              </div>
            </div>
            <div className={styles.right}>
              <RotatingText text='Live mas • Live mas • Live mas • Live mas • Live mas • Live mas •' />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FinalCTA2;
