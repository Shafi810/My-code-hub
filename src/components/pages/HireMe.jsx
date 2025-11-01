import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const HireMe = () => {
  useEffect(() => {
    // Fiverr profile redirect
    window.location.href = "https://www.fiverr.com/s/8zW4BrE";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1D37] text-white text-center px-6">
      <Helmet>
        <title>Hire Front-End Developer | Fiverr React & Tailwind Expert</title>
        <meta
          name="description"
          content="Looking to hire a front-end developer? I'm a Fiverr freelancer skilled in React, Tailwind CSS, and JavaScript. Let's build something amazing together!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://my-code-hub.vercel.app/hire" />
        <meta
          property="og:title"
          content="Hire Front-End Developer | Fiverr React & Tailwind Expert"
        />
        <meta
          property="og:description"
          content="React & Tailwind CSS front-end developer available on Fiverr — Hire me for stunning modern web designs."
        />
        <meta property="og:url" content="https://my-code-hub.vercel.app/hire" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">
        Redirecting you to my Fiverr profile...
      </h1>
      <p className="text-gray-400">
        If it doesn't redirect automatically,{" "}
        <a
          href="https://www.fiverr.com/s/8zW4BrE"
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
