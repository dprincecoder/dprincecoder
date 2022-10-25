/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        className={activeNav === "about" ? "active" : ""}
        onClick={() => setActiveNav("about")}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        className={activeNav === "experience" ? "active" : ""}
        onClick={() => setActiveNav("experience")}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        className={activeNav === "services" ? "active" : ""}
        onClick={() => setActiveNav("services")}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        className={activeNav === "portfolio" ? "active" : ""}
        onClick={() => setActiveNav("portfolio")}
        href="#portfolio"
      >
        <MdWorkOutline />
      </a>
      <a
        className={activeNav === "contact" ? "active" : ""}
        onClick={() => setActiveNav("contact")}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
