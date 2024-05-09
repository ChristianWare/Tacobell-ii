"use client";

import Label from "../Label/Label";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactInfo.module.css";
import Image from "next/image";
import Img1 from "../../public/images/img1.png";
import Taco from "../../public/icons/taco.svg";

const ContactInfo = () => {
  return (
    <LayoutWrapper>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Our Contact Info</h2>
          <div className={styles.right}>
            <div className={styles.iconTextContainer}>
              <div className={styles.itextLeft}>
                <Taco width={35} height={35} className={styles.icon} />
              </div>
              <div className={styles.itexRight}>
                <div className={styles.copyii}>
                  1740 N. Pebble Creek PA <br /> Goodyear, AZ 85395{" "}
                </div>
              </div>
            </div>
            <div className={styles.iconTextContainer}>
              <div className={styles.itextLeft}>
                <Taco width={35} height={35} className={styles.icon} />
              </div>
              <div className={styles.itexRight}>
                <p className={styles.copyii}>(623) 536-2907</p>
              </div>
            </div>
            <div className={styles.iconTextContainer}>
              <div className={styles.itextLeft}>
                <Taco width={35} height={35} className={styles.icon} />
              </div>
              <div className={styles.itexRight}>
                <p className={styles.copyii}>hello@tacobell.com</p>
              </div>
            </div>
            <div className={styles.iconTextContainer}>
              <div className={styles.itextLeft}>
                <Taco width={35} height={35} className={styles.icon} />
              </div>
              <div className={styles.itexRight}>
                <p className={styles.copyii}>instagram.com/tacobell</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image src={Img1} alt='img' fill className={styles.img} />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};
export default ContactInfo;
