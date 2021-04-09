import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header.js";
import Footer from "./footer.js";
import * as style from "../components/layout.module.scss";

const Layout = ({ children }) => {
  return (
    //className={style.global_wrapper} (div below)
    <div>
      <Helmet></Helmet>
      <Header />
      <main className={style.main_wrapper}>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
