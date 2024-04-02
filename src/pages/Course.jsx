import React, { useEffect } from "react";
import CourseCard from "../components/Medium/CourseCard";
import Transition from "../Transition";

const Course = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-32 w-fit h-fit bg-zinc-950 text-white">
      <div className=" flex items-center justify-center py-10 pb-20">
        <h1 className="text-5xl"> Explore Courses</h1>
      </div>
    <div className="w-[100vw] flex-wrap px-2 lg:px-12 h-fit  bg-zinc-950 gap-12 flex justify-center items-center">
     <CourseCard/>
     <CourseCard/>
     <CourseCard/>
     <CourseCard/>
     <CourseCard/>
     <CourseCard/>
      </div>
      </div>
  );
};
export default Transition(Course);
