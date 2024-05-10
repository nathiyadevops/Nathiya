'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/logo.png'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useRouter } from 'next/navigation';

export default function NavMenu() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

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
        <nav className='fixed top-0 w-full h-24 shadow-xl bg-white z-50'>
            <header className='flex justify-between items-center h-full w-full px-4 2xl-px-16'>
                <Image src={logo} alt="logo" height={75} className='cursor-pointer' />
                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex '>
                        <Link href='/'>
                            <li className='ml-3 px-3 py-2 uppercase md:text-lg text-base'>Home</li>
                        </Link>
                        <Link href='#about'>
                            <li className='ml-3 px-3 py-2 uppercase md:text-lg text-base' >About</li>
                        </Link>
                        <Link href='#services'>
                            <li className='ml-3 px-3 py-2 uppercase md:text-lg text-base'>Services</li>
                        </Link>
                        <Link href='#jobs'>
                            <li className='ml-3 px-3 py-2 uppercase md:text-lg text-base'>Jobs</li>
                        </Link>
                        <Link href='#Training'>
                            <li className='ml-3 px-3 py-2 uppercase md:text-lg text-base'>Training</li>
                        </Link>
                        <button type="button" className='ml-10 px-6 py-3 uppercase md:text-lg text-base bg-yellow-500  text-blue-950 rounded-xl cursor-pointer'>Contact Us</button>
                    </ul>
                </div>
                <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24' >
                    <AiOutlineMenu size={25} />
                </div>
            </header>

            <div className={
                menuOpen ? 'fixed left-0 top-0 w-[75%] sm:hidden p-10 ease-in duration-500 h-screen bg-black/90 z-10' : 'fixed left-[-100%] top-0 p-10 h-screen z-10 ease-in duration-500'
            }>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={closeMenu} className='cursor-pointer text-white'>
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className='text-center py-2 text-white w-full my-4'>
                    <ul>
                        <Link href='/'>
                            <li onClick={closeMenu} className='py-3 cursor-pointer'>Home</li>
                        </Link>
                        <Link href='#about'>
                            <li onClick={closeMenu} className='py-3 cursor-pointer' >About</li>
                        </Link>
                        <Link href='#services'>
                            <li onClick={closeMenu} className='py-3 cursor-pointer'>Services</li>
                        </Link>
                        <Link href='#jobs'>
                            <li onClick={closeMenu} className='py-3 cursor-pointer'>Jobs</li>
                        </Link>
                        <Link href='#Training'>
                            <li onClick={closeMenu} className='py-3 cursor-pointer'>Training</li>
                        </Link>
                        <button type="button" onClick={closeMenu} className='bg-white text-blue-950 px-6 py-3 rounded-xl  cursor-pointer hover:bg-white/75'>Contact Us</button>
                    </ul>
                </div>
                <div className='my-4 flex flex-col flex-wrap content-center items-center gap-2 text-white'>
                    <h1 className='text-2xl font-bold'>Follow us</h1>
                    <div className='flex gap-10 text-base'>
                        <BsWhatsapp size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToWhatsapp} />
                        <BsLinkedin size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToLinkedin} />
                        <BsInstagram size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToInstagram} />
                        <BsFacebook className='' size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToFacebook} />
                        <BsTwitterX size={30} style={{ cursor: 'pointer' }} onClick={handleRedirectToTwitterX} />
                    </div>
                </div>
                <div className='my-3 p-3 flex flex-col flex-wrap content-center items-center'>
                    <Image src={logo} alt="logo" height="100" className='cursor-pointer flex flex-wrap content-center items-center' />
                </div>
            </div>
        </nav >
    )
}
