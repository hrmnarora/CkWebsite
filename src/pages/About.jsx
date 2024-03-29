import React, { useEffect } from 'react'
import Transition from '../Transition'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='w-[100vw] text-white h-[100vh] bg-black flex items-center justify-center'>About</div>
  )
}

export default Transition(About)