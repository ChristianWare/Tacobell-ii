import styles from "./StarCluster.module.css";

interface Props {
  color?: string;
}

const StarCluster = ({ color = "" }: Props) => {
  return (
    <span className={styles.starContainer}>
      <span className={`${styles.star} ${styles[color]}`}></span>
      <span className={`${styles.star} ${styles[color]}`}></span>
      <span className={`${styles.star} ${styles[color]}`}></span>
      <span className={`${styles.star} ${styles[color]}`}></span>
      <span className={`${styles.star} ${styles[color]}`}></span>
    </span>
  );
};
export default StarCluster;
