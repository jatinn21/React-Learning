import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  let a = useRef(0);
  const [count, setCount] = useState(0);

  function clickedFun() {
    // setCount(count + 1);  // uncommit this line to make the rerendered after every click
    console.log("rerendered, Value Fetched : " + a.current++);
  }

  useEffect(() => {
    console.log(`rerendering happened....`);
    //  change in useRef value will never make rerendering
  });
  //  Every time it will return 0 only because every time state changes it will make rerender

  return (
    <>
      <button onClick={clickedFun}>Click me</button>

      <br />
      <br />

      <h1>value : {count} </h1>
    </>
  );
}

export default App;
