import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../public/images/bgimg.jpeg";
import FinalCta from "@/components/FinalCta/FinalCta";
import FinalCTA2 from "@/components/FinalCTA2/FinalCTA2";
import Delivery from "@/components/Delivery/Delivery";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

export default function ContactPage() {
  return (
    <div>
      <PageIntro
        heading='Contact us'
        copy='Want to share feedback about your recent Taco Bell visit? Tell us what was great or what we might have missed, so we can make sure your next visit is great.'
        src={Img}
      />
      <ContactInfo />
      <Delivery />
      <FinalCTA2 />
      <FinalCta />
    </div>
  );
}
