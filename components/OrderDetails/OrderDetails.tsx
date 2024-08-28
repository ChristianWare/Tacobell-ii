"use client";

import toast from "react-hot-toast";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./OrderDetails.module.css";
import HowItWorks from "../HowItWorks/HowItWorks";
import FalseButton from "../FalseButton/FalseButton";
import Image from "next/image";
import Img1 from "../../public/images/form.jpg";
import Img2 from "../../public/images/form2.jpg";
import Img3 from "../../public/images/form3.jpg";

type Inputs = {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  postalCode: string;
  eventDate: Date;
  estimatedGuests: number;
  venue: string;
  additionalInfo: string;
  serviceType: string;
};

const OrderDetails = () => {
  const [loading, setLoading] = useState(false);
  const [eventDate, setEventDate] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ ...data, eventDate }),
    }).then((res) => res.json());

    if (response.messageId) {
      toast.success("Thanks! We will be in touch soon 😀");
    } else {
      toast.error("Please try again sometime");
    }

    reset();
    setLoading(false);
  };

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer}>
              <Image src={Img2} alt='' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer}>
              <Image src={Img3} alt='' fill className={styles.img} />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.namesContainer}>
              <div className={styles.labelInputBox}>
                <label htmlFor='firstName'>First Name</label>
                <input
                  id='firstName'
                  type='text'
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className={styles.error}>
                    *** First Name is required
                  </span>
                )}
              </div>
              <div className={styles.labelInputBox}>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  id='lastName'
                  type='text'
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className={styles.error}>
                    *** Last Name is required
                  </span>
                )}
              </div>
            </div>
            <div className={styles.everythingElse}>
              {/* <div className={styles.labelInputBox}>
                <label htmlFor='businessName'>Business Name</label>
                <input
                  id='businessName'
                  type='text'
                  {...register("businessName")}
                />
              </div> */}
              <div className={styles.labelInputBox}>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  type='email'
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  placeholder="So we can respond. We won't send you spam."
                  maxLength={500}
                />
                {errors.email && (
                  <span className={styles.error}>*** Email is required</span>
                )}
              </div>
              {/* <div className={styles.labelInputBox}>
                <label htmlFor='postalCode'>Postal Code</label>
                <input
                  id='postalCode'
                  type='text'
                  {...register("postalCode")}
                />
              </div> */}
              <div className={styles.labelInputBox}>
                <label htmlFor='eventDate'>Event Date</label>
                <DatePicker
                  selected={eventDate}
                  onChange={(date: Date | null) => setEventDate(date)}
                  dateFormat='MM/dd/yyyy'
                  className={styles.datePicker}
                />
              </div>
              <div className={styles.labelInputBox}>
                <label htmlFor='estimatedGuests'>
                  Estimated Number of Guests
                </label>
                <input
                  id='estimatedGuests'
                  type='number'
                  {...register("estimatedGuests", { required: true })}
                />
                {errors.estimatedGuests && (
                  <span className={styles.error}>
                    *** Estimated number of guests is required
                  </span>
                )}
              </div>
              <div className={styles.labelInputBox}>
                <label htmlFor='venue'>Venue(s)</label>
                <input id='venue' type='text' {...register("venue")} />
              </div>
              <div className={styles.labelInputBox}>
                <label htmlFor='serviceType'>Service Type</label>
                <select
                  id='serviceType'
                  {...register("serviceType", { required: true })}
                >
                  <option value=''>Choose an option</option>
                  <option value='Special Event Catering'>
                    Special Event Catering
                  </option>
                  <option value='Staffing'>Staffing</option>
                  <option value='Workplace Dining'>Workplace Dining</option>
                  <option value='Hospitality Consulting'>
                    Hospitality Consulting
                  </option>
                  <option value='Live Events'>Live Events</option>
                  <option value='Emergency Response Catering'>
                    Emergency Response Catering
                  </option>
                  <option value='Other'>Other</option>
                </select>
                {errors.serviceType && (
                  <span className={styles.error}>
                    *** Service type is required
                  </span>
                )}
              </div>
              <div className={styles.labelInputBox}>
                <label htmlFor='additionalInfo'>Additional Info</label>
                <textarea
                  id='additionalInfo'
                  maxLength={5000}
                  {...register("additionalInfo")}
                  placeholder='Provide any additional details here.'
                />
              </div>

              <div className={styles.btnContainer}>
                <FalseButton
                  text={loading ? "Sending..." : "Submit"}
                  btnType='primary'
                />
              </div>
            </div>
          </form>
        </div>
        {/* <HowItWorks /> */}
      </LayoutWrapper>
    </section>
  );
};

export default OrderDetails;
