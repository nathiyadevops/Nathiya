'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Navbar from '../Navbar/Navbar';
import bg from '../../../public/assets/banner2.jpg'
import { motion } from 'framer-motion';


function HeroSection() {
    return (
        <>
            <Navbar />
            <section id='hero' className='flex flex-col min-h-screen bg-center bg-cover bg-fixed' style={{ backgroundImage: `url(${bg.src})` }}>
                <motion.img initial={{ opacity: 0, x: -1000 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2, ease: 'easeIn', delay: .5 }} className='top-0 object-fill md:object-cover sm:object-cover h-screen mr-36' src='assets/rocket.png' />
                <div className="absolute top-0 h-full flex flex-col justify-center">
                    <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeInOut', delay: 2 }} className='p-2 lg:text-7xl md:text-6xl text-4xl'>Welcome to</motion.p>
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeInOut', delay: 3 }} className='text-yellow-500 p-2 font-bold lg:text-7xl md:text-6xl text-4xl' >
                        <Typewriter options={{
                            strings: "Careerschool",
                            autoStart: true,
                            loop: true,
                        }} ></Typewriter>
                    </motion.div>
                    <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: 'easeInOut', delay: 4 }} className='p-2 font-light lg:text-6xl md:text-4xl text-2xl'>HR SOLUTIONS</motion.p>
                </div>
            </section >
        </>
    )
}

export default HeroSection

{/* <div className='h-full w-full flex flex-1 justify-center px-[4rem]' >
                    <div className="md:text-3xl lg:text-6xl text-5xl h-screen flex flex-col items-start sm  justify-items-start sm:py-[30%]">
                        <p className='font-normal p-2 md:p-3 lg:p-5'>Welcome to</p>
                        <div className='text-yellow-500 p-2 md:p-3 lg:p-5' >
                            <Typewriter options={{
                                strings: "Career School",
                                autoStart: true,
                                loop: true,
                            }} ></Typewriter>
                        </div>
                        <p className='font-normal p-2 md:p-3 lg:p-5'>HR SOLUTIONS</p>
                    </div>
                </div> */}