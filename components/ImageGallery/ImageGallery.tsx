"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
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
    <div>
      <h1>Hey</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          {images.map((image: any, idx: any) => (
            <div key={idx}>
              <Image
                src={urlFor(image).url()}
                width={200}
                height={200}
                alt='image'
                className={styles.img}
                onClick={() => handleSmallImageClick(image)}
                onMouseOver={() => handleSmallImageClick(image)}
              />
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <Image
            src={urlFor(bigImage).url()}
            alt='Photo'
            width={500}
            height={500}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
