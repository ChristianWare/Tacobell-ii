"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./HowItWorks.module.css";
import Label from "../Label/Label";

const process = [
  {
    id: 59,
    processName: "Browse Our Menu",
    processDescription:
      "Visit our menu page to explore our wide range of dishes, including breakfast, main courses, drinks, and desserts.",
  },
  {
    id: 60,
    processName: "Select Your Favorites",
    processDescription:
      "Choose the items you’d like to order, specifying any custom options or special requests, and add them to your cart.",
  },
  {
    id: 61,
    processName: "Checkout",
    processDescription:
      "Proceed to checkout, where you can review your order, apply any promotional codes, and enter your delivery details.",
  },
  {
    id: 62,
    processName: "Confirm and Enjoy",
    processDescription:
      "Complete your payment securely online. Once confirmed, sit back and relax—we’ll prepare and deliver your order straight to your doorstep, fresh and ready to savor!",
  },
];

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            {/* <Label color='white' text='How we do things' /> */}
            <h2 className={styles.heading}>How to order online</h2>
            <p className={styles.topText}>
              Ordering your favorite meals from us is quick and easy! Follow
              these simple steps to enjoy delicious food delivered right to your
              doorstep without any hassle.
            </p>
          </div>
          <div className={styles.right}>
            {process.map((x, index) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.box}>
                  <div className={styles.boxLeft}>
                    <span className={styles.number}>{`${index + 1}`}</span>
                  </div>
                  <div className={styles.boxRight}>
                    <h3 className={styles.processName}>{x.processName}</h3>
                    <p className={styles.copy}>{x.processDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default HowItWorks;
