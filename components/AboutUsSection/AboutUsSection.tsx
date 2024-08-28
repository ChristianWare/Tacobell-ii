import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutUsSection.module.css";
import RotatingText from "../RotatingText/RotatingText";

const AboutUsSection = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>About us</h2>
            <RotatingText
              text='Live mas • Live mas • Live mas • Live mas • Live mas • Live mas •'
              color='olive'
            />
            {/* <div className={styles.iconContainer}>
              <Stew className={styles.icon} />
            </div> */}
          </div>
          <div className={styles.right}>
            <h3 className={styles.subHeading}>
              We&lsquo;re more than just a fast food company...
            </h3>
            <p className={styles.copy}>
              We&lsquo;re a team of culinary enthusiasts dedicated to bringing
              unparalleled dining experiences right to your doorstep
            </p>
            <p className={styles.copy}>
              We specialize in food, delivering unparalleled quality and
              innovation. Our commitment to excellence is evident in every dish
              we create, ensuring that we meet the unique needs and preferences
              of our customers.
            </p>
            <div className={styles.btnContainer}>
              <Button text='More About us' href='/about' btnType='primaryiii' />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutUsSection;
