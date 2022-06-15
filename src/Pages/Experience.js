import React from "react";
import Work from "../components/Work";
import Education from "../components/Education";

function Experience() {
  return (
    <>
      <div className="bg-[#0a192f] pt-8">
        <p className="mt-6 m-6 text-4xl md:text-center font-bold inline border-b-4 border-pink-600 text-gray-300">
          Experience
        </p>
        <Work />
        <p className="m-6 text-4xl md:text-center font-bold inline border-b-4 border-pink-600 text-gray-300">
          Education
        </p>
        <Education />
      </div>
    </>
  );
}

export default Experience;
