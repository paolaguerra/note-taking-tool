import React, { useState } from "react";
import { LeftColumn } from "./LeftColumn";
import { RightColumn } from "./RightColumn";

let lastId = 0;

export const Contenedor = (props) => {
  const [myNotes, setMyNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSave = (myText, myTitle) => {
    lastId = lastId + 1;

    const newItem = { titulo: myTitle, parrafo: myText, id: lastId };
    const newArray = [...myNotes, newItem];
    setMyNotes(newArray);

    console.log(newArray);
  };

  const handleSelectNote = (id) => {
    const noteFound = myNotes.find((note) => {
      if (note.id === id) {
        return true;
      }
      return false;
    });

    if (Boolean(noteFound)) {
      setSelectedNote(noteFound);
    }
  };

  console.log(selectedNote);

  return (
    <div className="mainCont">
      <LeftColumn myNotes={myNotes} onSelectNote={handleSelectNote} />
      <RightColumn onSave={handleSave} selectedNota={selectedNote}></RightColumn>
    </div>
  );
};
