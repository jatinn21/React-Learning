import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  let [num, setNum] = useState(0);
  let [num2, setNum2] = useState(0);

  // function addFunc() {
  //   setNum((prevNum) => ++prevNum);
  // }

  // function bringAlert() {
  //   alert("Hello Sir, You are doing great");
  // }
  useEffect(() => {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    alert("Hello Bhai, Sab Sahi hai abh");
  }, [num2]);
  return (
    <>
      <h1>useEffect Hook</h1>
      <button
        onClick={() => {
          alert("Hello Sir, You are doing great");
        }}
      >
        Bring an Alert
      </button>
      <br />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increase Number : {num}
      </button>
      <br />

      <button
        //  either you can incremenet the number or you can show the alert but you can't do both the things in one go : (
        onClick={
          (() => {
            console.log("Number1");
            console.log("Number2");
            console.log("Number3");
            setNum(num + 1);
          },
          () => {
            alert(
              "EH, Without using useEffect mai Ek he kaam karne dunga, ya toh alert ya fir number incremenet : ) "
            );
          })
        }
      >
        Bring an Alert & Increase Number: {num}
      </button>
      <br />
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        Increase the Number, Bring the Alert and change the BG, Using
        useEffect() {num2}
      </button>
    </>
  );
}

export default App;
