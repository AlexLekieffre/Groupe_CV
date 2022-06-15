import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Experience from "../components/molecules/experience";
import Navbar from "../components/molecules/navbar";
import PrivatRoute from "../components/molecules/privateroute";
import NotLogged from "../components/molecules/privateroute";
import Skills from "../components/molecules/skills";

const logg = false;

const CV = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route index element={"ok"} />
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="" element={<PrivatRoute />}>
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CV;
