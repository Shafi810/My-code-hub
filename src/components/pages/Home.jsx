import React, { Suspense, lazy } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Lazy imports
const HeroSection = lazy(() => import("../Herowsection")); // make sure file name matches
const Workflow = lazy(() => import("../Workflow"));
const Pricing = lazy(() => import("../Pricing"));
const Skills = lazy(() => import("../Skills"));
const ContactForm = lazy(() => import("../ContactForm"));
const Issues = lazy(() => import("../Issues"));

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section outside container */}
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <div id="home">
          <HeroSection />
        </div>

        {/* Other sections inside container */}
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Skills />
          <Workflow />
          <Pricing />
          <Issues />
          <ContactForm />
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default Home;
