import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center md:items-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ayooluwa Ariwoola
        </h1>
        <h2 className="text-4xl md:text-center sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <div className="flex gap-4 my-3 cursor-pointer text-pink-600">
          <a href="https://www.linkedin.com/in/ayooluwa-ariwoola-9bbb32a1/">
            <FaLinkedin className="w-10 h-10 " />
          </a>
          <a href="https://github.com/Eniolufe">
            <FaGithub className="w-10 h-10 " />
          </a>
          <a href="https://web.facebook.com/adeagbo.ayooluwa">
            <FaFacebook className="w-10 h-10 " />
          </a>
        </div>
        <div>
          <div className="flex gap-10 mt-5">
            <button
              className="text-white group border-2 px-6 py-3 my-2 rounded-full flex items-center hover:bg-pink-600 hover:border-pink-600"
              onClick={() => {
                navigate("/projects");
              }}
            >
              Explore
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
            <button
              className="text-[#0a192f] bg-pink-600 group hover:border-2 hover:border-white px-6 py-3 my-2 rounded-full flex items-center hover:text-white hover:bg-[#0a192f]"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Hire Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
