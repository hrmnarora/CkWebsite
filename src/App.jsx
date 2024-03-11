import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import MobileMenu from "./components/MobileMenu";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
