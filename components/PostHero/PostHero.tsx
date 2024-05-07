import LayoutWrapper from "../LayoutWrapper";
import styles from "./PostHero.module.css";
import Breakfast from "../../public/icons/breakfast.svg";
import Fries from "../../public/icons/fries.svg";
import Drinks from "../../public/icons/drinks.svg";
import Dessert from "../../public/icons/dessert.svg";

const preHero = [
  {
    icon: <Breakfast width={60} height={60} className={styles.icon} />,
    feature: "Breakfast",
    desc: "Kickstart your day with our delectable selection of breakfast favorites, perfectly crafted to energize and satisfy",
  },
  {
    icon: <Fries width={60} height={60} className={styles.icon} />,
    feature: "Main Dishes",
    desc: "Dive into our main dishes, featuring a variety of bold flavors and hearty options designed to delight every palate.",
  },
  {
    icon: <Drinks width={60} height={60} className={styles.icon} />,
    feature: "Drinks",
    desc: "Refresh and rejuvenate with our assortment of drinks, from classic sodas to unique, flavorful concoctions.",
  },
  {
    icon: <Dessert width={60} height={60} className={styles.icon} />,
    feature: "Desserts",
    desc: "End on a sweet note with our irresistible desserts, the perfect finish to any meal.",
  },
];

const PostHero = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.contentTop}>
          <h2 className={styles.heading}>Browse our menu</h2>
          <p className={styles.copy}>
            Whether you’re craving something savory for breakfast, a
            satisfying main dish, a refreshing beverage, or a sweet dessert, our
            menu has something to excite everyone’s taste buds.
          </p>
        </div>
        <div className={styles.contentBottom}>
          {preHero.map((x, index) => (
            <div key={index} className={styles.box}>
              {x.icon}
              <h3 className={styles.value}>{x.feature}</h3>
              <p className={styles.description}>{x.desc}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default PostHero;
