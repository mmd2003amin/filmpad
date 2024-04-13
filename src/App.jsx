import React from "react";
import Layout from "./layout/Layout";
import Router from "./Router/Router";

const App = () => {
  return (
    <div>
      <Layout>
        <Router />
      </Layout>
    </div>
  );
};

export default App;
