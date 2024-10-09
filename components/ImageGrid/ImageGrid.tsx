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
         
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
