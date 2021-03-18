import React from "react";
import * as style from "./heading.module.scss";

const MainHeading = (props) => {
  return (
    <div className={style.main_heading}>
      <h1 className={style.main_heading__text}>{props.text}</h1>
      <p className={style.main_heading__subtext}>{props.subtext}</p>
    </div>
  );
};

export default MainHeading;
