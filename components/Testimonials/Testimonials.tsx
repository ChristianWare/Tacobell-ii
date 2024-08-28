import styles from "./Testimonials.module.css";
import StarCluster from "../StarCluster/StarCluster";
import Person from "../../public/icons/person.svg";
import Pasta from "../../public/icons/salad.svg";
import Taco from "../../public/icons/taco.svg";

const reviews = [
  {
    id: 71,
    review:
      "Taco Bell never disappoints! The Crunchwrap Supreme was packed with flavor, and the service was quick and friendly. Perfect for a late-night craving.",
    reviewer: "Carlos M.",
    company: "Phoenix, AZ",
  },
  {
    id: 72,
    review:
      "Absolutely love this Taco Bell location. The staff is always upbeat, and the food is consistently fresh. The Doritos Locos Tacos are my go-to!",
    reviewer: "Sara L.",
    company: "Tempe, AZ",
  },
  {
    id: 73,
    review:
      "Great experience every time. The food is hot, the service is fast, and the prices can't be beat. My kids are obsessed with the cheesy gordita crunch.",
    reviewer: "David P.",
    company: "Glendale, AZ",
  },
  {
    id: 74,
    review:
      "This Taco Bell is the best! The food is always fresh, and the staff is super friendly. The chalupas are to die for!",
    reviewer: "Megan K.",
    company: "Scottsdale, AZ",
  },
  {
    id: 75,
    review:
      "The service was excellent, and the food was even better. I always get the Beefy 5-Layer Burrito, and it never disappoints!",
    reviewer: "Jason W.",
    company: "Chandler, AZ",
  },
  {
    id: 76,
    review:
      "Fast service and great food. I tried the new grilled cheese burrito, and it was amazing. Highly recommend this Taco Bell!",
    reviewer: "Emily H.",
    company: "Tucson, AZ",
  },
  {
    id: 77,
    review:
      "This Taco Bell location is top-notch. The staff is always friendly, and the food is fresh and delicious. The cinnamon twists are a must-try!",
    reviewer: "Brian S.",
    company: "Mesa, AZ",
  },
  {
    id: 78,
    review:
      "I visit this Taco Bell often, and it's always a good experience. The nacho fries are my favorite, and they never disappoint!",
    reviewer: "Jessica R.",
    company: "Gilbert, AZ",
  },
  {
    id: 79,
    review:
      "Always a great experience at this Taco Bell. The quesadilla was perfectly grilled, and the Baja Blast is the perfect drink to wash it down.",
    reviewer: "Anthony T.",
    company: "Surprise, AZ",
  },
  {
    id: 80,
    review:
      "Taco Bell has always been my go-to for quick and tasty food. The soft tacos are always fresh, and the service is speedy.",
    reviewer: "Samantha P.",
    company: "Peoria, AZ",
  },
  {
    id: 81,
    review:
      "I love coming to this Taco Bell. The atmosphere is fun, the food is always hot and tasty, and the staff is super friendly. Highly recommend!",
    reviewer: "Mark R.",
    company: "Goodyear, AZ",
  },
] as const;


const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.top}>
            <Pasta className={styles.pasta} />
            <Taco className={styles.hamburger} />
            <h2 className={styles.heading}>What our clients say</h2>
            <p className={styles.copy}>
              Discover What Our Clients Have to Say About Their Dining
              Experience with Us. We use the freshest ingredients and latest
              culinary techniques to ensure that every event is memorable,
              delicious, and seamless. Our team is committed to delivering
              exceptional service, on time and within budget.
            </p>
            <StarCluster color='tan' />
          </div>
        </div>
      </div>
      <div className={styles.cardContainer1}>
        {reviews.map((x) => (
          <div key={x.id} className={styles.card}>
            <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
            <div className={styles.personBox}>
              <Person width={50} height={50} className={styles.personImage} />
              <p className={styles.reviewer}>
                {x.reviewer}
                <span className={styles.company}>{x.company}</span>
                <StarCluster />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
