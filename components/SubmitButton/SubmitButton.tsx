import styles from "./SubmitButton.module.css";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    // <div className={styles.container}>
    <button
      type='submit'
      className={pending ? styles.btn + " " + styles.disabled : styles.btn}
      disabled={pending}
    >
      {pending ? "Sending..." : "Submit"}
    </button>
    // </div>
  );
};
export default SubmitButton;
