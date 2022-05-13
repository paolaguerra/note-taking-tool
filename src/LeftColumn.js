import React from "react";
import "./index.css";
import lupa from "./img/lupa.png";
import addnote from "./img/add-note.png";

export const LeftColumn = () => {
  return (
    <>
      <div className="cont-left-column">
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
      <div className="cont-notes">
        <div className="note-box">
          <h1 className="title-note">Ahsoka Tano</h1>
          <p className="text-note">
            Ahsoka Tano was a Force-sensitive Togruta female former...
          </p>
        </div>
      </div>
    </>
  );
};
