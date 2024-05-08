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

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
  _id,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
}`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 10;

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return (
    <section className={styles.container} id='menu'>
      <LayoutWrapper>
        <div className={styles.top}>
          <Nacho className={styles.icon} width={200} height={200} />
          <h2 className={styles.heading}>
            Lets Taco&apos; bout Newest our Items
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
            <div key={product._id} className={styles.card}>
              <Link href={`/product/${product.slug}`} className={styles.slug}>
                <div className={styles.imgContainer}>
                  <Image
                    src={product.imageUrl}
                    alt='image'
                    fill
                    className={styles.img}
                  />
                  <p className={styles.price}>${product.price}</p>
                </div>
              </Link>
              <div className={styles.details}>
                <Link href={`/product/${product.slug}`}>
                  <h3 className={styles.productName}>{product.name}</h3>
                </Link>
                <p className={styles.description}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button text='Order Online' href='/menu' btnType='primary' />
          <Button text='Browse Menu' href='/menu' btnType='secondary' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
