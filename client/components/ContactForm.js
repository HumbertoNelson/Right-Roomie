import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gte6in3",
        "template_pmti76f",
        form.current,
        "ZvBmo7GhkOiCXvhGA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactDiv">
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <div>
          <label>Your Name</label>
          <input type="text" name="from_name" />
        </div>
        <div>
          <label>Your Email</label>
          <input type="email" name="user_email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
