import styles from "./PreNav.module.css";

const currentDate = new Date();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentMonth = monthNames[currentDate.getMonth()];

const message = `Now accepting new clients for the month of ${currentMonth}!`;

const PreNav = () => {
  return (
    <div className={styles.preNav}>
      {message}
    </div>
  );
};
export default PreNav;
