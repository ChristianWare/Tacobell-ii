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
import { PortableText } from "@portabletext/react";
import Faq from "@/components/Faq/Faq";
import PostHero from "@/components/PostHero/PostHero";
import Taco from "../../../public/icons/taco.svg";
import Button from "@/components/Button/Button";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        images, 
        price, 
        name, 
        description, 
        "slug": slug.current,
        "categoryName": category->name,
        content,
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
      id: 2,
      title: "Calorie",
      value: "141 cal",
    },
    {
      id: 3,
      title: "Fat",
      value: "20g",
    },
    {
      id: 4,
      title: "Protien",
      value: "36g",
    },
  ];

  const specs = [
    {
      icon: <Taco width={25} height={25} className={styles.icon} />,
      value: "Gluten free",
    },
    {
      icon: <Taco width={25} height={25} className={styles.icon} />,
      value: "Gluten free",
    },
    {
      icon: <Taco width={25} height={25} className={styles.icon} />,
      value: "Gluten free",
    },
    {
      icon: <Taco width={25} height={25} className={styles.icon} />,
      value: "Gluten free",
    },
    {
      icon: <Taco width={25} height={25} className={styles.icon} />,
      value: "Gluten free",
    },
  ];

  return (
    <div className={styles.container}>
      <Nav color='olive' barColor='oliveBar' />
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <ImageGrid
              images={data.images.slice(0, 4)}
              text={data.categoryName}
            />
          </div>
          <div className={styles.topRight}>
            <h1 className={styles.heading}>{data.name}</h1>
              <div className={styles.price}>$ {data.price}</div>
            <div className={styles.nutritionBox}>
              {nutrition.map((x) => (
                <div key={x.id} className={styles.nutrition}>
                  <h6>
                    {x.title}: {x.value}
                  </h6>
                </div>
              ))}
            </div>
            <div className={styles.portableTextContent}>
              <PortableText value={data.content} />
            </div>
            <h6 className={styles.specsHeading}>Specifications:</h6>
            <div className={styles.specs}>
              {specs.map((x: any, index: number) => (
                <div key={index} className={styles.specsItem}>
                  {x.icon}
                  <p>{x.value}</p>
                </div>
              ))}
            </div>
            <div className={styles.btnContainer}>
              <Button text='View Menu' href='/menu' btnType='primaryiii' />
              <Button text='Contact us' href='/contact' btnType='primaryiv' />
            </div>
          </div>
        </div>

        <div className={styles.propDetails}>
          <div className={styles.left}></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <GalleryGrid images={data.images} />
      </LayoutWrapper>
      <PostHero />
      <Faq />
      <Delivery />
    </div>
  );
}
