import Faq from "../../components/Faq/Faq";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import Testimonials from "../../components/Testimonials/Testimonials";


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceDetails />
      <HowItWorks />
      <Testimonials />
      <Faq />
    </main>
  );
}
