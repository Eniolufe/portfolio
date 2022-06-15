import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => setToggler(!toggler);

  const closeMenu = () => setToggler(false);
  return (
    <div>
      <header className="flex justify-between items-center text-pink-600 bg-[#0a192f] p-4 w-full md:w-screen ">
        <div>
          <Link to="/" onClick={closeMenu}>
            <h1 className="text-2xl ">
              <span className="bg-pink-600 rounded-r-full  text-[#0a192f] uppercase p-2 font-extrabold font-700 text-3xl">
                d
              </span>
              ev
            </h1>
          </Link>
        </div>
        <nav>
          <ul
            className={`flex flex-col justify-center md:px-0 items-center md:flex-row top-0 md:h-auto h-screen fixed md:static gap-5 md:gap-1 inset-0 ${
              !toggler ? "right-[-200%]" : "right-0"
            } ${toggler ? "bg-pink-300" : "null"}`}
          >
            <li className=" mx-3 md:mx-7 text-xl md:inline-block border-b-2 border-transparent hover:border-pink-500 duration-300">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="mx-3 md:mx-7 text-xl md:inline-block border-b-2 border-transparent hover:border-pink-500 duration-300">
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="mx-3 md:mx-7 text-xl md:inline-block border-b-2 border-transparent hover:border-pink-500 duration-300">
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>

            <li className="mx-3 md:mx-7 text-xl md:inline-block border-b-2 border-transparent hover:border-pink-500 duration-300">
              <Link to="/experience" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li className="mx-3 md:mx-7 text-xl md:inline-block border-b-2 border-transparent hover:border-pink-500 duration-300">
              <Link to="/projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleToggler}
          className="md:hidden cursor-pointer border-none z-20"
        >
          {toggler ? (
            <IoMdClose
              onClick={closeMenu}
              className="stroke-pink-500 h-8 w-8"
            />
          ) : (
            <IoMdMenu className="stroke-pink-500 h-8 w-8" />
          )}
        </button>
      </header>
    </div>
  );
}

export default Header;
