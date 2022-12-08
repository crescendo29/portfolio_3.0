"use client"

import React, { useEffect } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AiOutlineMail } from "react-icons/ai"
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"
import { BsPersonLinesFill } from "react-icons/bs"
import { gsap } from"gsap"
import Link from 'next/link'



function Main() {
  const [text, count ] = useTypewriter({
    words: ["ReactJS", "NextJS", "Svelte"],
    loop: true,
    delaySpeed: 2000,
  })

  useEffect(() => {
    let tl = gsap.timeline({defaults: {duration: 0.5}})
    tl.to(".linkedin", {x: 0, opacity: 1, ease: "power4.out"})
    .to(".github", {x: 0, opacity: 1, ease: "power4.out"})
    .to(".mail", {x: 0, opacity: 1, ease: "power4.out"})
    .to(".resume", {x: 0, opacity: 1, ease: "power4.out"})
  }, [])
  


  return (
    <div id="home" className='w-full h-screen text-center'>
      <div className="max-w-[1240px] mx-auto w-full h-full p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 uppercase">
          Construisons quelque chose ensemble
          </p>
          <h1 className="py-4 text-gray-700">
            Bonjour, je suis <span className="text-[#08929c]"> 
              Rodolphe
             </span>
          </h1>
          <h1 className="py-2 text-gray-700">
            Développeur Front-End
          </h1>
          <h2>
            <span className='text-gray-500'>{text}</span>
            <Cursor cursorColor="#F7AB0A"/>
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Je suis un Développeur Front-End spécialisé dans la construction (et occasionnellement dans le Design) d'expériences digitales. Actuellement, je me focalise sur la construction "Responsive" d'applications Web tout en m'intéressant aux technologies Back-End.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/rodolphe-beauverger-b65921154?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtNwatgLlQ468Aq3lJMtbIg%3D%3D" target="_blank" className="linkedin translate-x-[400px] opacity-0 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500 ">
              <FaLinkedinIn />
            </Link>
            <div className="github translate-x-[400px] opacity-0 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500 ">
              <FaGithub />
            </div>
            <div className=" mail translate-x-[400px] opacity-0 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500 ">
              <AiOutlineMail />
            </div>
            <div className="resume translate-x-[400px] opacity-0 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500 ">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main