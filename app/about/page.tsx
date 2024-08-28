import AboutHero from "../../components/AboutHero/AboutHero";
import AboutSection from "../../components/AboutSection/AboutSection";
import Faq from "../../components/Faq/Faq";
import Galleryii from "../../components/Galleryii/Galleryii";
import Mission from "../../components/Mission/Mission";
import OurMission from "../../components/OurMission/OurMission";
import OurStory from "../../components/OurStory/OurStory";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
      <OurStory />
      <OurMission />
      <Mission />
      <Galleryii />
      <Testimonials />
      <Faq />
    </main>
  );
}
