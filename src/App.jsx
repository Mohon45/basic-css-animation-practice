import "./App.css";
import CircleIcon from "./components/CircleIcon";
import Curve from "./components/Curve";
import RotateContent from "./components/RotateContent";
import "./rotate.css";

function App() {
  return (
    <div>
      <h1 className="title">Basic Animation Practice</h1>
      <br />
      <br />
      <div className="box-1">
        <button className="btn">Hover me</button>
      </div>
      <br /> <br />
      <div className="rotate-container">
        <img
          className="rotating-image"
          src="https://web.programming-hero.com/static/media/tailwind.01c486e6.svg"
          alt=""
        />
      </div>
      <br /> <br />
      <RotateContent />
      <br /> <br /> <br />
      <CircleIcon />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Curve />
    </div>
  );
}

export default App;
