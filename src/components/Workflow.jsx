import React from "react";
import { checklistItems } from "./data/Featuredata";
import { IoIosCheckmarkCircle } from "react-icons/io";



const Workflow = () => {
  return (
    <main>
    <section id="workflow" aria-labelledby="workflow-heading" 
     className="max-w-7xl mx-auto px-4 mt-20 sm:px-8">
      <div id="workflow-heading" className="max-w-7xl mx-auto px-4 mt-20  sm:px-8 border-b border-b-gray-400">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium py-1 px-3
         text-center mt-6"
        >
          How I Build
          <span
            className="font-medium bg-gradient-to-r from-blue-300 to-blue-500
         text-transparent bg-clip-text"
          >
            {" "}
            Modern
          </span>{" "}
          Websites
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-4 lg:border- border-blue-300  p-4 mt-4"
        >
          {checklistItems.map((item, index) => (
            <article
              key={index}
              className="bg-neutral-900 p-4 mt-4 border border-blue-600 rounded-2xl shadow-md hover:shadow-xl 
     hover:-translate-y-2 transition-all duration-300"
            >
              {/* Title + Icon Row */}
              <div className="flex items-center mb-2">
                <div
                  className="flex h-12 w-12 mr-2 bg-neutral-800 text-blue-700 
        justify-center items-center rounded-full flex-shrink-0 text-2xl"
                >
                  <span aria-hidden="true">
                   <IoIosCheckmarkCircle />
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-md text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-12 mb-4">
          <blockquote
            className="text-center text-md font-medium text-blue-500 
                bg-neutral-900 
                px-4 py-2 rounded-lg inline-block"
          >
            Your ideas, my code — together we’ll create a modern website that
            stands out in the digital world.{" "}
          </blockquote>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Workflow;
