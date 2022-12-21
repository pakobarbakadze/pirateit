import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import BrowsePage from "./pages/BrowsePage";
import RegistrationPage from "./pages/RegistrationPage";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};

export default App;
