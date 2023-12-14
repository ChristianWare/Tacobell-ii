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
                Taste the most delicious Burritos before they&#39;re gone
              </h2>
              <p className={styles.copy}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                corrupti ipsam consequuntur autem, blanditiis quae.
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
