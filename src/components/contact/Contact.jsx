import React, { useRef, useState } from "react";
import "./contact.css";
import {  MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const formHandler = useRef();
  const [successMessage, setSuccessMessage] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(`service_id`, `template_id`, formHandler.current, `user_id`)
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dprincecoder@gmail.com</h5>
            <a
              target="_blank"
              className="contact__option"
              rel="noreferrer"
              href="mailto:dprincecoder@gmail.com"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Prince Azubuike</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://m.me/prince.azubuike.5621"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatSapp</h4>
            <h5>+123456789</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=+2347064304592"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={formHandler} onSubmit={sendMail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          {successMessage && (
            <p className="email-sent-animate-in">
              Email Sent <BsPatchCheckFill className="email-sent-icon" />
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
