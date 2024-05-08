import styles from "./Vision.module.css";
import ImageGrid from "../Image/ImageGrid/ImageGrid";
import Img1 from "../../../public/images/img1.png";
import Img2 from "../../../public/images/img2.png";
import Img3 from "../../../public/images/img3.png";
import Img4 from "../../../public/images/img6.png";
import Img5 from "../../../public/images/img5.png";
import Label from "../Label/Label";
import LayoutWrapper from "../Layout/LayoutWrapper";
import ContentPadding from "../Layout/ContentPadding/ContentPadding";

const Vision = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.content}>
          <div className={styles.left}>
            <Label text='Long-term aspirations' />
            <h2 className={styles.heading}>Our Vision</h2>
            <p className={styles.copy}>
              We envision a future where every homeowner thrives by connecting
              directly with travelers, transcending the limitations of
              traditional platforms like Airbnb. Our commitment is to provide
              innovative solutions that redefine the vacation rental experience,
              ensuring homeowners maximize revenue, build lasting relationships
              with guests, and flourish in a more sustainable and owner-centric
              hospitality landscape.
            </p>
          </div>
          <div className={styles.right}>
            <ImageGrid
              src1={Img2}
              src2={Img1}
              src3={Img5}
              src4={Img4}
              src5={Img3}
            />
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default Vision;
