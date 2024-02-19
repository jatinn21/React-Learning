import { useState } from "react";
import "./app.css";

function App() {
  let [counter, setCounter] = useState(0);

  function incrementCounter() {
    if (counter >= 20) return;
    ++counter;
    setCounter(counter);
  }

  function decrementCounter() {
    if (counter <= 0) return;
    --counter;
    setCounter(counter);
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
