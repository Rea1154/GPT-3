import "./sponsored.css";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import dropbox from "../assets/dropbox.png";
import google from "../assets/google.png";
import atlassian from "../assets/atlassian.png";

const Sponsored = () => {
  return (
    <section className="section-sponsored section-padding ">
      <img src={google} alt="sponsore" className="sponsored-img" />
      <img src={slack} alt="sponsore" className="sponsored-img" />
      <img src={atlassian} alt="sponsore" className="sponsored-img" />
      <img src={dropbox} alt="sponsore" className="sponsored-img" />
      <img src={shopify} alt="sponsore" className="sponsored-img" />
    </section>
  );
};

export default Sponsored;
