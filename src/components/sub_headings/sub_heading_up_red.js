import React, { useEffect, useRef } from "react";
import * as style from "./sub_heading_up_red.module.scss";
import { gsap } from "gsap";

const SubHeadingUp = (props) => {
  const skewstyle = "red";
  console.log(skewstyle);

  return (
    <div className={style.rectangle_container}>
      <div className={style.skew_container}>
        <h2 className={style.sub_heading}>{props.text}</h2>
      </div>
    </div>
  );
};

export default SubHeadingUp;
