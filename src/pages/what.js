import React, { useEffect } from "react";
import { Link, navigate } from "gatsby";
import MainHeading from "../components/heading.js";
import Layout from "../components/layout.js";
import SubHeading from "../components/sub_heading.js";
import "../styles/global.css";
import gsap from "gsap";

// markup
const WhatPage = () => {
  useEffect(() => {
    gsap.to("#sub", { x: 100, duration: 5 });
  });
  return (
    <div>
      <Layout>
        <MainHeading
          text="What we do"
          subtext="Learn more about things that we can create for you"
        />
        <SubHeading id="sub" />
        <Link to="/">go back!</Link>
      </Layout>
    </div>
  );
};

export default WhatPage;
