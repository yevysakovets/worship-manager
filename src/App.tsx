import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./components/Library";
import Schedule from "./components/Schedule";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
