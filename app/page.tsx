import Newest from "@/components/Newest/Newest";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import C1 from "@/components/C1/C1";
import C2 from "@/components/C2/C2";
import Delivery from "@/components/Delivery/Delivery";
import InstaFeed from "@/components/InstaFeed/InstaFeed";
import FinalCta from "@/components/FinalCta/FinalCta";
import PostHero from "@/components/PostHero/PostHero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";

export default function Home() {
  return (
    <div>
      <Hero />
      <PostHero />
      <AboutSection />
      <Newest />
      <HowItWorks />
      <Delivery />
      <FinalCTA2 />
      <FinalCta />
    </div>
  );
}
