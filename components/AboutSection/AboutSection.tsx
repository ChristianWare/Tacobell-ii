"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";
import Taco from "../../public/icons/taco.svg";
import Img1 from "../../public/images/img5.jpg";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import ImageGridii from "../ImageGridii/ImageGridii";

const AboutSection = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              {pathname === "/" ? "About Us" : "Our story"}
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
                  <Taco width={40} height={40} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Best tacos in the game</p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Taco width={40} height={40} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Most items on our menu</p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Taco width={40} height={40} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Eat great even late</p>
                </div>
              </div>
              {pathname === "/" && (
                <div className={styles.btnContainer}>
                  <Button
                    href='/about'
                    text='More about us'
                    btnType='secondary'
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.right}>
            <ImageGridii
              src1={Img1}
              src2={Img1}
              src3={Img1}
              src4={Img1}
              src5={Img1}
            />{" "}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default AboutSection;
