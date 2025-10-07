import React from "react";
import { frontendIssues } from "./data/Featuredata"; 

const Issues = () => {
  return (
    <main>
    <section
      aria-labelledby="frontend-issues"
      id="issues"
      className="mt-20 sm:px-6 lg:px-0 py-10 w-full lg:max-w-7xl xl:max-w-8xl
     mx-auto"
    >
      <h2
        id="frontend-issues"
        className="text-3xl sm:text-4xl font-extrabold text-center
         bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8 sm:mb-12"
      >
        🔥 Frontend Issues in 2025
      </h2>

      <div className="space-y-10 sm:space-y-12">
        {frontendIssues.map((issue) => (
          <article
            key={issue.id}
            className="relative group bg-gray-900/80 backdrop-blur-xl border border-blue-700 
            rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 transition-transform transform 
            hover:scale-[1.01] hover:border-blue-500/50"
          >
            {/* Gradient hover glow */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600
               via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl 
               transition duration-500"
            ></div>

            {/* Title & Description center aligned */}
            <div className="text-center relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-300 group-hover:text-cyan-200 transition">
                {issue.title}
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
                {issue.shortDescription}
              </p>
            </div>

            {/* Why valid in 2025 */}
            <div className="relative z-10 mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-200 text-center">
                Why valid in 2025?
              </h4>
              <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                {issue.whyValidIn2025}
              </p>
            </div>

            {/* Causes & Fixes side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
              {/* Common Causes */}
              <div className="bg-gray-800/60 rounded-xl p-4 sm:p-5 shadow-inner border border-blue-300">
                <h5 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">
                  Common Causes:
                </h5>
                <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base space-y-1">
                  {issue.commonCauses.map((cause, index) => (
                    <li key={index}>{cause}</li>
                  ))}
                </ul>
              </div>

              {/* Recommended Fixes */}
              <div className="bg-gray-800/60 rounded-xl p-4 sm:p-5 shadow-inner border border-blue-300">
                <h5 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">
                  Recommended Fixes:
                </h5>
                <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base space-y-1">
                  {issue.recommendedFixes.map((fix, index) => (
                    <li key={index}>{fix}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 relative z-10">
              {issue.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                  px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Last updated */}
            <p className="text-xs text-gray-500 mt-6 sm:mt-8 text-right italic relative z-10">
              <time dateTime={issue.lastUpdated}>
                Last updated {issue.lastUpdated}
              </time>
            </p>
          </article>
        ))}
      </div>
    </section>
    </main>
  );
};

export default Issues;
