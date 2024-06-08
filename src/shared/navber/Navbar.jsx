/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false);

    const handleSetActive = (path) => {
        setActive(path);
        setIsOpen(false);  // Close the menu when an item is clicked
    };

    return (
        <>
       <nav className="bg-gray-800 text-xl p-4">
      <div className="container lg:px-12 mx-auto  flex justify-between items-center">
        <div className="text-white font-bold text-xl">Portfolio</div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-4 w-[330px] absolute md:static bg-gray-800  z-20 md:w-auto transition-transform duration-300 ease-in-out ${isOpen ? 'top-16' : '-top-64'}`}>
          {['/', '/experience', '/skills', '/projects', '/contact'].map((path, index) => (
            <Link 
              key={index} 
              to={path} 
              className={`block md:inline-block text-white py-2 px-4 md:py-0 md:px-0 ${location.pathname === path ? 'border-b-2 border-blue-500' : ''} hover:border-b-2 hover:border-blue-300 transition duration-300`}
              onClick={() => setIsOpen(false)}
            >
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(1).slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>

        </>
    );
};
export default Navbar;