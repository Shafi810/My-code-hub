import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import output1 from "../assets/output1.mp4";
import poster1 from "../assets/poster1.webp";
import output2 from "../assets/output2.mp4";
import poster2 from "../assets/poster2.webp";
import { particlesGalaxy } from "./particles/particlesGalaxy";
import AnimatedDots from "./AnimatedDots";

const Herowsection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <main>
      <section className="relative overflow-hidden pt-16">
        {init && (
          <Particles
            id="tsparticles"
            options={particlesGalaxy}
            className="absolute inset-0 w-full h-full"
          />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <h1
            className="block text-3xl sm:text-6xl lg:text-7xl
         xl:text-7xl text-center text-white tracking-wide"
          >
            I design and build stunning, responsive
            <span
              className="font-extrabold bg-gradient-to-r from-blue-300 to-blue-500
         text-transparent bg-clip-text"
            >
              {" "}
              front-end
            </span>
            <span
              className="block font-extrabold bg-gradient-to-r from-blue-300 to-blue-500
         text-transparent bg-clip-text"
            >
              websites
            </span>
          </h1>

          <div className="flex justify-center items-center">
            <h2 className="sr-only">About My Services</h2>
            <p className="mt-5 text-lg text-center text-neutral-500 max-w-4xl">
              Clean, modern, and user-friendly websites tailored to your
              business needs.
              <span className=" text-neutral-500 " role="alert">
                ⚠️ I do not accept adult or inappropriate projects — I focus on
                meaningful, impactful websites.
              </span>
            </p>
          </div>

          <div className="flex justify-center items-center my-5">
            <button
              className="relative inline-flex justify-center items-center px-8 py-4 mt-6 text-lg font-semibold 
        tracking-tight text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
        rounded-xl shadow-lg hover:scale-105 hover:shadow-xl 
        transition-all duration-300 ease-out overflow-hidden"
            >
              <a
                className="relative z-10 flex items-center"
                href="/hire"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me on Fiverr
                <AnimatedDots />
              </a>
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-500 rounded-xl"></span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row mt-2 justify-center ">
            <div className="relative w-full sm:w-1/2 mx-0 sm:mx-2 my-4 rounded-lg overflow-hidden border border-cyan-100">
              <video
                autoPlay
                loop
                muted
                poster={poster1}
                preload="metadata"
                className="w-full h-full object-cover rounded-lg"
              >
                <source src={output1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Particles overlay for this video only */}
              {init && (
                <Particles
                  aria-hidden="true"
                  id="tsparticles-video1"
                  options={particlesGalaxy}
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
            <video
              autoPlay
              loop
              muted
              poster={poster2}
              preload="metadata"
              className="rounded-lg w-full sm:w-1/2 border
          border-cyan-100 mx-0 sm:mx-2 my-4"
            >
              <source src={output2} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Herowsection;
