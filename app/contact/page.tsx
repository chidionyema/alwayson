"use client";
import React from 'react';
import Layout from '../components/Layout'; // Adjust the import path as necessary
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

const ContactPage = () => {
  const { theme } = useTheme(); // Use the useTheme hook to access the current theme
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        <h1 style={{ color: theme === 'dark' ? '#ffffff' : '#0f2b46', fontWeight: 'bold' }}>Contact Us</h1>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`block uppercase tracking-wide text-xs font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Jane Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`block uppercase tracking-wide text-xs font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="email@example.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className={`block uppercase tracking-wide text-xs font-bold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                placeholder="Your message here..."
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
