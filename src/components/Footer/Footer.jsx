'use client'
import React from 'react'
import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Footer() {
    const router = useRouter();

    const handleRedirectToWhatsapp = () => {
        router.push('https://wa.me/message/44J2WCWQDJ2UJ1?text="Hey there!"');
    };

    const handleRedirectToLinkedin = () => {
        router.push('https://www.linkedin.com/company/35934924/');
    };

    const handleRedirectToInstagram = () => {
        router.push('https://www.instagram.com/careerschoolhrsolutions?utm_source=qr&igsh=ZDJzajBxbTViZTMy');
    };

    const handleRedirectToFacebook = () => {
        router.push('https://www.facebook.com/careerschoolhrsolutions.homepage');
    };

    const handleRedirectToTwitterX = () => {
        router.push('https://x.com/careerschoolhr?s=20');
    };

    return (
        <footer className="text-white body-font bg-blue-950">
            <div className="px-10 border-3 py-8 mx-auto flex flex-wrap items-center justify-between sm:flex-row flex-col">
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className='m-3'>
                    <img className='h-24 w-auto' src='assets/logo.png' alt="logo" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: 0.25, ease: 'easeInOut' }} className='m-3 w-[300px]'>
                    <div className='strong mb-3 font-semibold'>
                        Careerschool Address:
                    </div>
                    <p className='text-justify'> 5/23, 1st Floor,2nd Street, Sevenwells Gandhinagar, Nandambakkam<br /> Landmark: near Buhari Hotel, Chennai, Tamil Nadu Pincode:600016</p>
                </motion.div>
                <div className='flex flex-col flex-wrap content-center items-center gap-5 m-3'>
                    <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 0.5, ease: 'easeInOut' }} className='text-2xl font-bold'>Follow us</motion.h1>
                    <div className='flex gap-10 text-lg'>
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 0.75, ease: 'easeInOut' }}>
                            <BsWhatsapp size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToWhatsapp} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1, ease: 'easeInOut' }}>
                            <BsInstagram size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToInstagram} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.25, ease: 'easeInOut' }}>
                            <BsLinkedin size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToLinkedin} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.5, ease: 'easeInOut' }}>
                            <BsFacebook size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToFacebook} />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 1.75, ease: 'easeInOut' }}>
                            <BsTwitterX size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToTwitterX} />
                        </motion.div>


                    </div>
                </div>
            </div>
            <div className=" p-3 bg-yellow-500 mx-auto">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, ease: 'easeInOut' }} className="text-center text-blue-950 text-sm md:text-xs sm:text-xs">
                    ©2024 Code Vibe Studios | All rights reserved.
                </motion.p>
            </div>
        </footer>
    )
}
