import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";

function Header({ onSidebarToggle }) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [issideberclicked, setissideberclicked] = useState(false);

  const handleMenuBar = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const handleSidebarClick = () => {
    const newSidebarStatus = !issideberclicked;
    setissideberclicked(newSidebarStatus);
    onSidebarToggle(newSidebarStatus); // Send the updated status to Home
  };

  return (
    <nav className="bg-zinc-700 w-full border-b border-gray-200 relative">
      <div className="container px-2 lg:px-4 overflow-x-hidden justify-between">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div>
              <button onClick={handleSidebarClick} className='text-white opacity-70 text-3xl mt-2'>
                {issideberclicked ? (<GoSidebarCollapse />) : (<GoSidebarExpand />)}
              </button>
            </div >
            <img
              src="https://i.ibb.co/K6jnQ3J/Untitled-design-3-removebg-preview.png"
              alt="Logo"
              className="h-16 w-16 mt-3"
            />
            <span className="ml-1 text-2xl font-bold text-white">MY-CHITTI</span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={handleMenuBar}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isMenuClicked ? (
                <RxCross2 className="text-2xl font-bold" />
              ) : (
                <HiMenuAlt3 className="text-2xl font-bold" />
              )}
            </button>
          </div>
          <div className="hidden text-white text-xl lg:flex lg:items-end">
            <Link
              to="/"
              className=" px-3 py-2 rounded-md hover:bg-zinc-800"
            >
              Home
            </Link>
            <Link
              to="/features"
              className=" px-3 py-2 rounded-md hover:bg-zinc-800"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className=" px-3 py-2 rounded-md hover:bg-zinc-800"
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className=" px-3 py-2 rounded-md hover:bg-zinc-800"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" px-3 py-2 rounded-md hover:bg-zinc-800"
            >
             Signup
            </Link>
          </div>
        </div>
      </div>

      {isMenuClicked && (
        <div className="lg:hidden w-full text-white bg-zinc-700 z-10 absolute top-16 left-0 animate-dropDown" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className=" block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-800"
            >
              Home
            </Link>
            <Link
              to="/features"
              className=" block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-800"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className=" block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-800"
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className=" block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-800"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-800"
            >
             Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
