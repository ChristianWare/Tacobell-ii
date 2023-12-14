"use client";

import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import styles from "./FinalCta.module.css";
// import { fadeIn } from "../../../animation/variants";
// import { motion } from "framer-motion";

const FinalCta = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.layoutWrapper}>
          <div className={styles.content}>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <h2 className={styles.heading}>Contact Us</h2>
                <h3 className={styles.headingii}>
                  Your rental property deserves more than just a listing. It
                  deserves a spotlight.
                </h3>
                <p className={styles.topText}>
                  Reach out to us today to see how you can begin to take
                  advantage of the benefits of having your own direct booking
                  website for your rental property.
                </p>
              
              </div>
              <div className={styles.right}>
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};
export default FinalCta;
