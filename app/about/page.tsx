import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../public/images/crunchwrap.jpg";
import AboutSection from "@/components/AboutSection/AboutSection";
import Mission from "@/components/Mission/Mission";
import Vision from "@/components/Vision/Vision";
import Delivery from "@/components/Delivery/Delivery";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";
import FinalCta from "@/components/FinalCta/FinalCta";

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        heading='About'
        copy="We're passionate about bringing you exceptional flavors and unforgettable dining experiences. Our team of talented chefs and friendly staff are committed to ensuring every meal is a memorable one. Join us as we continue to explore exciting new tastes and treat our community to the best in hospitality."
        src={Img}
      />
      <AboutSection />
      <Mission />
      <Vision />
      <Delivery />
      <FinalCTA2 />
      <FinalCta />
    </div>
  );
}
