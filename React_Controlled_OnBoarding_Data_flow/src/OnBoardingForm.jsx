import React, { useState } from "react";

function OnBoardingForm({ children, currentIndex, onNext }) {
  const currentChild = React.Children.toArray(children)[currentIndex];

  // Just to check whether we have to add the data or not
  const onNextStep = (data) => {
    currentIndex = currentIndex + 1;
    if (currentIndex < children.length) {
      console.log(currentIndex, "cureent Index");
      onNext(data);
    } else {
      alert("You are on the Last Step");
    }
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { onNextStep });
  }
  return currentChild;
}

export default OnBoardingForm;
