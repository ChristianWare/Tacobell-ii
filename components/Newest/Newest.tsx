// Server Component

import { client } from "@/app/lib/sanity";
import styles from "./Newest.module.css";
import { simplifiedProduct } from "@/app/interface";
import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import Nacho from "../../public/icons/nachos.svg";
import Button from "../Button/Button";
import PreviewCard from "../PreviewCard/PreviewCard";

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
            Lets Taco&apos; bout our Newest Items
          </h2>
          <p className={styles.copy}>
            Indulge in a diverse array of innovative flavors at Taco Bell, where
            our latest menu offerings feature exciting creations like loaded
            MexiFries, crave-worthy Crunchwrap Sliders, and bold Korean BBQ
            Tacos.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((product) => (
            <PreviewCard
              data={product}
              borderColor='yellowBorder'
              textColor='yellowText'
              btnType='primary'
              key={product._id}
            />
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button text='Order Online' href='/menu' btnType='primary' />
          <Button text='Browse Menu' href='/menu' btnType='tertiary' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
