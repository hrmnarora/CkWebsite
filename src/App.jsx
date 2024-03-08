import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import MobileMenu from "./components/MobileMenu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MobileMenu/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
