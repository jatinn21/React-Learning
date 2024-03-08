import React, { useContext } from "react";
import ChildB from "../ChildB/ChildB";
import { OrganizationName } from "../Parent/Parent";

function ChildA() {
  const orgName = useContext(OrganizationName);
  return (
    <>
      <div>ChildA Component : {orgName}</div>
      <br />
      <ChildB />
    </>
  );
}

export default ChildA;
