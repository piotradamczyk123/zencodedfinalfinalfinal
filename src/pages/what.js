import React from "react";
import { Link } from "gatsby";
import MainHeading from "../components/heading.js";
import Layout from "../components/layout.js";
import "../styles/global.css";

// markup
const WhatPage = () => {
  return (
    <div>
      <Layout>
        <MainHeading
          text="What we do"
          subtext="Learn more about things that we can create for you"
        />
        <Link to="/">go back!</Link>
      </Layout>
    </div>
  );
};

export default WhatPage;
