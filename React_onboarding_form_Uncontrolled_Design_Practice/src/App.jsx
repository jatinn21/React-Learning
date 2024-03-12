import React, { useState } from "react";
import OnBoardingForm from "./OnBoardingForm";

const Step1 = (onNextStep) => {
  return (
    <div>
      <h1>Step 1</h1>
      <br />
      <button>Previous</button>
      <br />
      <br />

      <button onClick={onNextStep}>Next</button>
    </div>
  );
};
const Step2 = (onNextStep) => {
  return (
    <div>
      <h1>Step 2</h1>
      <br />
      <button>Previous</button>
      <br />
      <br />
      <button onClick={onNextStep}>Next</button>
    </div>
  );
};
const Step3 = (onNextStep) => {
  return (
    <div>
      <h1>Step 3</h1>
      <br />
      <button>Previous</button>
      <br />
      <button onClick={onNextStep}>Next</button>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Hello</h1>
      <OnBoardingForm>
        <Step1 />
        <Step2 />
        <Step3 />
      </OnBoardingForm>
    </>
  );
}

export default App;
