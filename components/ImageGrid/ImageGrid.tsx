import Image from "next/image";
import styles from "./ImageGrid.module.css";
import Img from "../../public/images/img1.png";
import Fries from "../../public/images/fries.jpg";
import Chalupa from "../../public/images/chalupa.jpg";
import CrunchWrap from "../../public/images/crunchwrap.jpg";
import Tacos from "../../public/images/tacos.webp";
import Taco from "../../public/images/taco.jpg";
import Burrito from "../../public/images/burrito.jpg";

const ImageGrid = () => {
  return (
    <div className={styles.content}>
      <div className={styles.boxContainer}>
        <div className={styles.box1}>
          <Image
            src={Fries}
            alt='Nacho fries'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.box2}>
          <Image
            src={Chalupa}
            alt='drone image 2'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.box3}>
          <h5>Nacho Fries</h5>
        </div>

        <div className={styles.box4}>
          <h5>Challupas</h5>
          <a></a>
        </div>

        <div className={styles.box5}>
          <Image
            src={Taco}
            alt='drone image 3'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.boxContainer2}>
        <div className={styles.box1B}>
          <Image
            src={CrunchWrap}
            alt='drone image 4'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.box2B}>
          <h5>Crunchwrap Supreme</h5>
        </div>
        <div className={styles.box3B}>
          <Image
            src={Tacos}
            alt='drone image 5'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.box4B}>
          <h5>Gordita Crunch</h5>
        </div>
        <div className={styles.box5B}>
          <Image
            src={Burrito}
            alt='drone image 6'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};
export default ImageGrid;
