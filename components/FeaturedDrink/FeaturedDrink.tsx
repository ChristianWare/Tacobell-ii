import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import styles from "./FeaturedDrink.module.css";
import RollingPin from "../../public/icons/rollingpin.svg";
import Pestle from "../../public/icons/pestle.svg";
import PerfectlySpiced from "../../public/icons/perfectlyspiced.svg";
import Fresh from "../../public/icons/fresh.svg";
import Farm from "../../public/icons/farm.svg";
import Button from "@/components/Button/Button";
import { PortableText } from "@portabletext/react"; // Import PortableText

interface Drinks {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  content?: any; // Adding content field for PortableText
}

const FeaturedDrink = ({ drinks }: { drinks: Drinks }) => {
  const nutrition = [
    {
      id: 1,
      title: "Carb",
      value: "20g",
    },
    {
      id: 2,
      title: "Calorie",
      value: "141 cal",
    },
    {
      id: 3,
      title: "Fat",
      value: "20g",
    },
    {
      id: 4,
      title: "Protein", // Fixed spelling from "Protien" to "Protein"
      value: "36g",
    },
  ];

  const specs = [
    {
      icon: <RollingPin className={styles.icon} />,
      value: "Freshly Made",
    },
    {
      icon: <Pestle className={styles.icon} />,
      value: "Authentic Flavors",
    },
    {
      icon: <Farm className={styles.icon} />,
      value: "Farm Fresh",
    },
    {
      icon: <Fresh className={styles.icon} />,
      value: "No Additives",
    },
    {
      icon: <PerfectlySpiced className={styles.icon} />,
      value: "Perfectly Spiced",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.headingMain}>Featured Drink</h2>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.imgContainer}>
              <Image
                src={drinks.imageUrl} // Using drinks.imageUrl directly
                alt={drinks.name}
                fill
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.topRight}>
            <h3 className={styles.heading}>{drinks.name}</h3>
            <div className={styles.price}>$ {drinks.price}</div>
            {/* Separate plain text description */}
            <div className={styles.nutritionBox}>
              {nutrition.map((x) => (
                <div key={x.id} className={styles.nutrition}>
                  <h6>
                    {x.title}: {x.value}
                  </h6>
                </div>
              ))}
            </div>
            <div className={styles.description}>
              <p>{drinks.description}</p>
            </div>
            <div className={styles.portableTextContent}>
              <PortableText value={drinks.content} />
            </div>
            <h6 className={styles.specsHeading}>Specifications:</h6>
            <div className={styles.specs}>
              {specs.map((x, index) => (
                <div key={index} className={styles.specsItem}>
                  {x.icon}
                  <p>{x.value}</p>
                </div>
              ))}
            </div>
            <div className={styles.btnContainer}>
              <Button
                text='More Details'
                href='/product/the-chirulin'
                btnType='primaryiii'
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default FeaturedDrink;
