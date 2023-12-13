import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { useState } from "react";
import styles from './ProductPage.module.css'

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        images, 
        price, 
        name, 
        description, 
        "slug": slug.current,
        "categoryName": category->name,
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div>
      <h1>Hello from the Product Page</h1>
      <ImageGallery images={data.images} />
      <br />
      <br />
      <br />
      <br />
      <div>
        <p>{data.categoryName}</p>
        <h3>{data.name}</h3>
        <p>{data.price}</p>
        <p>{data.description}</p>
        <button className={styles.btnOne}>Add to Bag</button>
        <button className={styles.btnTwo}>Checkout Now</button>
      </div>
    </div>
  );
}
