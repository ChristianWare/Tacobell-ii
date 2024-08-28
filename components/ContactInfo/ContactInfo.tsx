import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.248717288147!2d-111.86333289999999!3d33.572891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7553fa7aaaab%3A0x55c463417f2cb0a2!2s10105%20E%20V%C3%ADa%20Linda%20Suite%20A-%20105%2C%20Scottsdale%2C%20AZ%2085258!5e0!3m2!1sen!2sus!4v1694633298828!5m2!1sen!2sus'
              width='100%'
              height='450'
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className={styles.map}
            ></iframe>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Interested in a visit to our showroom?
            </h2>
            <div className={styles.btnContainer}>
              <Button
                href='/'
                text='Arrange Consultation'
                btnType='primaryiii'
              />
            </div>
            <div className={styles.bottomInfo}>
              <div className={styles.address}>
                <b>Tribe Technologies Inc.</b>
                <p>
                  324 Hoffman Ave <br /> Alvarado, San Francisco <br /> 90416
                </p>
              </div>
              <div className={styles.contact}>
                <b>Contact</b>
                <p>
                  hello@gmail.com <br /> 555-555-5555
                </p>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactInfo;
