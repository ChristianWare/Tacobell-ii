import { simplifiedProduct } from "@/app/interface";
import styles from "./PreviewCard.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { useState, useEffect } from "react";

interface Props {
  data: simplifiedProduct;
  borderColor?: string;
  textColor?: string;
  btnType: string;
}

const PreviewCard = ({
  data,
  borderColor = "",
  textColor = "",
  btnType = "",
}: Props) => {
  return (
    <div className={`${styles.container} ${styles[borderColor]}`}>
      <Link href={`/product/${data.slug}`} className={styles.slug}>
        <div className={styles.imgContainer}>
          <Image src={data.imageUrl} alt='image' fill className={styles.img} />
          <p className={`${styles[`${data.categoryName}`]} ${styles.category}`}>
            {data.categoryName}
          </p>
        </div>
      </Link>
      <div className={styles.details}>
        <Link href={`/data/${data.slug}`}>
          <h3 className={`${styles.productName} ${styles[textColor]}`}>
            {data.name}
          </h3>
        </Link>
        <p className={styles.description}>{data.price}</p>
      </div>
      <div className={styles.btnContainer}>
        <Button
          href={`/product/${data.slug}`}
          text='More Details'
          btnType={btnType}
        />
      </div>
    </div>
  );
};
export default PreviewCard;
