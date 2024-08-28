import Image from "next/image";
import Img from "../../public/images/browse.jpg";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./OurMission.module.css";

const OurMission = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Our Mission</h2>
            <p className={styles.copy}>
              Our mission is to bring joy and convenience to the dining table.
              We aim to make gourmet dining accessible to everyone, everywhere,
              by offering a seamless online ordering system, fast delivery, and
              unparalleled customer service.
            </p>
            <p className={styles.copy}>
              We believe that everyone deserves to indulge in delicious food,
              and we&apos;re here to make that happen, one delivery at a time.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img} fill alt='' className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default OurMission;
