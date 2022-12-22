import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import BrowsePage from "./pages/BrowsePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import RegistrationPage from "./pages/RegistrationPage";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/details/:game_name" element={<GameDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
