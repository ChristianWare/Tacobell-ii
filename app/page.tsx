import Newest from "@/components/Newest/Newest";
import Hero from "@/components/Hero/Hero";
import Delivery from "@/components/Delivery/Delivery";
import PostHero from "@/components/PostHero/PostHero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import Usp from "@/components/Usp/Usp";
import Popular from "@/components/Popular/Popular";

export default function Home() {
  return (
    <div>
      <Hero />
      <PostHero />
      <AboutUsSection />
      <Usp />
      <HowItWorks />
      <Popular />
      <Delivery />
    </div>
  );
}
