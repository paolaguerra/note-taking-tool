import "./index.css";
import heart from "./img/heart.png";
import trash from "./img/trash.png";
import info from "./img/info.png";
import { InputBox } from "./InputBox";
import { ShowCompleteNote } from "./ShowCompleteNote";

export const RightColumn = (props) => {

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
      <InputBox onSave={props.onSave}></InputBox>
      <ShowCompleteNote></ShowCompleteNote>
    </div>
  );
};
