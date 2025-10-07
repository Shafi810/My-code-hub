import React from "react";
import { pricingOptions } from "./data/Featuredata";
import { FaRegCheckCircle } from "react-icons/fa";
import AnimatedDots from "./AnimatedDots";

const Pricing = () => {
  return (
    <main>
    <section id="pricing" aria-labelledby="pricing-heading"
     className="mt-20  ">
      {/* Heading */}
      <h2 id="pricing-heading" className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-center my-8 font-medium tracking-wider">
        Affordable Pricing for
        <span
          className="bg-gradient-to-r from-blue-300 to-blue-500 
          text-transparent bg-clip-text"
        >
          {" "}Your Projects
        </span>
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {pricingOptions.map((option, index) => (
          <article
            key={index}
            className="p-10 border hover:shadow-xl hover:scale-105 transition-transform duration-300 
            border-blue-500 shadow-lg rounded-xl flex flex-col h-full"
          >
            {/* Title */}
            <h3 className="text-4xl mb-8">
              {option.title}
              {option.title === "Pro" && (
                <strong
                  className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent text-xl 
                  bg-clip-text mb-4 ml-2"
                >
                  (Most Popular)
                </strong>
              )}
            </h3>

            {/* Price */}
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">{option.price}</span>
              <span className="text-neutral-400 tracking-tight">/Plan</span>
            </p>

            {/* Features */}
            <ul className="flex-1">
              {option.features.map((features, i) => (
                <li key={i} className="mt-6 flex items-center">
                  <FaRegCheckCircle className="text-blue-500" />
                  <span className="ml-2">{features}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            
            <a
              href="#contact"
              className="inline-flex justify-center items-center text-center 
              w-full h-12 p-5 mt-10 tracking-tight text-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
              hover:opacity-90 border border-blue-100 rounded-lg transition decoration-200"
            >
              Subscribe Now <AnimatedDots/>
            </a>
          </article>
        ))}
      </div>
    </section>
    </main>
  );
};

export default Pricing;
