import React from "react";
import ScreenSplitComponent from "./ScreenSplitComponent";

const leftComponent = ({ name }) => {
  return <h1>Hello {name}!!</h1>;
};

const rightComponent = ({ message }) => {
  return <p>Your Messgae: {message}!!</p>;
};

function App() {
  return (
    <>
      <ScreenSplitComponent
        Left={leftComponent}
        Right={rightComponent}
        LeftWidthSize={"20vw"}
        RightWidthSize={"50vw"}
        LeftColor={"blue"}
        RightColor={"orange"}
      />
    </>
  );
}

export default App;
