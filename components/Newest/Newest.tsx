// Server Component

import { client } from "@/app/lib/sanity";
import styles from "./Newest.module.css";
import { simplifiedProduct } from "@/app/interface";
import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Nacho from "../../public/icons/nachos.svg";

async function getData() {
  const query = `*[_type == "product"][0...3] | order(_createdAt desc) {
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
            Lets <span className={styles.span}>Taco&apos; bout</span> Our Newest
            Products
          </h2>
          <div className={styles.copy}>
            Indulge in a diverse array of innovative flavors at Taco Bell, where
            our latest menu offerings feature exciting creations like loaded
            MexiFries, crave-worthy Crunchwrap Sliders, and bold Korean BBQ
            Tacos. Embark on a culinary adventure that invites you to savor the
            vibrant tastes of our newly introduced delights, showcasing a fusion
            of bold and delicious options.
          </div>
        </div>
        <div className={styles.bottom}>
          <Link href='/products'>See All</Link>
          {data.map((product) => (
            <div key={product._id}>
              <div className={styles.imgContainer}>
                <Image
                  src={product.imageUrl}
                  alt='image'
                  fill
                  className={styles.img}
                />
              </div>
              <Link href={`/product/${product.slug}`}>
                <h3>{product.name}</h3>
              </Link>
              <p>{product.categoryName}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
}
