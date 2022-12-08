import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:h-screen"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#08929c]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <img
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">
                  Rodolphe Beauverger
                </h2>
                <p>Developpeur Front-End</p>
                <p className="py-4">
                  Je suis disponible pour des missions Freelance ou emploi Salarié. Contactez-moi et discutons en.
                
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">
                  Réseaux Sociaux
                </p>
                <div className="flex items-center justify-between py-4">
                  <div className="p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                    <FaLinkedinIn />
                  </div>
                  <div className="p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                    <FaGithub />
                  </div>
                  <div className="p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                    <AiOutlineMail />
                  </div>
                  <div className="p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadox-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Nom
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Téléphone
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">
                    Email
                  </label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">
                    Sujet
                  </label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">
                    Message
                  </label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4 text-gray-100">
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <a href="#home">
            <div className="p-4 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
              <HiOutlineChevronDoubleUp
                className="text-[#08929c]"
                size={30}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
