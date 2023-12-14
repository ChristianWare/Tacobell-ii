"use client";

import styles from "./ContactForm.module.css";
import { useState } from "react";
import toast from "react-hot-toast";
import SubmitButton from "../SubmitButton/SubmitButton";
import { sendEmail } from "@/actions/sendEmail";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    senderEmail: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev: any) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <div className={styles.content}>
      <div className={styles.bottom}>
        {/* <div className={styles.left}></div> */}
        <div className={styles.right}>
          <form
            className={styles.form}
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Email sent successfully!");
              setInputs({
                firstName: "",
                lastName: "",
                senderEmail: "",
                message: "",
              });
            }}
          >
            <div className={styles.namesContainer}>
              <div className={styles.labelInputBox}>
                <label htmlFor='firstName'>
                  First Name <span className={styles.required}>*</span>
                </label>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  value={inputs.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.labelInputBox}>
                <label htmlFor='lastName'>
                  Last Name <span className={styles.required}>*</span>
                </label>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  value={inputs.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.everythingElse}>
              <div className={styles.labelInputBox}>
                <label htmlFor='email'>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  id='senderEmail'
                  type='email'
                  name='senderEmail'
                  value={inputs.senderEmail}
                  onChange={handleChange}
                  required
                  maxLength={500}
                />
              </div>

              <div className={styles.labelInputBox}>
                <label htmlFor='message'>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  maxLength={5000}
                  value={inputs.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.btnBtnContainer}>
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
