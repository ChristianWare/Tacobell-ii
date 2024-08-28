"use client";

import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper";
import Img from "../../public/images/tacolove2.jpg";
import styles from "./FinalCTA2.module.css";
import Button from "../Button/Button";
import RotatingText from "../RotatingText/RotatingText";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
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
              <Label text='Chris Ware Agency' color='white' />
              <h2 className={styles.heading}>
                We are your event catering experts.
              </h2>
              {/* <p className={styles.copy}>
                Our custom direct booking websites empower property owners,
                providing control, flexibility, and increased revenue compared
                to traditional platforms like Airbnb. Elevate your rental
                business, stand out from the crowd, and maximize your profits
                with our tailored solutions.
              </p> */}
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
