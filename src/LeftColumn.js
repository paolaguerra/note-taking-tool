import React, { useState } from "react";
import "./index.css";
import lupa from "./img/lupa.png";
import addnote from "./img/add-note.png";
import { ContNotes } from "./ContNotes";
import PropTypes from "prop-types";

export const LeftColumn = (props) => {
  const [filter, setFilter] = useState();

  const abrirInput = (event) => {
    props.onOpen(event);
  };

  const onFilterText = () => {
    setFilter();
  };

  const text = () => {
    filter = props.myNotes.filter((note) => {
      if (props.title.includes(text)) {
        return true;
      }
  
      return false;
    });
  }

  return (
    <div className="cont-left-column">
      <div className="search-section">
        <img className="lupa-img" alt="lupa" src={lupa}></img>
        <div className="cont-input">
          <input
            value={text}
            onChange={onFilterText}
            className="input-search"
            placeholder="All Notes"
            type="text"
          ></input>
        </div>
        <img
          className="add-img"
          alt="add-note"
          src={addnote}
          onClick={abrirInput}
        ></img>
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
  onOpen: PropTypes.func,
};
