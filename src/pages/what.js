import React, { useEffect } from "react";
import { Link, navigate } from "gatsby";
import MainHeading from "../components/heading.js";
import Layout from "../components/layout.js";
import "../styles/global.css";

// markup
const WhatPage = () => {
  useEffect(() => {});
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
