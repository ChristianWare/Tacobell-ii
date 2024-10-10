import Hero from "@/components/Hero/Hero";
import Delivery from "@/components/Delivery/Delivery";
import PostHero from "@/components/PostHero/PostHero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import Usp from "@/components/Usp/Usp";
import Popular from "@/components/Popular/Popular";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faq from "@/components/Faq/Faq";
import { client } from "./lib/sanity";
import MenuSection from "@/components/MenuSection/MenuSection";
import { simplifiedProduct } from "./interface";
import FeaturedDrink from "@/components/FeaturedDrink/FeaturedDrink";

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

async function getFeaturedDrinkData() {
  const query = `*[_type == "product" && category->name == "Drinks"][4] {
    _id,
    price,
    name,
    description,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 10;

export default async function Home() {
  const productData: simplifiedProduct[] = await getProductData();
  const featuredDrink = await getFeaturedDrinkData(); // Fetch first drink

  return (
    <div>
      <Hero />
      <MenuSection data={productData} />
      <AboutUsSection />
      <FeaturedDrink drinks={featuredDrink} />{" "}
      {/* Pass the first drink as a prop */}
      <Usp />
      <HowItWorks />
      <Popular />
      <Testimonials />
      <Faq />
      <Delivery />
    </div>
  );
}
