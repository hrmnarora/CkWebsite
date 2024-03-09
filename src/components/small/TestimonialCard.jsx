import React from 'react'

export const TestimonialCard = ({testimonial,index}) => {
  return (
    <div
          key={index}
          className="testicard cursor-pointer z-10  bg-black  md:w-[25vw] w-[80vw] bg-opacity-20  transition-all border-zinc-500 border-[.5px] rounded-xl p-6"
        >
          <div className="text text-md md:text-lg font-med text-white">
            <p className="leading-7">{testimonial.quote}</p>
          </div>
          <div className="w-[80%] bg-white h-[1px] mt-3"></div>
          <div className="reviewer mt-4 flex items-center">
            <div className="image w-14 h-14 bg-zinc-500 rounded-full"></div>
            <div className="name ml-3">
              <h1 className="text-xl font-bold text-zinc-100">{testimonial.name}</h1>
              <h3 className="text-zinc-400">{testimonial.role}</h3>
            </div>
          </div>
        </div>
  )
}
