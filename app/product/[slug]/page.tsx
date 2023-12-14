import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { useState } from "react";
import styles from "./ProductPage.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import ContentPadding from "@/components/ContentPadding/ContentPadding";
import Label from "@/components/Label/Label";
import Nav from "@/components/Nav/Nav";
import Newest from "@/components/Newest/Newest";
import FinalCta from "@/components/FinalCta/FinalCta";
import Delivery from "@/components/Delivery/Delivery";
import InstaFeed from "@/components/InstaFeed/InstaFeed";

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
    <div className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <ImageGallery images={data.images} />
            <div className={styles.right}>
              <Label text={data.categoryName} />
              <h1 className={styles.heading}>{data.name}</h1>
              <p className={styles.price}>{data.price}</p>
              <p className={styles.description}>{data.description}</p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <Newest />
      <Delivery />
      <InstaFeed />
      <FinalCta />
    </div>
  );
}
