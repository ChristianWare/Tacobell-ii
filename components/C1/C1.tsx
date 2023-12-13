import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./C1.module.css";
import Image from "next/image";
import Img from "../../public/images/bgimg.jpeg";
import Label from "../Label/Label";
import RotatingText from "../RotatingText/RotatingText";

const C1 = () => {
  return (
    <div className={styles.bgColor}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.labelContainer}>
                <Label text='A lot on your plate' />
              </div>
              <h2 className={styles.heading}>
                THE BEST STREET FOOD IN YOUR NECK OF THE WOODS
              </h2>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
              <div className={styles.rotatingTextContainer}>
                <RotatingText text='Eat great even late !' />
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default C1;
