import PageIntro from "@/components/PageIntro/PageIntro";
import Img from "../../public/images/img5.jpg";
import Newest from "@/components/Newest/Newest";

export default function MenuPage() {
  return (
    <div>
      <PageIntro
        heading='Menu'
        copy="Discover the delicious variety Taco Bell has to offer with our extensive menu of mouth-watering options. From classic favorites to exciting new flavors, there's something for everyone to enjoy."
        src={Img}
      />
      <Newest />
    </div>
  );
}
