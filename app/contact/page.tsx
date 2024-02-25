"use client";
import React, { useState } from 'react';
import Layout from '../components/Layout'; // Adjust the import path as necessary


const ContactPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            {/* Heading consistent with the Consultant Profile Page */}
            <h1 style={{ color: '#0f2b46', fontWeight: 'bold' }} className="text-3xl mb-4">Contact Us</h1>
            <p className="text-lg mb-6">
              We're eager to hear from you. Use the form below to send us a message, ask a question, or request a consultation. Our team will get back to you as soon as possible.
            </p>
          </div>
          <form className="w-full max-w-lg mx-auto md:mx-0">
            {/* Form fields */}
          {/* Name Field */}
<div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3">
    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name" style={{ color: '#0f2b46' }}>
      Name
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Jane Doe" />
  </div>
</div>

{/* Email Field */}
<div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3">
    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email" style={{ color: '#0f2b46' }}>
      Email
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="email@example.com" />
  </div>
</div>

{/* Message Field */}
<div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3">
    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="message" style={{ color: '#0f2b46' }}>
      Message
    </label>
    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Your message here..." rows="5"></textarea>
  </div>
</div>

{/* Submit Button */}
<div className="flex flex-wrap -mx-3 mb-2">
  <div className="w-full px-3 text-right">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Send Message
    </button>
  </div>
</div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 text-right">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
