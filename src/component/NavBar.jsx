import React, { useState } from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="flex items-center justify-between bg-black px-6 py-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
          </div>
          <div className="hidden lg:flex lg:items-center">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4">
              Work
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4">
              Expertise
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4">
              About
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300">
              Insight
            </a>
          </div>
          <div className="flex items-center">

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4  mr-4">
              Start a Project
            </button>
            <button
              className="text-white hover:text-yellow-300 focus:outline-none lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        <div className={`lg:hidden fixed inset-y-0 right-0 bg-yellow-900 z-50 w-64 overflow-y-auto transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out`}>
          <div className="py-6 px-4">
            <a href="#" className="block mt-4 text-black hover:text-yellow-300">
              Work
            </a>
            <a href="#" className="block mt-4 text-black hover:text-yellow-300">
              Expertise
            </a>
            <a href="#" className="block mt-4 text-black hover:text-yellow-300">
              About
            </a>
            <a href="#" className="block mt-4 text-black hover:text-yellow-300">
              Insight
            </a>
          </div>
        </div>
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black opacity-25 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export default NavBar;
