import React, { useState } from "react";

class Navbar extends React.Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <nav className="border-slate-500 bg-[#201E1F] drop-shadow-xl sticky top-0 relative z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Title */}
          <a href="#landing" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <span className="self-center text-2xl font-bold whitespace-nowrap text-[#FEFDFD]">
              Fajri Kanugraha
            </span> */}
            <img src="././iconPaj.png" alt="icon pajri" className="self-center w-10 h-auto md:ml-7"/>
          </a>

          {/* User Menu Button */}
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Mobile Menu Toggle Button */}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded={this.state.isMenuOpen ? "true" : "false"}
              onClick={this.toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 md:block ${
              this.state.isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#201E1F]">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-[#FEFDFD] rounded md:p-0 hover:bg-white hover:text-gray-800"
                  aria-current="page"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="block py-2 px-3 text-[#FEFDFD] rounded md:p-0 hover:bg-white hover:text-gray-800"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="block py-2 px-3 text-[#FEFDFD] rounded md:p-0 hover:bg-white hover:text-gray-800"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
