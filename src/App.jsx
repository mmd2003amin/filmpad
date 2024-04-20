import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Router from "./Router/Router";
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  return (
    <div className="bg-box">
      <Layout>
        <Router />
      </Layout>

      <ScrollToTop />
    </div>
  );
};

export default App;
