import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../public/images/img5.jpg";
import MenuSection from "@/components/MenuSection/MenuSection";
import Delivery from "@/components/Delivery/Delivery";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";
import FinalCta from "@/components/FinalCta/FinalCta";
import { client } from "../lib/sanity";
import { categoryData, simplifiedProduct } from "../interface";

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
    <div>
      <PageIntro
        heading='Menu'
        copy="Discover the delicious variety Taco Bell has to offer with our extensive menu of mouth-watering options. From classic favorites to exciting new flavors, there's something for everyone to enjoy."
        src={Img}
      />
      <MenuSection data={data} categoryData={categoryData} />
      <Delivery />
      <FinalCTA2 />
      <FinalCta />
    </div>
  );
}
