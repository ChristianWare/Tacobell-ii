"use client";

import styles from "./AboutSection.module.css";
import Taco from "../../public/icons/taco.svg";
import { usePathname } from "next/navigation";
import LayoutWrapper from "../LayoutWrapper";

const AboutSection = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              We followed our heart and it led us to cooking
            </h2>
            <div>
              <p className={styles.copy}>
                Welcome to Taco Bell, where tradition meets innovation in every
                dish we serve. Founded in 1948, our mission has been to provide
                a unique dining experience by blending classic culinary
                techniques with contemporary flavors. Our passionate team is
                dedicated to using only the freshest ingredients to craft
                mouthwatering meals that cater to all palates. Join us for a
                meal, and become part of our family that celebrates great food
                and memorable moments.
              </p>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Taco width={30} height={30} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Best tacos in the game</p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Taco width={30} height={30} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Most items on our menu</p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Taco width={30} height={30} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Eat great even late</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/video1.mp4' />
            </video>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/video2.mp4' />
            </video>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/video3.mp4' />
            </video>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default AboutSection;
