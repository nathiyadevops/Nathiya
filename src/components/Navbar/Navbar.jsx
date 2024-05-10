"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { useRouter } from "next/navigation";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const router = useRouter();

  const handleRedirectToWhatsapp = () => {
    router.push('https://wa.me/message/44J2WCWQDJ2UJ1?text="Hey there!"');
  };

  const handleRedirectToLinkedin = () => {
    router.push("https://www.linkedin.com/company/35934924/");
  };

  const handleRedirectToInstagram = () => {
    router.push(
      "https://www.instagram.com/careerschoolhrsolutions?utm_source=qr&igsh=ZDJzajBxbTViZTMy"
    );
  };

  const handleRedirectToFacebook = () => {
    router.push("https://www.facebook.com/careerschoolhrsolutions.homepage");
  };

  const handleRedirectToTwitterX = () => {
    router.push("https://x.com/careerschoolhr?s=20");
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const headerHeight = document.querySelector("header").offsetHeight;

    if (scrollY > headerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const headerHeight = document.querySelector("header").offsetHeight;
    const targetSection = document.getElementById(sectionId);
    const offset = targetSection.offsetTop - headerHeight;

    window.scroll({ top: offset, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.25,
      },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={`bg-white ${
        isScrolled ? "show" : ""
      } text-yellow-500 body-font stickOntop`}
    >
      <motion.header
        variants={itemVariants}
        className="flex justify-between items-center h-full w-full px-4 2xl-px-16"
      >
        {/* <Image src={logo} alt="logo" height={75} className='cursor-pointer' /> */}
        <a href="/">
          <img
            src="./assets/logo.png"
            alt="logo"
            className="h-[75px] cursor-pointer"
          />
        </a>
        <div className="hidden md:flex">
          <ul className="hidden md:flex md:justify-center md:items-center">
            <li>
              <a
                href="#hero"
                onClick={(event) => scrollToSection(event, "hero")}
                className="ml-3 px-3 py-2 uppercase text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(event) => scrollToSection(event, "about")}
                className="ml-3 px-3 py-2 uppercase text-base"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(event) => scrollToSection(event, "services")}
                className="ml-3 px-3 py-2 uppercase text-base"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#training"
                onClick={(event) => scrollToSection(event, "training")}
                className="ml-3 px-3 py-2 uppercase text-base"
              >
                Training
              </a>
            </li>
            <li>
              <a
                href="#test"
                onClick={(event) => scrollToSection(event, "test")}
                className="ml-3 px-3 py-2 uppercase text-base"
              >
                Take Test
              </a>
            </li>
            <li>
              <a
                href="#achivements"
                onClick={(event) => scrollToSection(event, "achivements")}
                className="ml-3 px-3 py-2 uppercase text-base"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#jobs"
                onClick={(event) => scrollToSection(event, "jobs")}
                className="ml-3 px-3 py-2 uppercase text-base"
              >
                Jobs
              </a>
            </li>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
              className="ml-10 px-6 py-3 uppercase md:px-4 md:py-2 text-base bg-yellow-500  text-blue-950 rounded-xl cursor-pointer"
            >
              Contact us
            </a>
          </ul>
        </div>

        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </motion.header>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="show"
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[75%] md:hidden p-10 ease-in duration-500 h-screen bg-black/90 z-10"
            : "fixed left-[-100%] top-0 p-10 h-screen z-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={closeMenu} className="cursor-pointer text-white">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="text-center py-2 text-white w-full my-4">
          <ul>
            <Link href="/">
              <li
                onClick={(event) => {
                  closeMenu();
                }}
                className="py-3 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="">
              <li
                onClick={(event) => {
                  closeMenu();
                  scrollToSection(event, "about");
                }}
                className="py-3 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href="">
              <li
                onClick={(event) => {
                  closeMenu();
                  scrollToSection(event, "services");
                }}
                className="py-3 cursor-pointer"
              >
                Services
              </li>
            </Link>
            <Link href="">
              <li
                onClick={(event) => {
                  closeMenu();
                  scrollToSection(event, "jobs");
                }}
                className="py-3 cursor-pointer"
              >
                Jobs
              </li>
            </Link>
            <Link href="">
              <li
                onClick={(event) => {
                  closeMenu();
                  scrollToSection(event, "training");
                }}
                className="py-3 cursor-pointer"
              >
                Training
              </li>
            </Link>
            <Link href="">
              <li
                onClick={(event) => {
                  closeMenu();
                  scrollToSection(event, "test");
                }}
                className="py-3 cursor-pointer"
              >
                Take test
              </li>
            </Link>
            <a
              type="button"
              onClick={(event) => {
                closeMenu();
                scrollToSection(event, "contact");
              }}
              className="bg-white text-blue-950 px-6 py-3 rounded-xl  cursor-pointer hover:bg-white/75"
            >
              Contact Us
            </a>
          </ul>
        </div>
        <div className="my-4 flex flex-col flex-wrap content-center items-center gap-2 text-white">
          <h1 className="text-2xl font-bold">Follow us</h1>
          <div className="flex gap-6 text-base">
            <BsWhatsapp
              size={30}
              style={{ cursor: "pointer" }}
              onClick={handleRedirectToWhatsapp}
            />
            <BsLinkedin
              size={30}
              style={{ cursor: "pointer" }}
              onClick={handleRedirectToLinkedin}
            />
            <BsInstagram
              size={30}
              style={{ cursor: "pointer" }}
              onClick={handleRedirectToInstagram}
            />
            <BsFacebook
              className=""
              size={30}
              style={{ cursor: "pointer" }}
              onClick={handleRedirectToFacebook}
            />
            <BsTwitterX
              size={30}
              style={{ cursor: "pointer" }}
              onClick={handleRedirectToTwitterX}
            />
          </div>
        </div>
        <div className="my-3 p-3 flex flex-col flex-wrap content-center items-center">
          {/* <Image src={logo} alt="logo" height="100" className='cursor-pointer flex flex-wrap content-center items-center' /> */}
          <img
            src="./assets/logo.png"
            alt="logo"
            className="h-[75px] cursor-pointer"
          />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
