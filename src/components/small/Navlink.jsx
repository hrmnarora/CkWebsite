import React from 'react'

export const Navlink = ({text}) => {
  return (
    <div className="group relative">
              <a
                href="#"
                className="text-white  py-2"
              >
                {text}
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-[1px] bg-gradient-to-r from-black via-blue-300 to-black transition-all duration-300 ease-in-out group-hover:w-full"></div>
    </div>
  )
}
