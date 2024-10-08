import Image from "next/image";
import styles from "./ImageGrid.module.css";
import Label from "../Label/Label";
import { urlFor } from "@/app/lib/sanity"; // Import urlFor function

interface Props {
  images: any[];
  text: string;
}

const ImageGrid = ({ images, text }: Props) => {
  return (
    <div className={styles.imgGrid}>
      {images[0] && (
        <div className={styles.imgContainer}>
          <Image
            src={urlFor(images[0]).url()}
            alt={images[0]?.alt || "Image 1"}
            fill
            className={styles.img}
          />
          {/* <div className={styles.labelContainer}>
              <Label text={text} color='category' />
            </div> */}
        </div>
      )}
      
      {/* <div className={styles.gridRight}>
        {images[1] && (
          <div className={styles.imgContainer2}>
            <Image
              src={urlFor(images[1]).url()} 
              alt={images[1]?.alt || "Image 2"}
              fill
              className={styles.img}
            />
          </div>
        )}
        {images[2] && (
          <div className={styles.imgContainer3}>
            <Image
              src={urlFor(images[2]).url()} 
              alt={images[2]?.alt || "Image 3"}
              fill
              className={styles.img}
            />
          </div>
        )}
        {images[3] && (
          <div className={styles.imgContainer3}>
            <Image
              src={urlFor(images[3]).url()} // Use urlFor to generate the image URL
              alt={images[3]?.alt || "Image 4"}
              fill
              className={styles.img}
            />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default ImageGrid;
