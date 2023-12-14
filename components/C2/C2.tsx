import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./C2.module.css";
import Image from "next/image";
import Img from "../../public/images/bgimg.jpeg";

const C2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LayoutWrapper>
          <ContentPadding>
            <h2 className={styles.heading}>
              Taste the most delicious Tacos in Los Angeles, CA
            </h2>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              corrupti ipsam consequuntur autem, blanditiis quae.
            </p>
            <div className={styles.btnContainer}></div>
          </ContentPadding>
        </LayoutWrapper>
      </div>
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <Image src={Img} alt='image' fill className={styles.img} />
        </div>
      </div>
    </div>
  );
};
export default C2;
