import React from "react";
import "./index.css";
import trash from "./img/trash.png";
import { InputBox } from "./InputBox";
import { ShowCompleteNote } from "./ShowCompleteNote";
import PropTypes from "prop-types";

export const RightColumn = (props) => {

  const borrar = () => {
    props.onDelete(props.selectedNota.id);
  };

  return (
    <div className="cont-right-column">
      <div className="cont-top-right-column">
        <div className="options-bar">
          <div className="img-cont">
            <img className="trash-img" alt="trash" src={trash} onClick={borrar}></img>
          </div>
        </div>
      </div>

      {Boolean(props.selectedNota) === false && (
        <div>
          <InputBox onSave={props.onSave} />
        </div>
      )}

      {Boolean(props.selectedNota) === true && (
        <div>
          <ShowCompleteNote selectedNota={props.selectedNota} />
        </div>
      )}
    </div>
  );
};

RightColumn.propTypes = {
  onSave: PropTypes.func,
  selectedNota: PropTypes.shape({
    titulo: PropTypes.string,
    parrafo: PropTypes.string,
    id: PropTypes.number,
  }),
  onDelete: PropTypes.func.isRequired,
};
