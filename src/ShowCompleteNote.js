import React from "react";
import PropTypes from "prop-types";

export const ShowCompleteNote = (props) => {
  return (
    <div className="ShowCompleteNote">
      <h1 className="title">{props.titulo}</h1>
      <p className="text">{props.parrafo}</p>
    </div>
  );
};

ShowCompleteNote.propTypes = {
  note: PropTypes.shape({
    titulo: PropTypes.string,
    parrafo: PropTypes.string,
  }),
};
