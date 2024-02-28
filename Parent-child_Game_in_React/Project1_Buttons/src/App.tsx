import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}></Alert>
      )}
      <Buttons
        // color="react"

        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Shyam
      </Buttons>
    </>
  );
}

export default App;
