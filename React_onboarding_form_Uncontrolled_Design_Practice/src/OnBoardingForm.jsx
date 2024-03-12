import React, { useState } from "react";

function OnBoardingForm({ children, onFinish }) {
  const [onBoardingComponent, SetOnBoardingComponentComponent] = useState({});
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const currentComponentDisplayed = React.Children.toArray(children);
  return currentComponentDisplayed[currentComponentIndex];
}

export default OnBoardingForm;
