import React, { useState } from "react";
import PropTypes from "prop-types";

export const InputBox = (props) => {
  const [myTitle, setmyTitle] = useState("");

  const [myText, setmyText] = useState("");

  const cambiosDelTitle = (event) => {
    setmyTitle(event.target.value);
  };

  const cambiosDelInput = (event) => {
    setmyText(event.target.value);
  };

  const guardarInfo = (event) => {
    if (myText.length === 0) {
      return console.error("Escribe una nota");
    } else if (myTitle.length === 0) {
      return console.error("Escribe un titulo");
    } else {
      props.onSave(myText, myTitle);
      setmyText("");
      setmyTitle("");
    }
  };

  const hoy = new Date();

  function formatoFecha(fecha, formato) {}
  formatoFecha(hoy, "dd/mm/yy");

  return (
    <div className="input">
      <h1 className="h1-input">Add New Note</h1>
      <div className="title-input">{hoy.toDateString()}</div>
      <input
        className="input-title"
        type="text"
        value={myTitle}
        onChange={cambiosDelTitle}
        placeholder="Title..."
        maxLength="40"
        required
      ></input>
      <textarea
        className="input-description"
        value={myText}
        onChange={cambiosDelInput}
        placeholder="Type..."
      ></textarea>
      <button onClick={guardarInfo} className="boton-guardar">
        Save
      </button>
    </div>
  );
};

InputBox.propTypes = {
  onSave: PropTypes.func.isRequired,
};
