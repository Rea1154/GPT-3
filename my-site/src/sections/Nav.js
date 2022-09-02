import logo from "../assets/logo.svg";
import "./nav.css";
import { useState } from "react";
import NavLinks from "../components/NavLinks";
const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [fixed, setFixed] = useState(false);

  const ToggleHandler = () => {
    setNavToggle((prevState) => !prevState);
  };

  const fixedNav = () => {
    if (window.scrollY >= 160) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", fixedNav);

  return (
    <>
      <nav className={fixed ? "section-padding nav-fixed" : "section-padding"}>
        <div className="nav-left">
          <img className="logo" alt="logo" src={logo}></img>
          <p>
            <a className="nav-link" href="#home">
              Home
            </a>
          </p>
          <p>
            <a className="nav-link" href="#wig3">
              What is GPT3?
            </a>
          </p>
          <p>
            <a className="nav-link" href="#open">
              Open AI
            </a>
          </p>
          <p>
            <a className="nav-link" href="#case">
              Case Studies
            </a>
          </p>
          <p>
            <a className="nav-link" href="#library">
              Library
            </a>
          </p>
          <i onClick={ToggleHandler} class="fa-solid fa-bars hamburger"></i>
        </div>

        <div className="nav-right">
          <p className="sign-in-p">Sign In</p>
          <button className="sign-up-btn">Sign Up</button>
        </div>
        <NavLinks navToggle={navToggle} />
      </nav>
    </>
  );
};

export default Nav;
