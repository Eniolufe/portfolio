import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";
import Footer from "./components/Footer";
import { About, Contact, Projects, Experience } from "./Pages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
