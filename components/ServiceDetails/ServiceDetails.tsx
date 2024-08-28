import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServiceDetails.module.css";
import Image from "next/image";
import S1 from "../../public/images/foodtruck.jpg";
import S2 from "../../public/images/service2.jpg";
import S3 from "../../public/images/service3.jpg";
import Wedding from "../../public/icons/wedding.svg";
import Corporate from "../../public/icons/corporate.svg";
import Private from "../../public/icons/private.svg";
import Button from "../Button/Button";

const data = [
  {
    id: 1,
    icon: <Wedding className={styles.icon} />,
    title: "Food Truck Catering",
    desc: "Bring the excitement of street food to your event with our food truck catering services. We offer a diverse menu that can be customized to suit your event’s theme and your guests' preferences.",
    details: [
      {
        id: 1.1,
        info: "Customizable menu options to fit the theme of your event.",
      },
      {
        id: 1.2,
        info: "Experienced staff to serve your guests efficiently.",
      },
      {
        id: 1.3,
        info: "Includes setup, service, and cleanup, so you can enjoy your event.",
      },
    ],
    src: S1,
  },
  {
    id: 2,
    icon: <Corporate className={styles.icon} />,
    title: "Corporate Events",
    desc: "Elevate your corporate gatherings with our professional catering services. From board meetings to large conferences, we provide gourmet meals that leave a lasting impression on your guests.",
    details: [
      {
        id: 2.1,
        info: "Wide range of menu options from breakfast to lunch and dinner.",
      },
      {
        id: 2.2,
        info: "Expert planning to accommodate dietary restrictions and preferences.",
      },
      {
        id: 2.3,
        info: "Timely delivery and setup to ensure your event runs smoothly.",
      },
    ],
    src: S2,
  },
  {
    id: 3,
    icon: <Private className={styles.icon} />,
    title: "Private Parties",
    desc: "Host an extraordinary private party with our top-notch catering services. Whether it's an intimate gathering or a grand celebration, we bring flavor and flair to your event.",
    details: [
      {
        id: 3.1,
        info: "Tailored menus featuring local and seasonal ingredients.",
      },
      {
        id: 3.2,
        info: "Experienced chefs and servers to create a memorable dining experience.",
      },
      {
        id: 3.3,
        info: "Full bar service available, including signature cocktails.",
      },
    ],
    src: S3,
  },
];


const ServiceDetails = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.top}>{/* <h2>Weddings</h2> */}</div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.infoContainer}>
              <div className={styles.left}>
                {x.icon}
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.desc}</p>
                <ul className={styles.mapContainer}>
                  {x.details.map((y) => (
                    <li key={y.id} className={styles.info}>
                      {y.info}
                    </li>
                  ))}
                </ul>
                <div className={styles.btnContainer}>
                  <Button
                    text='Start Your Order'
                    href='/'
                    btnType='primaryiii'
                  />
                  <Button text='More Questions?' href='/' btnType='primaryiv' />
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.imgContainer}>
                  <Image src={x.src} alt='' fill className={styles.img} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServiceDetails;
