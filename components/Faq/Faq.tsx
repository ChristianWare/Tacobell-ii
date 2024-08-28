"use client";

import { useState } from "react";
import styles from "./Faq.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Arrow from "../../public/icons/downArrow.svg";
import Label from "../Label/Label";
import Hamburger from "../../public/icons/taco.svg";

const faqs = [
  {
    id: 36,
    question: "What types of events do you cater?",
    answer:
      "We cater a wide range of events including weddings, corporate gatherings, parties, and more. Whether it's a small intimate gathering or a large event, we can accommodate your needs.",
  },
  {
    id: 36.1,
    question: "How far in advance should I place my catering order?",
    answer:
      "We recommend placing your catering order at least two weeks in advance to ensure availability and adequate preparation time. However, we can accommodate last-minute requests depending on the size and scope of the event.",
  },
  {
    id: 36.2,
    question: "Can I customize the menu for my event?",
    answer:
      "Absolutely! We offer customizable menus to fit your event’s theme and dietary needs. Whether you need vegetarian, vegan, gluten-free options, or a specific cuisine, we can tailor the menu to your preferences.",
  },
  {
    id: 36.3,
    question: "Do you offer delivery and setup services?",
    answer:
      "Yes, we provide delivery and setup services for all events. Our team ensures that everything is set up according to your specifications, so you can focus on enjoying your event.",
  },
] as const;

const Faq = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.labelContainer}>
            <Label text="FAQ's" />
          </div>
          <h2 className={styles.heading}>
            Your Taco Bell <br /> Questions Answered
          </h2>
          <div className={styles.content}>
            <div className={styles.top}>
              <p className={styles.topText}>
                Here are some commonly asked questions and their answers below.
                If you don&#39;t see your questions here, call us any time.
              </p>
              <Hamburger className={styles.hamburger} />
            </div>
            <div className={styles.border}>
              <div className={styles.bottom}>
                {faqs.map((x, i) => (
                  <div
                    key={x.id}
                    className={
                      selected === i
                        ? styles.qaContainer + " " + styles.showBorder
                        : styles.qaContainer
                    }
                    onClick={() => toggle(i)}
                  >
                    <div className={styles.headingArrowContainer}>
                      <div className={styles.h3Container}>
                        <span className={styles.index}>0{i + 1}. </span>
                        <h3 className={styles.question} lang='en'>
                          {x.question}
                        </h3>
                      </div>
                      {selected === i ? (
                        <Arrow
                          className={styles.iconFlip}
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Arrow className={styles.icon} width={20} height={20} />
                      )}
                    </div>
                    <div
                      className={
                        selected === i
                          ? styles.answerContainer + " " + styles.show
                          : styles.answerContainer
                      }
                    >
                      <p className={styles.answer} lang='en'>
                        {x.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className={styles.btnContainer}></div> */}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Faq;
