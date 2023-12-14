// Server Component

import { client } from "@/app/lib/sanity";
import styles from "./Newest.module.css";
import { simplifiedProduct } from "@/app/interface";
import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Nacho from "../../public/icons/nachos.svg";
import Button from "../Button/Button";
import Label from "../Label/Label";
import RotatingText from "../RotatingText/RotatingText";

async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
  _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.top}>
          <Nacho className={styles.icon} width={200} height={200} />
          <h2 className={styles.heading}>
            Lets <span className={styles.span}>Taco&apos; bout</span> Our Menu
          </h2>
          <div className={styles.copy}>
            Indulge in a diverse array of innovative flavors at Taco Bell, where
            our latest menu offerings feature exciting creations like loaded
            MexiFries, crave-worthy Crunchwrap Sliders, and bold Korean BBQ
            Tacos.
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((product) => (
            <div key={product._id}>
              <div className={styles.imgContainer}>
                <div className={styles.imgOverlay}></div>
                <Image
                  src={product.imageUrl}
                  alt='image'
                  fill
                  className={styles.img}
                />
                <div className={styles.labelContainer}></div>
                <Link href={`/product/${product.slug}`}>
                  <h3 className={styles.productName}>{product.name}</h3>
                </Link>
                <p className={styles.price}>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button href='/menu' btnType='secondary' text='See All' />
        </div>
        <div className={styles.rotatingTextContainer}>
          <RotatingText />
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
}
