import React, { createContext } from "react";
import ChildA from "../ChildA/ChildA";

export const FirstName = createContext();
function Parent() {
  return (
    <>
      <FirstName.Provider value={"Jatin"}>
        <ChildA />
      </FirstName.Provider>
    </>
  );
}

export default Parent;
