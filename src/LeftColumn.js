import React from "react";
import "./index.css";
import lupa from "./img/lupa.png";
import addnote from "./img/add-note.png";
import { ContNotes } from "./ContNotes";
import PropTypes from "prop-types";

export const LeftColumn = (props) => {

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
            key={note.titulo}
            id={note.id}
            title={note.titulo}
            parrafo={note.parrafo}
            onSelectNote={props.onSelectNote}
          />
        );
      })}
    </div>
  );
};

LeftColumn.propTypes = {
  myNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      parrafo: PropTypes.string.isRequired,
    })
  ),
  onSelectNote: PropTypes.func,
};
