'use client'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";


function Mission() {
    return (
        <section className="mx-auto p-4 sm:px-[100px] bg-yellow-500 text-white sm:py-10 flex flex-col items-center gap-6 md:gap-8  overflow-hidden">

            <div className="space-y-5 text-center">
                <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className='text-2xl sm:text-4xl font-bold text-blue-950 text-center'>Our Mission</motion.h1>
            </div>

            <div className="text-[16px] sm:text-[18px] space-y-3 text-center ">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: .5, ease: 'easeInOut' }} className="text-blue-950 text-[40px]">
                    <FaQuoteLeft />
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .5, ease: 'easeInOut' }} className="py-6 text-blue-950 font italic rounded-xl">To empower individuals to reach their career goals and achieve fulfillment in their professional lives. We believe that everyone deserves the chance to pursue meaningful work that brings them joy and satisfaction, and we are dedicated to making that a reality for each and every one of our clients.</motion.p>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: .5, ease: 'easeInOut' }} className="text-blue-950 text-[40px]">
                    <FaQuoteRight className="ml-auto" />
                </motion.div>
            </div>

        </section>
    )
}

export default Mission