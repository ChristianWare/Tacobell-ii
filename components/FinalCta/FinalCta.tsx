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
                <h2 className={styles.heading}>
                  LET&#39;S TALK. <br /> BUT YOU FIRST.
                </h2>
                <h3 className={styles.headingii}>
                  How was your recent Taco Bell experience?
                </h3>
                <p className={styles.topText}>
                  Want to share feedback about your recent Taco Bell visit? Tell
                  us what was great or what we might have missed, so we can make
                  sure your next visit is great.
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
