import styles from "./Popular.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button/Button";
import { client } from "@/app/lib/sanity";
import { simplifiedProduct } from "@/app/interface";
import PreviewCard from "../PreviewCard/PreviewCard";

async function getData() {
  const query = `*[_type == "product"][0...3] | order(_createdAt desc) {
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

export default async function Popular() {
  const data: simplifiedProduct[] = await getData();

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>What&apos;s Trending...</h2>
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
            <Button btnType='primaryiii' text='See Entire Menu' href='/menu' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
