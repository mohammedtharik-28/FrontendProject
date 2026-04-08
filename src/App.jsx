import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home";
import Contact from "./ContactComponents/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;