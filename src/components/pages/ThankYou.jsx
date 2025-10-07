
import React from "react";
import { Link } from "react-router-dom";


const ThankYou = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Thank You!</h1>
      <p className="text-gray-700 mb-6">Your message has been sent successfully. I'll get back to you soon.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
