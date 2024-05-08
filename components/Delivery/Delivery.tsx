import LayoutWrapper from "../LayoutWrapper";
import styles from "./Delivery.module.css";
import DoorDash from "../../public/icons/doordash.svg";
import Ubereats from "../../public/icons/ubereats.svg";
import Grubhub from "../../public/icons/grubhub.svg";
import Deliveroo from "../../public/icons/deliveroo.svg";

const Delivery = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Order from your favorite app today!
            </h2>
          </div>
          <div className={styles.bottom}>
            <DoorDash className={styles.icon} width={75} height={75} />
            <Ubereats className={styles.icon} width={75} height={75} />
            <Grubhub className={styles.icon} width={75} height={75} />
            <Deliveroo className={styles.icon} width={75} height={75} />
          </div>
      </LayoutWrapper>
    </div>
  );
};
export default Delivery;
