import mylogo from "../assets/mylogo.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const links = ["About", "Contact", "Work"];
  const socialIcons = [<BsGithub />, <BsLinkedin />, <GrMail />];
  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={`navbar ${navbar ? "navbar-active" : ""}`}>
      <div className="logo">
        <img src={mylogo} />
      </div>
      <div className="links">
        <ul>
          {links.map((link, linkID) => {
            return <li key={linkID}>{link}</li>;
          })}
        </ul>
      </div>
      <div className="social">
        <ul>
          {socialIcons.map((icon, iconID) => {
            return (
              <a key={iconID}>
                {icon}
                {icon}
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
