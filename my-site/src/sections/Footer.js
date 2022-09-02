import "./footer.css";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="footer-div1">
        <img src={logo} alt="logo" />
        <span>
          Crechterwoord K12 182 DK Alknjkcb,
          <br /> All Rights Reserved
        </span>
      </div>

      <div className="footer-div2">
        <h6>Link</h6>
        <p>Overons </p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>

      <div className="footer-div3">
        <h6>Company</h6>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>

      <div className="footer-div4">
        <h6>Get In touch</h6>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>306-17-50</p>
        <p>lorem@hotmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
