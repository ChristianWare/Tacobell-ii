import Hero from "@/components/Hero/Hero";
import Delivery from "@/components/Delivery/Delivery";
import PostHero from "@/components/PostHero/PostHero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import Usp from "@/components/Usp/Usp";
import Popular from "@/components/Popular/Popular";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <PostHero />
      <AboutUsSection />
      <Usp />
      <HowItWorks />
      <Popular />
      <Testimonials />
      <Faq />
      <Delivery />
    </div>
  );
}
