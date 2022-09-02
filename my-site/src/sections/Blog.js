import "./blog.css";
import Card from "../components/Card";
import CardBig from "../components/CardBig";
import blog2 from "../assets/blog02.png";
import blog3 from "../assets/blog03.png";
import blog4 from "../assets/blog04.png";
import blog5 from "../assets/blog05.png";

const Blog = () => {
  return (
    <section className="section-blog section-margin" id="library">
      <div className="cardBig-container">
        <CardBig />
      </div>
      <div className="cards-container">
        <div className="card2 card2-top">
          <Card imgUrl={blog2} />
          <Card imgUrl={blog3} />
        </div>
        <div className="card2">
          <Card imgUrl={blog4} />
          <Card imgUrl={blog5} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
