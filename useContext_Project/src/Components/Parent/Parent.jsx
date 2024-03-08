import React, { createContext, useContext } from "react";
import ChildA from "../ChildA/ChildA";

export const FirstName = createContext();

export const OrganizationName = createContext("Ajmera Infotexh");

export const arr = createContext({
  name: "Front-end Developer",
  age: 22,
  location: "Pune",
});

function Parent() {
  return (
    <FirstName.Provider value={"HeroHeralal"}>
      <div>Parent Component : Parent hu</div>
      <br />
      <ChildA />
    </FirstName.Provider>
  );
}

export default Parent;
