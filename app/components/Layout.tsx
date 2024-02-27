import React, { useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', themeMode === 'light');
  };

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`${themeMode === 'dark' ? 'dark' : ''}`}>
      <nav className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 dark:text-gray-200 text-lg">Always On Technologies</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/">
                  <a className="py-4 px-2 text-gray-500 dark:text-gray-200 hover:text-green-500 transition duration-300">Home</a>
                </Link>
                <Link href="/cases">
                  <a className="py-4 px-2 text-gray-500 dark:text-gray-200 hover:text-green-500 transition duration-300">Case Studies</a>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <button onClick={toggleTheme} className="py-2 px-2 font-medium text-gray-500 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300">
                {themeMode === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
              <button className="md:hidden px-4 py-2 font-medium text-gray-500 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300" onClick={handleMobileMenuToggle}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <Link href="/">
            <a className="block text-sm px-2 py-4 text-gray-500 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Home</a>
          </Link>
          <Link href="/cases">
            <a className="block text-sm px-2 py-4 text-gray-500 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">Case Studies</a>
          </Link>
        </div>
      </nav>
      <main className="bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      <footer className="bg-gray-200 dark:bg-gray-700 text-center text-sm text-gray-500 dark:text-gray-200 py-4">
        © {new Date().getFullYear()} Always On Technologies. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
