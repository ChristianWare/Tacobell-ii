import { simplifiedProduct } from "@/app/interface";
import styles from "./PreviewCard.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import Label from "../Label/Label";

interface Props {
  data: simplifiedProduct;
  borderColor?: string;
  textColor?: string;
  btnType: string;
}

const PreviewCard = ({
  data,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          src={data.imageUrl ? data.imageUrl : "/images/default_room_image.jpg"}
          alt=''
          fill
          className={styles.img}
        />
        <div className={styles.labelContainer}>
          <Label text={data.categoryName} color='category' />
        </div>
      </div>
      <h3 className={styles.title}>{data.name}</h3>
      <div className={styles.info}>
        <p className={styles.price}>{data.description}</p>
        <div className={styles.btnContainer}>
          <Button
            btnType='primaryiv'
            text='More Details'
            href={`/product/${data.slug}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
