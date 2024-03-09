import React from "react";
import Marquee from "react-fast-marquee";
import { SubHeading } from "../small/SubHeading";
import { TestimonialCard } from "../small/TestimonialCard";
import { testimonialsData } from "../../tes";
export const Testimonials = () => {
  const gradientStyle = {
    background: 'linear-gradient(to left, black, transparent 30%, transparent 70%, black',
    zIndex: 20,
  };
  return (
    <div className="courses overflow-hidden pb-24 pt-32 bg-black w-full z-10  flex items-center lg:justify-center flex-col   h-fit lg:flex-col">
      <SubHeading
        type={"testimonials"}
        title={"What our students said"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus repellat maiores molestiae blanditiis voluptatum quos culpa facere eveniet nobis a!"
        }
      />

<div className="w-[100%] md:w-[70%] relative overflow-hidden">
      <div className="marquee-container w-full r-0 h-full absolute top-0 " style={gradientStyle}></div>
        <Marquee pauseOnHover>
          <div className="w-fit h-fit overflow-hidden pr-5 flex gap-7">
            <div className="testimonials z-[10] py-4 items-center justify-center flex md:flex-row gap-12 flex-row">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </Marquee>
      
    </div>
    </div>
  );
};
