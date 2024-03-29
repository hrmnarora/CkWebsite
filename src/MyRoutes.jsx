import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course'
import About from './pages/About'

const MyRoutes = () => {
  const location = useLocation();

  

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={Home} />
        <Route path="/courses" element={Course} />
        <Route path="/about" element={About} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;
