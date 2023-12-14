import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./InstaFeed.module.css";
import Image from "next/image";
import Img from "../../public/images/bgimg.jpeg";
import Button from "../Button/Button";
import RotatingText from "../RotatingText/RotatingText";

const InstaFeed = () => {
  const images = [
    {
      src: Img,
    },
    {
      src: Img,
    },
    {
      src: Img,
    },
    {
      src: Img,
    },
    {
      src: Img,
    },
  ];

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Our latest  Instagram Posts</h2>
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
