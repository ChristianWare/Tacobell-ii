import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Usp.module.css";
import Img from "../../public/images/meal.jpg";
import Crowd from "../../public/icons/crowd.svg";
import Course from "../../public/icons/course.svg";
import Zero from "../../public/icons/zero.svg";

const data = [
  {
    id: 1,
    title: "Crowd Pleasing",
    desc: "We’re happy to cater for every taste, preference, and dietary restriction.",
    icon: <Crowd className={styles.icon} />,
  },
  {
    id: 1,
    title: "3-course menus",
    desc: "Hungry? Don’t be. All value bundles come with dessert and a side.",
    icon: <Course className={styles.icon} />,
  },
  {
    id: 1,
    title: "Zero confusion",
    desc: "All items are labeled clearly, including special requests and dietary preferences.",
    icon: <Zero className={styles.icon} />,
  },
];

const Usp = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <h2 className={styles.heading}>
          Have an event?
          <br />
          We Cater!
        </h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img} fill alt='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.cardLeft}>{x.icon}</div>
                <div className={styles.cardRight}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Usp;
