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

  const openInput = () => {
    setSelectedNote(null);
  };

  const deleteCard = (id) => {
    const newArray = myNotes.filter((note) => {
      return note.id !== id;
    });
    setMyNotes(newArray);
  };

  return (
    <div className="mainCont">
      <LeftColumn
        myNotes={myNotes}
        onSelectNote={handleSelectNote}
        onOpen={openInput}
      />
      <RightColumn
        onSave={handleSave}
        selectedNota={selectedNote}
        onDelete={deleteCard}
      ></RightColumn>
    </div>
  );
};
