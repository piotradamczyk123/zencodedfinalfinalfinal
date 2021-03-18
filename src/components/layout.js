import React from "react";
import Navbar from "../components/navbar";
import * as style from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
