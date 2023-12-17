import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./C1.module.css";
import Image from "next/image";
import Img from "../../public/images/bgimg.jpeg";
import Label from "../Label/Label";
import ImageGrid from "../ImageGrid/ImageGrid";
import Taco from "../../public/icons/taco.svg";

const C1 = () => {
  return (
    <div className={styles.bgColor}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.labelContainer}>
                <Taco className={styles.icon} width={75} height={75} />

                <Label text='A lot on your plate' />
              </div>
              <h2 className={styles.heading}>
                THE BEST MEXICAN FOOD IN YOUR NECK OF THE WOODS
              </h2>
            </div>
          </div>
          <ImageGrid />
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default C1;
