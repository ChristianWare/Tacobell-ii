import LayoutWrapper from "../LayoutWrapper";
import styles from "./C1.module.css";
import Image from "next/image";
import Img from "../../public/images/bgimg.jpeg";
import Label from "../Label/Label";
import ImageGrid from "../ImageGrid/ImageGrid";
import Taco from "../../public/icons/taco.svg";

const C1 = () => {
  return (
    <div className={styles.bgColor}>
        <ImageGrid />
    </div>
  );
};
export default C1;
