import React from 'react';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from './Components/pages/AboutUs';
import Contact from './Components/pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
