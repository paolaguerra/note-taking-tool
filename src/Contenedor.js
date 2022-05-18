import React, { useState } from "react";
import { LeftColumn } from "./LeftColumn";
import { RightColumn } from "./RightColumn";

export const Contenedor = (props) => {
  const [myNotes, setMyNotes] = useState([]);

  const handleSave = (myText, myTitle) => {
    const newItem = { titulo: myTitle, parrafo: myText };
    const newArray = [...myNotes, newItem];
    setMyNotes(newArray);

    console.log(newArray);
  };

  return (
    <div className="mainCont">
      <LeftColumn myNotes={myNotes}></LeftColumn>
      <RightColumn onSave={handleSave}></RightColumn>
    </div>
  );
};
