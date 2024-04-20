import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Details from "../pages/Details";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default Router;
