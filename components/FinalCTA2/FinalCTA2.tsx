"use client";

import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import Img from "../../public/images/fries.jpg";
import styles from "./FinalCTA2.module.css";
import Button from "../Button/Button";
import RotatingText from "../RotatingText/RotatingText";
import Label from "../Label/Label";

const FinalCTA2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='img'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
      />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Ready to Savor the Flavor? Order Now!
            </h2>
            <p className={styles.copy}>
              Jump into a journey of taste with just a few clicks. Place your
              order today and let us bring your favorite meals directly to your
              doorstep, fresh and bursting with flavor.
            </p>
            <div className={styles.btnContainer}>
              <Button text='Order Online' href='/menu' btnType='tertiary' />
            </div>
          </div>
          <div className={styles.right}>
            <RotatingText
              text='Taco Bell • Live Mas • Taco Bell • Live Mas • Taco Bell • '
              color='tan'
            />
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default FinalCTA2;
