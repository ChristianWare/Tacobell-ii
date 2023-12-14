"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Img from "../../public/images/bgimg.jpeg";
import styles from "./ImageGallery.module.css";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          {images.map((image: any, idx: any) => (
            <div key={idx} className={styles.imgContainer}>
              <Image
                src={urlFor(image).url()}
                alt='image'
                fill
                className={styles.img}
                onClick={() => handleSmallImageClick(image)}
                onMouseOver={() => handleSmallImageClick(image)}
              />
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainerii}>
            <Image
              src={urlFor(bigImage).url()}
              alt='Photo'
              fill
              className={styles.imgii}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
