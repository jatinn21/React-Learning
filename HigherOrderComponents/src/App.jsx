import { useState } from "react";

function App() {
  return (
    <div>
      <h3>Higher Component- App Component</h3>
      <div className="boxes">
        <Counter CardColor="red" CardTitle="counter" />
        <Counter
          CardColor="orange"
          CardTitle="roles"
          important={{ name: "Vikash", age: 32 }}
        />
        <Counter CardColor="green" CardTitle="orders" />
        <Counter CardColor="pink" CardTitle="guests" />
        <Counter
          CardColor="purple"
          CardTitle="employees"
          important={{ name: "Jatin", age: 25 }}
        />
      </div>
    </div>
  );
}

function Counter({ CardColor, CardTitle, important }) {
  const [count, setCount] = useState(0);

  if (important) {
    let { name, age } = important;
  }

  const updateCounter = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: `${CardColor}`,
        padding: "2rem",

        width: "max-content",
        border: ".5rem solid white",
        borderRadius: "2rem",
      }}
    >
      <p>
        <h2>{CardTitle}</h2>
        <h1>{count}</h1>
      </p>
      <button onClick={updateCounter}>Increae Count</button>
      <p>{important && name}</p>
      <p>{important && age}</p>
    </div>
  );
}

export default App;
