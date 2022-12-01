"use client"

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AiOutlineMail } from "react-icons/ai"
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"
import { BsPersonLinesFill } from "react-icons/bs"



function Main() {
  const [text, count ] = useTypewriter({
    words: ["ReactJS", "NextJS", "Svelte"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='w-full h-screen text-center'>
      <div className="max-w-[1240px] mx-auto w-full h-full p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
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
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500 ">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500 ">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500 ">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500 ">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main