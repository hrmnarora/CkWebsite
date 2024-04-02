import React from "react";
import { SubHeading } from "../small/SubHeading";
import CustomCursor from "../Cursor/CustomCurser";
import { Navlink } from './../small/Navlink';
export const Courses = () => {   

  return (
    
    <> 

    <div
      className="courses  pb-24 bg-zinc-950 w-full z-10  flex items-center lg:justify-center flex-col   h-fit lg:flex-col "
    >
       <SubHeading type ={"Courses"} title={"Industry relevent programs to set you apart"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat maiores molestiae blanditiis voluptatum quos culpa facere eveniet nobis a!"}/>
      <div className=" w-[85%]  overflow-hidden relative select-none md:w-[80%] z-10 mt-4 py-10 border-zinc-900  px-10 bg-zinc-950 bg-opacity-60 rounded-xl flex flex-col lg:flex-row items-center justify-normal  border-[1px] h-fit shadow-md">
        <div>
          <CustomCursor className="absolute translate-y-[50%]"/>
          <h1 className="heading text-2xl md:text-3xl font-bold">Full Stack Course</h1>
          <p className="description mt-4 text-xl text-zinc-300 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div className="price mt-8">
            <div className="flex gap-2">
              <h3 className="text-2xl">$</h3>
              <h1 className="text-5xl font-bold text-blue-300">10</h1>
              <h3 className="text-2xl font-medium mt-4">USD</h3>
            </div>
            <p className="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button className="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-bold text-2xl">Get Now</div>
          </button>
          <p className="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>

        <div className="w-full lg:h-[350px] lg:w-[1px] mx-10 lg:my2 bg-zinc-900 h-[1px] my-12 "></div>

        <div>
          <h1 className="heading text-2xl md:text-3xl font-bold">Frontent Course</h1>
          <p className="description mt-4 text-xl text-gray-400 font-medium">
            For individual developers, freelancers, students, and educators that
            want to code faster and happier.
          </p>
          <div className="price mt-8">
            <div className="flex gap-2">
              <h3 className="text-2xl">$</h3>
              <h1 className="text-5xl font-bold text-blue-300">6</h1>
              <h3 className="text-2xl font-medium mt-4">USD</h3>
            </div>
            <p className="text-gray-400 font-medium mt-2">
              per month / $100 USD per year
            </p>
          </div>
          <button className="z-10 w-full  rounded-md mt-6 h-14 border flex justify-center items-center px-8 text-xl bg-white text-zinc-900">
            <div className="font-bold text-2xl">Get Now</div>
          </button>
          <p className="text-gray-400 font-medium mt-4 text-sm">
            Free for verified students, teachers, and maintainers of popular
            open source projects.
          </p>
        </div>
      </div>
      <div className="mt-5">
      <Navlink text={"Explore All Courses >"} address={"/courses"} />

      </div>

    </div>

    </>
  );
};
