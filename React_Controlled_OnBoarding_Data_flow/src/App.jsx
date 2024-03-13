import React, { useState } from "react";
import OnBoardingForm from "./OnBoardingForm.jsx";

const Step1 = ({ onPreviousStep, onNextStep }) => {
  return (
    <div>
      <h1>Step 1</h1>
      <br />
      <button
        onClick={() => {
          onNextStep({ name: "JAtin Sharma" });
        }}
      >
        Next
      </button>
    </div>
  );
};

const Step2 = ({ onPreviousStep, onNextStep }) => {
  return (
    <div>
      <h1>Step 2</h1>
      <br />
      <button
        onClick={() => {
          onNextStep({ age: 248 });
        }}
      >
        Next
      </button>
    </div>
  );
};

const Step3 = ({ onPreviousStep, onNextStep }) => {
  return (
    <div>
      <h1>Step 3</h1>
      <br />
      <button
        onClick={() => {
          onNextStep({});
        }}
      >
        Next
      </button>
      <h6>You are qualified for senior citezen</h6>
    </div>
  );
};

const Step4 = ({ onPreviousStep, onNextStep }) => {
  return (
    <div>
      <h1>Step 4</h1>
      <br />
      <button
        onClick={() => {
          onNextStep({ role: "Superman" });
        }}
      >
        Next
      </button>
    </div>
  );
};
function App() {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(onBoardingData, "Data Till Yet ✔");

  //  Adding current State data in the onBoarding Data and changing the current index
  function onNext(stepData) {
    const updateData = { ...onBoardingData, ...stepData };
    setCurrentIndex(currentIndex + 1);
    setOnBoardingData(updateData);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello, Controlled Data flow Form!!</h1>
      <OnBoardingForm
        // Pass a Current Index data
        currentIndex={currentIndex}
        // Pass the current data
        onNext={onNext}
      >
        <Step1 />
        <Step2 />
        {onBoardingData.age > 50 && <Step3 />}
        <Step4 />
      </OnBoardingForm>
    </div>
  );
}

export default App;
