import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Router from "./Router/Router";
import ScrollToTop from "./utils/scrollToTop";
import Notify from "./utils/Notify";

const App = () => {
  return (
    <div className="bg-box">
      <Layout>
        <Router />
      </Layout>

      <ScrollToTop />
      <Notify />
    </div>
  );
};

export default App;
