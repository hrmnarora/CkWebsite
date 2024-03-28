import React from "react";
import { SubHeading } from "../small/SubHeading";
import ic1 from "../../assets/ic1.png";
import ic2 from "../../assets/ic2.png";
import ic3 from "../../assets/ic3.png";
import ic4 from "../../assets/ic4.png";

export const Problems = () => {
  return (
    <div className="courses pb-24 pt-32 bg-zinc-950 w-full z-10  flex items-center lg:justify-center flex-col  h-fit lg:flex-col">
      {/* <SubHeading
        type={"Why Join Us?"}
        title={"Why To Choose CodeKaro"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat maiores molestiae blanditiis voluptatum quos culpa facere eveniet nobis a!"
        }
      /> */}

      <div className="w-[80%] h-fit bg-zinc-900 rounded-lg gap-10 py-10 flex flex-col items-center justify-center">
        <div className="w-[80%]  h-fit gap-5 flex md:items-center flex-col md:flex-row">
          <h1 className="text-4xl md:w-[55%] font-bold">
            Why <br /> Choose Codekaro ?
          </h1>
          <div className="md:w-[3px] w-[100px] h-[3px] md:h-16 bg-zinc-600"></div>
          <p className="font-thin opacity-[80%]">
            With time tested, result oriented pedagogy & industry aligned
            courses offering project based learning, our courses are your
            perfect investment into your career. Get the best in the industry!
          </p>
        </div>
        <div className="w-[80%]  h-fit flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:w-[25%] w-[95%] h-fit md:py-2 mt-5 px-5 gap-3 md:border-r border-b-[2px] md:border-b-0 py-5 border-zinc-800">
            <div className="w-10 h-10 p-2 border-blue-300 border-[1px] shadow-md shadow-blue-300 rounded-full">
              <img src={ic1} alt="" />
            </div>
            <h1 className="text-xl font-semibold">Verified curriculum</h1>
            <p className="text-md opacity-[80%]">
              Best in class content, aligned to the Tech industry is delivered
              to you to ensure you are a darling of the Tech industry.
            </p>
          </div>
          <div className="flex flex-col md:w-[25%] w-[95%] h-fit md:py-2 mt-5 px-5 gap-3 md:border-r border-b-[2px] md:border-b-0 py-5 border-zinc-800">
            <div className="w-10 h-10 p-2 border-blue-300 border-[1px] shadow-md shadow-blue-300 rounded-full">
              <img src={ic2} alt="" />
            </div>
            <h1 className="text-xl font-semibold">Project based learning</h1>
            <p className="text-md opacity-[80%]">
              Hands on learning pedagogy with live projects to cover practical
              knowledge over theoretical one.
            </p>
          </div>
          <div className="flex flex-col md:w-[25%] w-[95%] h-fit md:py-2 mt-5 px-5 gap-3 md:border-r border-b-[2px] md:border-b-0 py-5 border-zinc-800">
            <div className="w-10 h-10 p-2 border-blue-300 border-[1px] shadow-md shadow-blue-300 rounded-full">
              <img src={ic3} alt="" />
            </div>
            <h1 className="text-xl font-semibold">Superb mentors</h1>
            <p className="text-md opacity-[80%]">
              Best in class mentors from top Tech schools and Industry favourite
              Techies are here to teach you.
            </p>
          </div>
          <div className="flex flex-col md:w-[25%] w-[95%] h-fmd:it md:py-2   py-5 mt-5 px-5 gap-3 ">
            <div className="w-10 h-10 p-2 border-blue-300 border-[1px] shadow-md shadow-blue-300 rounded-full">
              <img src={ic4} alt="" />
            </div>
            <h1 className="text-xl font-semibold">Superb placements</h1>
            <p className="text-md opacity-[80%]">
              Result oriented courses with placement across all genres, students
              as well as Working professionals.
            </p>
          </div>
        </div>
      </div>
      {/* <div className=" w-[80%] flex flex-col gap-2 md:w-[80%] rounded-xl h-[60vh]">
        <div className="flex w-full h-[50%] gap-2  flex-col md:flex-row">
          <div className="md:w-[30%] w-full rounded-xl h-full bg-zinc-900"></div>
          <div className="md:w-[70%] w-full rounded-xl h-full bg-zinc-900"></div>
        </div>
        <div className="flex h-[50%] w-full gap-2 flex-col md:flex-row">
        <div className="md:w-[70%] w-full rounded-xl h-full bg-zinc-900"></div>
          <div className="md:w-[30%] w-full rounded-xl h-full bg-zinc-900"></div>
        </div>
      </div> */}
    </div>
  );
};
