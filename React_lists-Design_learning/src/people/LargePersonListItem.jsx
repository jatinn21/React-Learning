import React from "react";

const LargePersonListItem = ({ person }) => {
  //   console.log("hii from large");
  //   return person ? <h1>Hello</h1> : <h1>Bye</h1>;
  return (
    <div
      style={{
        textAlign: "center",
        margin: "2rem",
        padding: "2rem 1rem",
        border: "1px solid black",
      }}
    >
      <h1> Hello {person.name}</h1>
      <h2>Age : {person.age}</h2>
      <h2>Hair Color : {person.hairColor}</h2>
      <h2>Hobbies : </h2>
      <ul
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        <p>
          {person.hobbies.map((hobby, i) => (
            <li key={`${hobby + " " + i}`}>{hobby}</li>
          ))}
        </p>
      </ul>
    </div>
  );
};

export default LargePersonListItem;
