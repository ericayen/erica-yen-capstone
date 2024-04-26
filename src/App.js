import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
