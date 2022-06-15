import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex gap-5 justify-center items-center pt-5 bg-[#8892b0]">
      <div className="flex gap-8 my-3 cursor-pointer text-pink-600">
        <a href="https://www.linkedin.com/in/ayooluwa-ariwoola-9bbb32a1/">
          <FaLinkedin className="w-6 h-6  " />
        </a>
        <a href="https://github.com/Eniolufe">
          <FaGithub className="w-6 h-6 " />
        </a>
        <a href="https://web.facebook.com/adeagbo.ayooluwa">
          <FaFacebook className="w-6 h-6  " />
        </a>
      </div>
      <p className="text-[#0a192f]">&copy; 2022</p>
    </div>
  );
}

export default Footer;
