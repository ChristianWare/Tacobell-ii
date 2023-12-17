import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Nav from "../Nav/Nav";
import Img from "../../public/images/bgimg.jpeg";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='img'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        priority
      />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h1 className={styles.heading}>live mas</h1>
            <p className={styles.copy}>
              Welcome to Taco Bell&#39;s redesigned website. &#39;Live Mas&#39;
              animates our brand and encapsulates the company’s philosophy of
              enriching the lives of our customers in every meal we make.
            </p>
            
            <div className={styles.btnContainer}>
              <Button href='/' btnType='primary' text='Menu' />
              <Button href='/' btnType='secondary' text='Contact Us' />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </>
  );
};
export default Hero;
