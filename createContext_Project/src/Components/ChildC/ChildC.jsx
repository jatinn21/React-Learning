import React from "react";
import { FirstName } from "../Parent/Parent";
function ChildC() {
  return (
    <FirstName.Consumer>
      {(naam) => {
        return (
          <>
            <br />
            {naam} from ChildC
            <br />
          </>
        );
      }}
    </FirstName.Consumer>
  );
}

export default ChildC;
