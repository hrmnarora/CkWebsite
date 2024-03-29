import React from "react";
import CourseCard from "../components/Medium/CourseCard";

const Course = () => {
  return (
    <div className="pt-32 w-fit h-fit bg-black text-white">
      <div className=" flex items-center justify-center py-10 pb-20">
        <h1 className="text-5xl"> Explore Courses</h1>
      </div>
    <div className="w-[100vw] flex-wrap px-2 lg:px-12 h-fit  bg-black gap-12 flex justify-center items-center">
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
export default Course;
