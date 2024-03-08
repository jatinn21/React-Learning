import React from "react";
import ChildC from "../ChildC/ChildC";
import { FirstName } from "../Parent/Parent";
function ChildB() {
  return (
    <FirstName.Consumer>
      {(xyz) => {
        return (
          <>
            <br />
            {xyz} from ChildB
            <ChildC />
            <br />
          </>
        );
      }}
    </FirstName.Consumer>
  );
}

export default ChildB;
