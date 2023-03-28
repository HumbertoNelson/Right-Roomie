import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="contactDiv">
      <form onSubmit={submitHandler} className="contactForm">
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={(e) => setName(e.target.value)} type="text"></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label></label>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
