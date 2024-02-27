"use client"
import React from 'react';
import Layout from '../components/Layout'; // Adjust the import path as necessary

const ContactPage = () => {
  return (

      <div className="page-container">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f2b46] mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
          <p className="text-lg mb-6">
  We&rsquo;re eager to hear from you. Use the form below to send us a message, ask a question, or request a consultation. Our team will get back to you as soon as possible.
</p>

          </div>
          <form className="w-full max-w-lg mx-auto md:mx-0">
            {/* Form fields */}
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
            </div>

            <div className="mb-2 text-right">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">Send Message</button>
            </div>
          </form>
        </div>
      </div>

  );
};

export default ContactPage;
