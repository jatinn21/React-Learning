import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const countRef = useRef(0);
  console.log(countRef);

  function ShowIncrementFunc() {
    countRef.current.value < 10 ? ++countRef.current.value : _;
  }

  function ShowDecrementFunc() {
    countRef.current.value > 0 ? --countRef.current.value : _;
  }

  return (
    <div className="App">
      <h1>Use Ref Hook</h1>
      <input type="text" ref={countRef} value={countRef.current} />
      <button onClick={ShowIncrementFunc}> Increment the Value</button>
      <button onClick={ShowDecrementFunc}> Decrement the Value</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
