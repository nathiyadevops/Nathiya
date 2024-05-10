'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Slider from './Slider'

const Achivements = () => {
    return (
        <div id='achivements' className="bg-yellow-500 py-6">
            <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className="px-10 py-5 w-full self-center text-2xl sm:text-4xl font-bold text-center text-sky-900 whitespace-nowrap">
                Our Achievements
            </motion.h1>
            <div className="flex flex-col lg:flex-row items-center justify-center content-center m-2">
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: .75, ease: 'easeInOut' }} className="flex flex-col lg:w-[50%] w-full">
                    <Slider />
                </motion.div>
                <div className="flex flex-col">
                    <div className="text-center text-xl text-red-500">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: 1, ease: 'easeInOut' }} className="lg:max-w-[700px] md:max-w-fit p-5 text-lg text-black flex flex-col justify-center text-justify mb-6">
                            Welcome to Careerschool HR Solutions, your premier destination for comprehensive HR solutions in the domains of Training, Placement, and Campus Drives. With a proven track record of excellence, we take pride in our achievements in empowering individuals and organizations alike. Our Training programs have equipped countless professionals with the skills needed to thrive in today's competitive landscape, while our Placement services have successfully matched talent with top-tier companies across diverse industries.
                            <br /><br />
                            Additionally, our Campus Drives have bridged the gap between academia and industry, facilitating meaningful connections between students and leading organizations. At Careerschool HR Solutions, our achievements reflect our unwavering commitment to fostering talent, facilitating growth, and driving success.
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achivements