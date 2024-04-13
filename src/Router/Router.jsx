import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default Router;
