import { useState } from "react";
import "./app.css";

function App() {
  let [counter, setCounter] = useState(0);

  function incrementCounter() {
    if (counter >= 20) return;
    ++counter;
    console.log(counter); // no effect on UI
    setCounter(counter); // will effect the UI
  }

  function decrementCounter() {
    if (counter <= 0) return;
    --counter;
    console.log(counter); // no effect on UI
    setCounter(counter); // will effect the UI
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Count : {counter}</h2>
      <br />
      <button onClick={incrementCounter}>Increment button</button>&nbsp;
      <button onClick={decrementCounter}>Decrement button</button>
    </>
  );
}

export default App;
