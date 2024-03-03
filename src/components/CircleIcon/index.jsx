import "./index.css";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import js from "../../assets/js.png";
import mongo from "../../assets/mongo.png";
import next from "../../assets/next.png";
import cloud from "../../assets/cloud.png";
import docker from "../../assets/react.png";

const CircleIcon = () => {
  return (
    <div className="container2 " style={{ marginTop: "100px", marginBottom: "100px" }}>
      <div className="centerImage2">
        {/* Placeholder for your central image */}
        <img src="https://web.programming-hero.com/static/media/tailwind.01c486e6.svg" alt="Central Image" />
      </div>
      <div className="iconsContainer2">
        {/* Each icon is a separate element */}
        <div className="icon2">
          <img src={react} alt="react" style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="icon2">
          <img src={node} alt="react" style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="icon2">
          <img src={js} alt="react" style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="icon2">
          <img src={mongo} alt="react" style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="icon2">
          <img src={next} alt="react" style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="icon2">
          <img src={cloud} alt="react" style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="icon2">
          <img src={docker} alt="react" style={{ width: "40px", height: "40px" }} />
        </div>
      </div>
    </div>
  );
};

export default CircleIcon;
