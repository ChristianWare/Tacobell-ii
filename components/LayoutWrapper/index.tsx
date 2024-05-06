import ContentPadding from "../ContentPadding/ContentPadding";
import styles from "./LayoutWrapper.module.css";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <ContentPadding>{children}</ContentPadding>
    </div>
  );
};
export default LayoutWrapper;
