import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./C2.module.css";
import Burrito from "../../public/icons/burrito.svg";

const C2 = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                We have the best Burritos ever. Hands down.
              </h2>
              <p className={styles.copy}>
                The heart of these burritos often boasts seasoned ground beef,
                grilled chicken, or savory beans, providing a protein-packed
                foundation. Complementing this is a symphony of complementary
                elements, such as seasoned rice, melted cheese, diced tomatoes,
                and crisp lettuce, all coming together to create a textural and
                flavorful experience.
              </p>
              <div className={styles.btnContainer}></div>
            </div>
            <div className={styles.right}>
              <Burrito className={styles.icon} width={150} height={150} />
              <Burrito className={styles.icon} width={150} height={150} />
              <Burrito className={styles.icon} width={150} height={150} />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default C2;
