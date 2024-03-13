import React, { useState } from "react";

function OnBoardingForm({ children, onFinish }) {
  //  For inserting the data that we get from each Step like first Basic Details, Education Details then Terms and conditions agreement
  const [onBoardingData, SetOnBoardingData] = useState({});
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const currentChildDisplayed =
    React.Children.toArray(children)[currentComponentIndex];

  // Function to be executed when previous button is pressed
  const onPreviousStep = () => {
    let prevIndex = currentComponentIndex - 1;
    if (prevIndex < 0) {
      alert("This is Step 1,\n Press Next to move forward");
      return;
    }
    setCurrentComponentIndex(prevIndex);
    console.log("data till yet", onBoardingData);
  };

  // Function to be executed when next button is pressed
  const onNextStep = (CurrentStepData) => {
    let nextIndex = currentComponentIndex + 1;

    // Basically  we are adding the next data which we get from current Step in our existing data
    const updatedData = { ...onBoardingData, ...CurrentStepData };

    console.log(updatedData);

    //  Checking the boundary whether the next step is there or not
    if (nextIndex < children.length) {
      setCurrentComponentIndex(nextIndex);
    } else {
      alert("This is Last Step ,\n Press Previous to go to Back");

      onFinish(updatedData);
    }

    // Updating our the old stored data into new onBoarding Data which includes current step data too : )
    SetOnBoardingData(updatedData);
  };

  // Clone banaya or props usko pass kar diya
  if (React.isValidElement(currentChildDisplayed)) {
    return React.cloneElement(currentChildDisplayed, {
      onNextStep,
      onPreviousStep,
    });
  }

  // return kara denge
  return currentChildDisplayed;
}

export default OnBoardingForm;
