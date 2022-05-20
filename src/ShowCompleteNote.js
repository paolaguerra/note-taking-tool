import React from "react";
import PropTypes from "prop-types";

export const ShowCompleteNote = (props) => {
  return (
    <>
      <div className="ShowCompleteNote">
        <h1 className="title">{props.selectedNota.titulo}</h1>
        <p className="text">{props.selectedNota.parrafo}</p>
      </div>
    </>
  );
};

ShowCompleteNote.propTypes = {
  selectedNota: PropTypes.shape({
    titulo: PropTypes.string,
    parrafo: PropTypes.string,
    id: PropTypes.number,
  }),
  onOpen: PropTypes.func,
};
