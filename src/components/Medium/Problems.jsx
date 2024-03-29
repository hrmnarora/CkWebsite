import React from "react";
import { SubHeading } from "../small/SubHeading";

export const Problems = () => {
  return (
    <div className="courses pb-24 pt-32 bg-black w-full z-10  flex items-center lg:justify-center flex-col  h-fit lg:flex-col">
      <SubHeading
        type={"Problem"}
        title={"Problems faced by students"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat maiores molestiae blanditiis voluptatum quos culpa facere eveniet nobis a!"
        }
      />
      <div className=" w-[80%] flex flex-col gap-2 md:w-[80%] rounded-xl h-[60vh]">
        <div className="flex w-full h-[50%] gap-2  flex-col md:flex-row">
          <div className="md:w-[30%] w-full rounded-xl h-full bg-zinc-900"></div>
          <div className="md:w-[70%] w-full rounded-xl h-full bg-zinc-900"></div>
        </div>
        <div className="flex h-[50%] w-full gap-2 flex-col md:flex-row">
        <div className="md:w-[70%] w-full rounded-xl h-full bg-zinc-900"></div>
          <div className="md:w-[30%] w-full rounded-xl h-full bg-zinc-900"></div>
        </div>
      </div>
    </div>
  );
};
