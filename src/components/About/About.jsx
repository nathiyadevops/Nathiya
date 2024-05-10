'use client'
import React from 'react'
import { motion } from "framer-motion";
import Slider from './Slider';

function About() {
  return (
    <div id='about' className='lg:p-10 md:p-8 bg-blue-950'>

      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: .75, ease: 'easeInOut' }} exit={{ opacity: 0 }} className='px-10 py-5 w-full self-center text-2xl sm:text-4xl font-bold text-center text-yellow-500 whitespace-nowrap'>About Us</motion.h1>

      <div className='flex flex-col gap-5 lg:flex-row items-center justify-center content-center'>

        <motion.div initial={{ opacity: 0, x: -75 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, ease: 'easeInOut', delay: 1 }} className="flex flex-col lg:w-[50%] w-full">
          <Slider />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 75 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut', delay: 0.5 }} className='lg:max-w-[700px] md:max-w-fit p-5 text-lg text-white flex flex-col justify-center text-justify mb-6'>
          <motion.p initial={{ opacity: 0, y: 75 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut', delay: 0.75 }}>Welcome to Careerschool, your trusted partner in career placement and professional development. We understand that finding the right career path and excelling in today's competitive job market can be challenging. That's why we're here to provide unparalleled support and guidance to individuals at every stage of their career journey.</motion.p>
          <br></br>
          <motion.p initial={{ opacity: 0, y: 75 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut', delay: 1 }}>With a focus on personalized service, we take the time to understand the unique needs and aspirations of each client. Whether you're a recent graduate exploring your options, a mid-career professional seeking advancement opportunities, or someone looking to make a career transition, we have the expertise and resources to help you succeed.</motion.p>
        </motion.div>

      </div>
    </div>
  )
}

export default About