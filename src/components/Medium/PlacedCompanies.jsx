import React from "react";
import Marquee from "react-fast-marquee";
import { SubHeading } from "../small/SubHeading";

export const PlacedCompanies = () => {
  const gradientStyle = {
    background:
      "linear-gradient(to left, black, transparent 30%, transparent 70%, black",
    zIndex: 20,
  };
  return (
    <div className="courses overflow-hidden pb-24 pt-32 bg-black w-full z-10  flex items-center lg:justify-center flex-col   h-fit lg:flex-col">
      <SubHeading
        type={"placed"}
        title={"our students placed in top companies"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat maiores molestiae blanditiis voluptatum quos culpa facere eveniet nobis a!"
        }
      />

      <div className="w-[100%] md:w-[70%] relative overflow-hidden">
        <div
          className="marquee-container  w-full r-0 h-full absolute top-0 "
          style={gradientStyle}
        ></div>
        <Marquee pauseOnHover>
          <div className="w-fit h-fit overflow-hidden flex ">
            <div className="testimonials z-[10] pr-10  pl-[-10px] items-center justify-center flex md:flex-row gap-10 flex-row">
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800 rounded-xl">
                <h1>hello</h1>
              </div>
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800 rounded-xl">
                <h1>hello</h1>
              </div>
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800 rounded-xl">
                <h1>hello</h1>
              </div>
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800 rounded-xl">
                <h1>hello</h1>
              </div>
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800  rounded-xl">
                <h1>hello</h1>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
      <div className="w-[100%] mt-8 md:w-[70%]  relative overflow-hidden">
        <div
          className="marquee-container  w-full r-0 h-full absolute top-0 "
          style={gradientStyle}
        ></div>
        <Marquee pauseOnHover>
          <div className="w-fit translate-x-24 h-fit overflow-hidden pr-5 flex gap-7">
            <div className="testimonials z-[10]  pr-10 items-center justify-center flex md:flex-row gap-10 flex-row">
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800 rounded-xl">
                <h1>hello</h1>
              </div>
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800 rounded-xl">
                <h1>hello</h1>
              </div>
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800 rounded-xl">
                <h1>hello</h1>
              </div>
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800 rounded-xl">
                <h1>hello</h1>
              </div>
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-zinc-800  rounded-xl">
                <h1>hello</h1>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};
