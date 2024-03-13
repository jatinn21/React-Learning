import React, { useState } from "react";
import OnBoardingForm from "./OnBoardingForm";

const Step1 = ({ onNextStep, onPreviousStep }) => {
  return (
    <div>
      <h1>Step 1</h1>
      <br />
      <button onClick={onPreviousStep}>Previous</button>
      <br />
      <br />

      <button
        onClick={() => {
          onNextStep({ name: "Jatin Sharma" });
        }}
      >
        Next
      </button>
    </div>
  );
};
const Step2 = ({ onNextStep, onPreviousStep }) => {
  return (
    <div>
      <h1>Step 2</h1>
      <br />
      <button onClick={onPreviousStep}>Previous</button>
      <br />
      <br />
      <button
        onClick={() => {
          onNextStep({ age: 22 });
        }}
      >
        Next
      </button>
    </div>
  );
};
const Step3 = ({ onNextStep, onPreviousStep }) => {
  return (
    <div>
      <h1>Step 3</h1>
      <br />
      <button onClick={onPreviousStep}>Previous</button>
      <br />
      <button
        onClick={() => {
          onNextStep({ role: "React developer" });
        }}
      >
        Next
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Hello</h1>
      <OnBoardingForm
        onFinish={(data) => console.log("hi from onFinish from App : ", data)}
      >
        <Step1 />
        <Step2 />
        <Step3 />
      </OnBoardingForm>
    </>
  );
}

export default App;
