import React from 'react';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from './Components/pages/AboutUs';
import Contact from './Components/pages/Contact';
import Signup from './Components/Signup.php';
import Signin from './Components/signin.php';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" components={Signup} />
       <Route path="/signin" components={Signin} />
      </Routes>
    </Router>
  );
}

export default App;
