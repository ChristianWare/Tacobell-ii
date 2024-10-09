import MenuSection from "@/components/MenuSection/MenuSection";
import Delivery from "@/components/Delivery/Delivery";
import { client } from "../lib/sanity";
import { categoryData, simplifiedProduct } from "../interface";
import MenuHero from "@/components/MenuHero/MenuHero";
import Faq from "@/components/Faq/Faq";

async function getProductData() {
  const query = `*[_type == "product"]  {
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

async function getCategoryData() {
  const query = `*[_type == "category"] | order(_createdAt desc) {
  _id,
  name
}`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 10;

export default async function MenuPage() {
  const data: simplifiedProduct[] = await getProductData();
  const categoryData: categoryData[] = await getCategoryData();

  return (
    <main>
      <MenuHero />
      <MenuSection data={data} categoryData={categoryData} />
      <Faq />
      <Delivery />
    </main>
  );
}
