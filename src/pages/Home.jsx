import React from "react";
import { HomeMain } from "../components/Medium/HomeMain";
import { Courses } from "../components/Medium/Courses";
import { Problems } from "../components/Medium/Problems";
import { PlacedCompanies } from "../components/Medium/PlacedCompanies";
import { Testimonials } from "../components/Medium/Testimonials";
import CustomCursor from "../components/Cursor/CustomCurser";
import { Footer } from "../components/Medium/Footer";

export const Home = () => {

  return (
    <div className=" relative items-center justify-center bg-black text-white flex-col  flex w-[100vw] overflow-hidden">
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
