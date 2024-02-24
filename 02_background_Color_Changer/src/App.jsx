import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  document.querySelector("body").style.backgroundColor = color;

  function randomGenerator() {
    let rgbCode = "";
    for (let i = 1; i <= 3; i++) {
      rgbCode += " " + Math.trunc(Math.random() * 255 + 1);
    }
    rgbCode = `rgb(${rgbCode.split(" ").join(",").replace(",", "")})`;
    setColor(rgbCode);
    console.log(this);
  }

  return (
    <>
      <div className="bgColor" style={{ backgroundColor: color }}>
        <p onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>
          Red
        </p>
        <p
          onClick={() => setColor("orange")}
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </p>
        <p onClick={() => setColor("pink")} style={{ backgroundColor: "pink" }}>
          Pink
        </p>
        <p onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>
          blue
        </p>
        <p
          onClick={() => setColor("brown")}
          style={{ backgroundColor: "brown" }}
        >
          brown
        </p>
      </div>

      <p
        className="randomGenerator"
        onClick={() => {
          randomGenerator();
          randomGenerator.call(document.querySelector(".randomGenerator"));
        }}
      >
        Random
      </p>
    </>
  );
}

export default App;
