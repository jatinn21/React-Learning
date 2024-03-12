import React from "react";

const ScreenSplitComponent = ({
  Left,
  Right,
  LeftWidthSize,
  RightWidthSize,
  LeftColor,
  RightColor,
}) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          // padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: `${LeftWidthSize}`,
          textAlign: "center",
          height: "10vh",
          backgroundColor: `${LeftColor}`,
        }}
      >
        <Left name="Mukesh Ambani" />
      </div>
      <div
        style={{
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: `${RightWidthSize}`,
          textAlign: "center",
          backgroundColor: `${RightColor}`,
        }}
      >
        <Right message="In India, there are more than 30 crore people who are specialized in 4 different programming language " />
      </div>
    </div>
  );
};

export default ScreenSplitComponent;
