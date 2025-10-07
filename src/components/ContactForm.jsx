import React from "react";

const ContactForm = () => {
  return (
    <main>
    <section
      id="contact"
      className="w-full max-w-3xl mx-auto px-6 py-10 mt-10 bg-gray-900 
      border border-blue-500 rounded-2xl shadow-lg"
      aria-labelledby="contact-heading"
    >
      {/* Heading */}
      <h2
        id="contact-heading"
        className="text-2xl font-bold  mb-10 text-center"
      >
       Contact me for more guide 
       <span
            className="font-extrabold bg-gradient-to-r from-blue-300 to-blue-500
         text-transparent bg-clip-text"
          >
            {" "}
            if you are interested
          </span>
      </h2>

      {/* Form */}
      <form
        className="space-y-6"
        action="https://formspree.io/f/xjkakrre" 
        method="POST"
        aria-label="Contact form"
      >
        <div>
          <label
            name="name"
            className="block text-gray-300 mb-2 font-medium"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            autoComplete="name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 
            focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-300 mb-2 font-medium"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            autoComplete="email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 
            focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-300 mb-2 font-medium"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            autoComplete="off"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 
            focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-300 mb-2 font-medium"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 
            focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* 🔹 Redirect to ThankYou Page */}
        <input
          type="hidden"
          aria-required="true"
          name="_next"
          value="http://localhost:5173/thankyou" 
        />

        {/* Submit */}
        <button
          type="submit"
          aria-label="Send Message"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold 
          rounded-lg transition duration-300 focus:outline-none focus:ring-2 
          focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Send Message
        </button>
      </form>
    </section>
    </main>
  );
};

export default ContactForm;
