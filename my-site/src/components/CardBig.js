import "./card.css";
import blog from "../assets/blog01.png";

const CardBig = () => {
  return (
    <div className="cardBig">
      <div className="cardBig-img-div">
        <img src={blog} alt="thing" />
      </div>
      <div className="cardBig-text-div">
        <span>Aug 30, 2022</span>
        <h4>GPT-3 and Open AI is the future. Let us exlore how it is?</h4>
      </div>
      <span className="span-article">Read Full Article</span>
    </div>
  );
};

export default CardBig;
