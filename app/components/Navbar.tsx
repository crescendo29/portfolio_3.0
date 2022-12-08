"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
} from "react-icons/ai";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import logo from "../../public/logo.png";

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  };
  return (

    
    <div
      className=
          "fixed w-full shadow-xl h-20 z-[100] bg-[#ecf0f3]"
      
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <a href="/">
          <Image
            className="rounded-full"
            src={logo}
            alt="navLogo"
            width="75"
            height="50"
          />
        </a>

        <div className="">
          <ul
            
            className="hidden md:flex"
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Accueil
              </li>
            </Link>
            <a href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                à propos
              </li>
            </a>
            <a href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Skills
              </li>
            </a>
            <a href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projets
              </li>
            </a>
            <a href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </a>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu
             
              size={25}
            />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link href="/">
                <Image
                  className="rounded-full"
                  src={logo}
                  width="80"
                  height="45"
                  alt="logo"
                />
              </Link>

              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                Construisons quelque chose ensemble.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/#home">
                <li
                  onClick={handleNav}
                  className="py-4 text-sm"
                >
                  Accueil
                </li>
              </Link>
              <a href="#about">
                <li
                  onClick={handleNav}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </a>
              <a href="#skills">
                <li
                  onClick={handleNav}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </a>
              <a href="#projects">
                <li
                  onClick={handleNav}
                  className="py-4 text-sm"
                >
                  Projects
                </li>
              </a>
              <a href="/#contact">
                <li
                  onClick={handleNav}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </a>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
                  <FaGithub />
                </div>
                <div className="p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;