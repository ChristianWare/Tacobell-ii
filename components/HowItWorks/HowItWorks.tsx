import LayoutWrapper from "../LayoutWrapper";
import styles from "./HowItWorks.module.css";
import Image from "next/image";
import Img from "../../public/images/tacolove1.jpg";
import Img2 from "../../public/images/tacolove2.jpg";
import Img3 from "../../public/images/tacolove3.jpg";
import Img4 from "../../public/images/tacolove4.jpg";

const data = [
  {
    id: 1,
    heading: "Browse & Select",
    src: Img,
    desc: "Explore our diverse menu to find your next meal obsession.",
  },
  {
    id: 2,
    heading: "Customize & order",
    src: Img2,
    desc: "Tailor your meal to your preferences.",
  },
  {
    id: 3,
    heading: "We craft & deliver",
    src: Img3,
    desc: "Our chefs whip up your meal using only the freshest ingredients.",
  },
  {
    id: 4,
    heading: "Savor the Flavor",
    src: Img4,
    desc: "The moment has arrived. Unpack, unwind, and enjoy your culinary delight.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>How does it work?</h2>
            <h3 className={styles.subHeading}>Your Steps</h3>
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <h4 className={styles.title}>{x.heading}</h4>
                <div className={styles.imgContainer}>
                  <Image src={x.src} alt='' fill className={styles.img} />
                </div>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default HowItWorks;
