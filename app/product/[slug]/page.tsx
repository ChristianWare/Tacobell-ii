import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import styles from "./ProductPage.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Nav from "@/components/Nav/Nav";
import Delivery from "@/components/Delivery/Delivery";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import GalleryGrid from "@/components/GalleryGrid/GalleryGrid";
import ImageGrid from "@/components/ImageGrid/ImageGrid";
import Popular from "@/components/Popular/Popular";

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

export const revalidate = 10;

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  const nutrition = [
    {
      id: 1,
      title: "Carb",
      value: "20g",
    },
    {
      id: 1,
      title: "Calorie",
      value: "141 cal",
    },
    {
      id: 1,
      title: "Fat",
      value: "20g",
    },
    {
      id: 1,
      title: "Protien",
      value: "36g",
    },
  ];

  return (
    <div className={styles.container}>
      <Nav color='olive' barColor='oliveBar' />
      <LayoutWrapper>
        <div className={styles.top}>
          <div>
            <h1 className={styles.heading}>{data.name}</h1>
            <div className={styles.nutritionBox}>
              {nutrition.map((x) => (
                <div key={x.id} className={styles.nutrition}>
                  <h6>
                    {x.title}: {x.value}
                  </h6>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.price}>$ {data.price}</div>
        </div>
        <ImageGrid images={data.images.slice(0, 4)} text={data.categoryName} />
        <div className={styles.propDetails}>
          <div className={styles.left}>
            <p className={styles.copy}>{data.description}</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <GalleryGrid images={data.images} />
      </LayoutWrapper>
      <Popular />
      <HowItWorks />
      <Delivery />
    </div>
  );
}
