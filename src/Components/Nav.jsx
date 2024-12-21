import React from 'react';
import { Link } from 'react-scroll'; // Mengimpor Link dari react-scroll

const Nav = () => {
  return (
    <nav>
      <div className="h-[10vh] flex justify-between z-50 text-white lg:px-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex gap-8 mr-16 text-[18px]">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="home" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="porto" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-blue-500"
                >
                  Porto
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
