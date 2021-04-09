import React from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const HowPage = () => {
  return (
    <div>
      <Layout>
        <p>How?!</p>
        <Link to="/">go back!</Link>
      </Layout>
    </div>
  );
};

export default HowPage;
