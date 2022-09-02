import "./openAi.css";
import possibility from "../assets/possibility.png";

const OpenAi = () => {
  return (
    <section className="section-openai section-padding" id="open">
      <div className="openai-container1">
        <img src={possibility} alt="female" />
      </div>
      <div className="openai-container2">
        <span>Request Early Access to Get Started</span>
        <h2 className="gradient-text">
          The possibilities are <br /> beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <span className="span2">Request Early Access to Get Started</span>
      </div>
    </section>
  );
};

export default OpenAi;
