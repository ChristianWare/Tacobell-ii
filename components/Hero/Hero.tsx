import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button/Button";
import Img from "../../public/images/img5.jpg";
import Nav from "../Nav/Nav";
import Image from "next/image";
import Taco from "../../public/icons/taco.svg";

const Hero = () => {
  return (
    <div className={styles.container}>
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
        <div className={styles.content}>
          <div className={styles.left}>
            <Taco className={styles.icon} width={60} height={60} />
            <h1 className={styles.heading}>
              Discover Bold Flavors: Experience Taco Bell&apos;s New Menu!{" "}
            </h1>
            <p className={styles.copy}>
              Explore our diverse menu and indulge in tacos crafted with the
              freshest ingredients and unique, mouthwatering flavors that keep
              you coming back for more.
            </p>
            <div className={styles.btnContainer}>
              <Button text='Contact us' href='/contact' btnType='primary' />
            </div>
          </div>
          <div className={styles.right}>
            {/* <RotatingText text='Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency • Chris Ware Agency' /> */}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
