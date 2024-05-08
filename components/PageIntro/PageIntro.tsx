"use client";

import Image from "next/image";
import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./PageIntro.module.css";

import { FC } from "react";
import Nav from "@/components/Nav/Nav";

interface PageIntroProps {
  heading: string;
  copy: string;
  src: any;
  labelCopy?: string;
}

const PageIntro: FC<PageIntroProps> = ({ heading, copy, src, labelCopy }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={src}
        alt='img'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        priority
      />
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.copy}>{copy}</p>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default PageIntro;
