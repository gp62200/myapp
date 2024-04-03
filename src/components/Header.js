// components/Header.js
"use client"
import Image from "next/image";
import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <header className=" p-4 text-black lg:mx-10 mx-4 ">
      <nav className="container  flex items-center justify-between">
        <div className="flex items-center text-black lg:ml-20 ml-4">
          <Image src="/Vector.png" width={40} height={40} />
          <a href="#" className=" font-bold ml-2 text-black">
            TravelLog
          </a>
         
          <ul className={`md:flex ${isToggleOpen ? 'block' : 'hidden'} sm:block flex-col sm:flex-row sm:items-center sm:gap-4 `}>
            <li >
              <a href="#" className="text-black hover:text-gray-300 px-4 ml-10 lg:mt-0 mt-20">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-300 px-4 ml-10">
                Discover
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-300 px-4 ml-10">
                Special Deals
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-300 px-4 ml-10">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center ml-20 ">
          <button className="hidden md:block text-black font-medium hover:text-gray-300 px-4 focus:outline-none ">
            Log In
          </button>
          <button className="hidden md:block text-white hover:text-gray-300  focus:outline-none rounded-3xl px-4 py-2 text-sm  bg-violet-500">
            Sign Up

          </button>
          
          <button className="md:hidden  text-black focus:outline-none " onClick={handleToggleOpen}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
