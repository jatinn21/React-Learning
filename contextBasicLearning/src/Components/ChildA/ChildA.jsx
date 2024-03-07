import React from "react";
import ChildB from "../ChildB/ChildB";
import { FirstName } from "../Parent/Parent";
function ChildA() {
  return (
    <FirstName.Consumer>
      {(name) => {
        return (
          <>
            <br />
            {name} from ChildA
            <ChildB />
            <br />
          </>
        );
      }}
    </FirstName.Consumer>
  );
}

export default ChildA;
