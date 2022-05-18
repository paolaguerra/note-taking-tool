import React, { useState } from "react";
import "./index.css";
import lupa from "./img/lupa.png";
import addnote from "./img/add-note.png";
import { ContNotes } from "./ContNotes";
import PropTypes from "prop-types";

export const LeftColumn = (props) => {
  const [selectedOption, setSelectedOption] = useState("Add"); // add new note, note

  const showNoteSelected = () => {
    setSelectedOption("Notes");
  };

  let filterClick;

  if (selectedOption === "Notes") {
    filterClick = [props.myNotes];
  }     

  if (selectedOption === "Add") {
    filterClick = [props.myNotes];
  }

  console.log(filterClick);

  return (
    <div className="cont-left-column">
      <div className="search-section">
        <img className="lupa-img" alt="lupa" src={lupa}></img>
        <div className="cont-input">
          <input
            className="input-search"
            placeholder="Search"
            type="text"
          ></input>
        </div>
        <img className="add-img" alt="add-note" src={addnote}></img>
      </div>
      {props.myNotes.map((note) => {
        return (
          <ContNotes
            title={note.titulo}
            parrafo={note.parrafo}
            key={note.titulo}
            onNotes={showNoteSelected}
          />
        );
      })}
    </div>
  );
};

LeftColumn.propTypes = {
  myNotes: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      parrafo: PropTypes.string.isRequired,
    })
  ),
};
