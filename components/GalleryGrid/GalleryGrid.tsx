"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import styles from "./GalleryGrid.module.css";
import { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import Back from "../../public/icons/back.svg";
import Next from "../../public/icons/next.svg";
import Cancel from "../../public/icons/close.svg";

interface iAppProps {
  images: any;
}

const GalleryGrid = ({ images }: iAppProps) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: any) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading2}>gallery</h2>
      <div className={styles.gallery}>
        {images.map((slide: any, index: any) => (
          <div key={index} className={styles.imgContainer4}>
            <Image
              src={urlFor(slide).url()} // Use urlFor to generate the image URL
              alt={slide?.alt || `Image ${index + 1}`}
              fill
              className={styles.img}
              onClick={() => handleOpenModal(index)}
            />
          </div>
        ))}
        {openModal && (
          <LayoutWrapper>
            <div className={styles.modalContainer}>
              <Cancel
                className={styles.close}
                onClick={handleCloseModal}
                width={40}
                height={40}
              />
              <div className={styles.fullScreenImage}>
                <Back
                  className={styles.prev}
                  onClick={prevSlide}
                  width={40}
                  height={40}
                />
                <Image
                  src={urlFor(images[slideNumber]).url()} // Use urlFor to generate the image URL
                  alt={images[slideNumber]?.alt || `Image ${slideNumber + 1}`}
                  fill
                  className={styles.modalImg}
                />
                <Next
                  className={styles.next}
                  onClick={nextSlide}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </LayoutWrapper>
        )}
      </div>
    </div>
  );
};

export default GalleryGrid;
