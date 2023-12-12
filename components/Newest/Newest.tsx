import { client } from "@/app/lib/sanity";
import styles from "./Newest.module.css";
import { simplifiedProduct } from "@/app/interface";
import Link from "next/link";
import Image from "next/image";

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
    <div className={styles.container}>
      <h2>Our Newest Products</h2>
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
    </div>
  );
}
