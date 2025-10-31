import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const HireMe = () => {
  useEffect(() => {
    // Fiverr profile redirect
    window.location.href = "https://www.fiverr.com/frontend_eng";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1D37] text-white text-center px-6">
      <Helmet>
        <title>Hire Front-End Developer on Fiverr | React & Tailwind Expert</title>
        <meta
          name="description"
          content="Hire a professional front-end developer on Fiverr — React, Tailwind CSS, and JavaScript expert with stunning portfolio projects."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourportfolio.vercel.app/hire" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">
        Redirecting you to my Fiverr profile...
      </h1>
      <p className="text-gray-400">
        If it doesn't redirect automatically,{" "}
        <a
          href="https://www.fiverr.com/frontend_eng"
          className="text-[#00FFF0] underline"
        >
          click here
        </a>
        .
      </p>
    </div>
  );
};

export default HireMe;
