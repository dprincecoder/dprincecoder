import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./footer.css";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#!" className="footer__logo">
        dprincecoder
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer__socials" rel="noreferrer" target="_blank">
        <a href="https://web.facebok.com/prince.azubuike.5621">
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/prince-azubuike-9067a719a"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.twitter.com/dprincecoder"
          rel="noreferrer"
          target="_blank"
        >
          <IoLogoTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
