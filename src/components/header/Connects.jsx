import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const Connects = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/prince-azubuike-9067a719a"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/dprincecoder"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.twitter.com/dprincecoder"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsTwitter />
      </a>
      <a
        href="https://web.facebok.com/prince.azubuike.5621"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default Connects;
