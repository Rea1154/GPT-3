import "./header.css";
import people from "../assets/people.png";
import ai from "../assets/ai.png";

const Header = () => {
  return (
    <section className="section-header section-padding" id="home">
      <div className="header-left">
        <h1 className="header-h1 gradient-text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="header-p">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-input-div">
          <input
            type="text"
            className="header-input"
            placeholder="Your Email Address"
          />
          <button className="header-btn">Get Started</button>
        </div>
        <div className="header-people">
          <img src={people} alt="people" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <div className="header-right">
        <img className="header-img" src={ai} alt="head" />
      </div>
    </section>
  );
};

export default Header;
