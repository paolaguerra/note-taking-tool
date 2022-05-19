import React from "react";
import "./index.css";
import heart from "./img/heart.png";
import trash from "./img/trash.png";
import info from "./img/info.png";
import { InputBox } from "./InputBox";
import { ShowCompleteNote } from "./ShowCompleteNote";
import PropTypes from "prop-types";

export const RightColumn = (props) => {
  console.log(props);

  return (
    <div className="cont-right-column">
      <div className="cont-top-right-column">
        <div className="options-bar">
          <div className="img-cont">
            <img className="heart-img" alt="heart" src={heart}></img>
            <img className="trash-img" alt="trash" src={trash}></img>
            <img className="info-img" alt="info" src={info}></img>
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
  onOpen: PropTypes.func,
  selectedNota: PropTypes.shape({
    titulo: PropTypes.string,
    parrafo: PropTypes.string,
    id: PropTypes.number,
  }),
};
