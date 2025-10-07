import React from "react";
import featuresData from "./data/Featuredata";
import skills from "../assets/skills.webp";
import { SiHtmlacademy } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiReactbootstrap } from "react-icons/si";
import { SiReactivex } from "react-icons/si";
import { BiSolidMobileVibration } from "react-icons/bi";

const iconsMap = {
  html: SiHtmlacademy,
  javascript: AiOutlineJavaScript,
  tailwind: RiTailwindCssLine,
  bootstrap: SiReactbootstrap,
  react: SiReactivex,
  mobile: BiSolidMobileVibration,
};


const Skills = () => {
  return (
    <main>
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="relative mt-0 border-b border-neutral-800  min-h-[600px] overflow-hidden"
      >
        <div className="relative z-10 text-center">
          <h2
            id="skills"
            className="inline-block bg-neutral-900 text-blue-500 rounded-full 
 text-md lg:text-1xl xl:text-2xl font-medium py-1.5 px-4 leading-none"
          >
            Skills
          </h2>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mt-8 lg:mt-14 tracking-wide leading-tight">
            Complete Frontend{" "}
            <span className="font-extrabold bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
              Expertise
            </span>
          </h1>
        </div>

        {/* Features Grid */}
        <div className="relative z-10 flex flex-wrap mt-10 lg:mt-20 py-4 ">
          <div className="absolute inset-0 mb-3 ">
            <img
              src={skills}
              alt=""
              role="presentation"
              aria-hidden="true"
              loading="lazy"
              width="1200"
              height="600"
              className="w-full h-full object-cover opacity-60 rounded-xl border border-blue-400"
            />
          </div>
          {featuresData.map(({ id, icon, heading, description }) => {
            const IconComponent = iconsMap[icon];
            return (
              <div key={id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div
                  className="flex items-start p-6 rounded-xl bg-neutral-900/30 
                  backdrop-blur-md border border-blue-300 shadow-lg hover:shadow-blue-500/30 transition duration-300"
                >
                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 mr-4 bg-neutral-300 text-blue-700 
                    justify-center items-center rounded-full flex-shrink-0 text-2xl"
                  >
                    <span aria-hidden="true">
                      <IconComponent />
                    </span>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {heading}
                    </h3>
                    <p className="text-md text-neutral-400 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Skills;
