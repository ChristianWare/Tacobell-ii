import Image from 'next/image';
import styles from './ImageGrid.module.css'
import Img from '../../public/images/img1.png'

const ImageGrid = () => {
  return (
    <div className={styles.content}>
      <div className={styles.boxContainer}>
        <div className={styles.box1}>
          <Image
            src={Img}
            alt='drone image 2'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles.box2}>
          <Image
            src={Img}
            alt='drone image 2'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles.box3}>
          <h5>Skydio 2+</h5>
        </div>

        <div className={styles.box4}>
          <h5>DJI Mini SE</h5>
          <a></a>
        </div>

        <div className={styles.box5}>
          <Image
            src={Img}
            alt='drone image 3'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div className={styles.boxContainer2}>
        <div className={styles.box1B}>
          <Image
            src={Img}
            alt='drone image 4'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles.box2B}>
          <h5>EXO Cinemaster 2</h5>
        </div>
        <div className={styles.box3B}>
          <Image
            src={Img}
            alt='drone image 5'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles.box4B}>
          <h5>Matrice 300</h5>
        </div>
        <div className={styles.box5B}>
          <Image
            src={Img}
            alt='drone image 6'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
}
export default ImageGrid