import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./InstaFeed.module.css";
import Image from "next/image";
import Img from "../../public/images/bgimg.jpeg";
import Img1 from "../../public/images/img1.png";
import Img2 from "../../public/images/img2.png";
import Img3 from "../../public/images/img3.png";
import Img4 from "../../public/images/img4.png";
import Button from "../Button/Button";
import RotatingText from "../RotatingText/RotatingText";

const InstaFeed = () => {
  const images = [
    {
      src: Img,
    },
    {
      src: Img1,
    },
    {
      src: Img2,
    },
    {
      src: Img3,
    },
    {
      src: Img4,
    },
  ];

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Our latest Instagram Posts</h2>
            <div className={styles.btnContainer}>
              <Button href='/' btnType='secondary' text='Follow Us' />
            </div>
          </div>
          <div className={styles.content}>
            <>
              {images.map((x, index) => (
                <div key={index} className={styles.section}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.src}
                      alt='image'
                      fill
                      className={styles.img}
                    />
                  </div>
                </div>
              ))}
              <div className={styles.box}>
                <RotatingText />
              </div>
            </>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default InstaFeed;
