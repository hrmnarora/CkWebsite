import React, { useEffect } from "react";
import { HomeMain } from "../components/Medium/HomeMain";
import { Courses } from "../components/Medium/Courses";
import { Problems } from "../components/Medium/Problems";
import { PlacedCompanies } from "../components/Medium/PlacedCompanies";
import { Testimonials } from "../components/Medium/Testimonials";
import CustomCursor from "../components/Cursor/CustomCurser";
import { Footer } from "../components/Medium/Footer";
import Transition from "../Transition";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" relative items-center justify-center bg-zinc-950 text-white flex-col  flex w-[100vw] overflow-hidden">
      {/* home heading  */}
      <HomeMain />
      <Courses />
      <Problems/>
      <PlacedCompanies/>
      <Testimonials/>
      <Footer/>
      <CustomCursor/>
    </div>
  );
};

// Wrap the Home component with the Transition higher-order component
export default Transition(Home);
