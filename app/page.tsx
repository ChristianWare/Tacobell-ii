import Newest from "@/components/Newest/Newest";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import C1 from "@/components/C1/C1";
import C2 from "@/components/C2/C2";
import Delivery from "@/components/Delivery/Delivery";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <C1 />
      <Newest />
      <C2 />
      <Delivery />
    </div>
  );
}
