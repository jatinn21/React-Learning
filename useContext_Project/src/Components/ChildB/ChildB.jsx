import React, { useContext } from "react";
import { FirstName } from "../Parent/Parent";
import { OrganizationName } from "../Parent/Parent";
import { arr } from "../Parent/Parent";

function ChildB() {
  const xyz = useContext(OrganizationName);
  const obj = useContext(arr);
  console.log(obj, "From Child B");
  return (
    <FirstName.Consumer>
      {(data) => (
        <div>
          ChildB Component : {data} <br /> <span>Hello {xyz}</span>
          <br />
          <h1>My Role : {obj.name}</h1>
          <h1>My age : {obj.age}</h1>
          <h1>My location: {obj.location}</h1>
        </div>
      )}
    </FirstName.Consumer>
  );
}

export default ChildB;
