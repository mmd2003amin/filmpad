import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Details from "../pages/Details";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Router;
