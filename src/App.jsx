import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import MobileMenu from "./components/MobileMenu";
import Course from "./pages/Course";
import About from "./pages/About";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add an effect to toggle the class on the body element
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Add the class to disable body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Remove the class to enable body scroll
      document.body.style.overflow = "auto";
    }
    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);
  useEffect(()=>{
    document.body.style.overflowX = "hidden"
  })

  return (
    <>
      <BrowserRouter>
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
