import React from "react";
import { SubHeading } from "../small/SubHeading";
export const Courses = () => {   

  return (
    <div
      className="courses pb-24 bg-black w-full z-10  flex items-center lg:justify-center flex-col   h-fit lg:flex-col "
    >
       <SubHeading type ={"Courses"} title={"Industry relevent programs to set you apart"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat maiores molestiae blanditiis voluptatum quos culpa facere eveniet nobis a!"}/>

      <div className=" w-[85%] md:w-[60%]  mt-4 border-[#313131] p-10 bg-black bg-opacity-20 rounded-xl flex flex-col lg:flex-row items-center justify-normal  border-[1px] h-fit shadow-md">
        <div>
          <h1 className="heading text-2xl font-bold">Full Stack Course</h1>
          <p className="description mt-4 text-zinc-300 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div className="price mt-8">
            <div className="flex gap-2">
              <h3 className="text-2xl">$</h3>
              <h1 className="text-5xl font-bold text-[#2b4ae3]">10</h1>
              <h3 className="text-2xl font-medium mt-4">USD</h3>
            </div>
            <p className="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button className="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-medium">Get Now</div>
          </button>
          <p className="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>

        <div className="w-full lg:h-[350px] lg:w-[1px] mx-10 lg:my2 bg-zinc-700 h-[1px] my-12 "></div>

        <div>
          <h1 className="heading text-2xl font-bold">Frontent Course</h1>
          <p className="description mt-4 text-gray-400 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div className="price mt-8">
            <div className="flex gap-2">
              <h3 className="text-2xl">$</h3>
              <h1 className="text-5xl font-bold text-[#2b4ae3]">6</h1>
              <h3 className="text-2xl font-medium mt-4">USD</h3>
            </div>
            <p className="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button className="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-medium">Get Now</div>
          </button>
          <p className="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>
      </div>
    </div>
  );
};
