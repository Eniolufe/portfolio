import React from "react";
import Data from "../Data";

function Work() {
  return (
    <>
      <div className="bg-[#0a192f] grid grid-cols-2 md:grid-cols-3 gap-y-5 pt-5 my-6">
        {Data.map((val, index) => {
          if (val.category === "work") {
            return (
              <>
                <div
                  key={index}
                  className="bg-[#8892b0] w-100 h-100 md:h-60 rounded-lg p-3 mx-5 shadow-lg shadow-zinc-600"
                >
                  <div>
                    <h2 className="text-2xl text-[#0a192f] font-bold">
                      {val.title}
                    </h2>
                    <span className="text-gray-300">{val.year}</span>
                  </div>
                  <p className="text-sm">{val.description}</p>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Work;
