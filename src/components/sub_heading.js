import React, { useEffect, useRef } from "react";
import * as style from "../components/sub_heading.module.scss";
import { gsap } from "gsap";

const SubHeading = (props) => {
  const skewRef = useRef(null);
  gsap.to(skewRef.current, { x: 100, duration: 5 });
  return (
    <div className={style.rectangle_container}>
      <div ref={skewRef} className={style.skew_container}>
        <h2 className={style.sub_heading}>Test Text for sub heading</h2>
      </div>
    </div>
  );
};

export default SubHeading;
