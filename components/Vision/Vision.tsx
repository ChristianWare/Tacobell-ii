import styles from "./Vision.module.css";
import Img1 from "../../public/images/img2.png";
import LayoutWrapper from "../LayoutWrapper";
import ImageGridii from "../ImageGridii/ImageGridii";

const Vision = () => {
  return (
    <LayoutWrapper>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Our Vision</h2>
          <p className={styles.copy}>
            We envision a future where every Taco Bell thrives by connecting
            directly with customers, transcending the limitations of traditional
            delivery platforms. Our commitment is to provide innovative
            solutions that redefine the fast-food experience, ensuring our
            locations maximize revenue, build lasting relationships with
            patrons, and flourish in a more sustainable and brand-centric dining
            landscape.
          </p>
        </div>
        <div className={styles.right}>
          <ImageGridii
            src1={Img1}
            src2={Img1}
            src3={Img1}
            src4={Img1}
            src5={Img1}
          />
        </div>
      </div>
    </LayoutWrapper>
  );
};
export default Vision;
