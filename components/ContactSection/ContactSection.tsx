import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactSection.module.css";
import Taco from "../../public/icons/taco.svg";


const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact Us</h2>
          <h3 className={styles.headingii}>
            Discover unforgettable catering experiences with us
          </h3>
          <p className={styles.copy}>
            Reach out to us today to start planning your next event. Our team is
            here to craft a personalized menu that will leave a lasting
            impression on your guests.
          </p>
          <Taco className={styles.hamburger} />
        </div>
        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
