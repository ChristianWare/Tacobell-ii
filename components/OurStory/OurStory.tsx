import Image from "next/image";
import Img from "../../public/images/savor.jpg";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./OurStory.module.css";

const OurStory = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img} fill alt='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>Our Story</h2>
            <p className={styles.copy}>
              Fueled by a passion for culinary excellence and a commitment to
              convenience, we set out to create a platform where anyone could
              enjoy their favorite meals, from savory pizzas to gourmet burgers,
              without ever having to leave the comfort of their home.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default OurStory;
