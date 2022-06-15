import React from "react";

import picture from "../assets/images/picture 3.JPG";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import firebase from "../assets/images/firebase.png";
import github from "../assets/images/github.png";
import tailwindcss from "../assets/images/tailwind.png";

function About() {
  return (
    <div className="w-full h-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl md:text-center font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div>
          <img
            src={picture}
            alt="user"
            className="bg-slate-100 rounded-full h-40 md:h-60"
          />
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p className="pl-4">
              Hi. I'm Ayooluwa, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="pl-4">
              I am a frontend engineer, passionate about developing user
              friendly and revolutionary apps that improves the lives of those
              around me. I have experience working with frontend tools and
              achieving measurable progress per time by being innovative,
              creative, up to date and relevant in my career.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0a192f] text-gray-300">
        <div className="p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="py-4 text-center bg-pink-600">
              // These are the technologies I've worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={html} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={css} alt="css icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={javascript}
                alt="javascript icon"
              />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={react} alt="react icon" />
              <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={github} alt="github icon" />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={tailwindcss}
                alt="tailwindcss icon"
              />
              <p className="my-4">TAILWINDCSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={firebase} alt="github icon" />
              <p className="my-4">FIREBASE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
