import React from "react";

const RegularList = ({ items, ComponentName }) => {
  return items.map((person, index) => {
    return <ComponentName key={index} person={person} />;
  });
};

export default RegularList;
