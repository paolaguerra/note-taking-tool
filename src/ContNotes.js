import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export const ContNotes = (props) => {

  const limitarTexto = (texto) => {
    if (texto.length <= 200) {
      return texto;
    } else {
      return texto.substring(0, 200) ;
    }
  };

  const showTaskSelected = (event) => {
    props.onSelectNote(props.id);
  };

  return (
    <div className="cont-notes" onClick={showTaskSelected}>
      <div className="note-box">
        <h1 className="title-note">{props.title}</h1>
        <p className="text-note">{limitarTexto(props.parrafo)}</p>
      </div>
    </div>
  );
};

ContNotes.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  parrafo: PropTypes.string,
  onSelectNote: PropTypes.func,
};