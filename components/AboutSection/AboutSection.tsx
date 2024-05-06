import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";
import Taco from "../../public/icons/taco.svg";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.labelContainer}>
              <Taco className={styles.icon} width={75} height={75} />
              <Label color='' text='About us' />
            </div>
            <h2 className={styles.heading} lang='en'>
              TACO BELL IS A FLAVORFUL FEASTING ADVENTURE. INDULGE, SIP, AND
              ENJOY THE TASTY DELIGHTS WITH YOUR COMPANIONS.
            </h2>
            <p className={styles.copy}>
              SPAWNED BY A CREW OF TACO ENTHUSIASTS AIMING TO IGNITE A TASTEBUD
              REVOLUTION IN Downey, California , TACO BELL AROSE. WE EMBRACE
              FLAVOR, CHERISH REFRESHMENTS, AND THRIVE ON CRAFTING MEMORABLE
              MOMENTS OF TACO DELIGHT.
            </p>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default AboutSection;
