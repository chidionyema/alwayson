import React, { useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

// Assuming you've imported a preferred font in your global CSS
// and added necessary utilities for smooth transitions in Tailwind configuration

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', themeMode === 'light');
  };

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`min-h-screen ${themeMode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <nav className="bg-gray-50 dark:bg-gray-800 shadow-md transition duration-500 ease-in-out">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" passHref>
              <a className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-green-500 transition duration-300">
                Always On Technologies
              </a>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" passHref>
                <a className="text-base text-gray-700 dark:text-gray-300 hover:text-green-500 transition duration-300">Home</a>
              </Link>
              <Link href="/cases" passHref>
                <a className="text-base text-gray-700 dark:text-gray-300 hover:text-green-500 transition duration-300">Case Studies</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={toggleTheme} className="outline-none">
              <span className="sr-only">Toggle theme</span>
              {themeMode === 'dark' ? <FaSun className="text-xl text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition duration-300" /> : <FaMoon className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300" />}
            </button>
            <button className="md:hidden" onClick={handleMobileMenuToggle}>
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? <FaTimes size={24} className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition duration-300" /> : <FaBars size={24} className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition duration-300" />}
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition duration-500 ease-out`}>
          <div className="container mx-auto py-2">
            <Link href="/" passHref>
              <a className="block text-lg text-gray-700 dark:text-white hover:text-green-500 transition duration-300 py-2">Home</a>
            </Link>
            <Link href="/cases" passHref>
              <a className="block text-lg text-gray-700 dark:text-white hover:text-green-500 transition duration-300 py-2">Case Studies</a>
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-10">{children}</main>
    </div>
  );
};

export default Layout;
