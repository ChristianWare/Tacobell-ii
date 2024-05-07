import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button/Button";
import Img from "../../public/images/img5.jpg";
import Image from "next/image";
import Nav from "../Nav/Nav";
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
              Tired of relying solely on platforms like Airbnb or VRBO? We
              empower property owners to take control of their bookings with a
              custom website to showcase thier unique offerings.
            </p>
            <div className={styles.btnContainer}>
              <Button text='Contact us' href='/contact' btnType='secondary' />
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
