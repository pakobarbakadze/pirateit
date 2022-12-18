import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/NavBar/Nav";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
};

export default App;
