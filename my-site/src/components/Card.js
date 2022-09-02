import "./card.css";

const Card = ({ imgUrl }) => {
  return (
    <div className="card">
      <div className="card-img-div">
        <img src={imgUrl} alt="thing" />
      </div>
      <div className="card-text-div">
        <span>Aug 30, 2022</span>
        <h4>GPT-3 and Open AI is the future. Let us exlore how it is?</h4>
      </div>
      <span className="span-article">Read Full Article</span>
    </div>
  );
};

export default Card;
