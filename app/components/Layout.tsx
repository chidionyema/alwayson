import React, { useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`min-h-screen ${themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <nav className="bg-gray-100 dark:bg-gray-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                {/* Website Logo */}
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg dark:text-white">Always On Technologies</span>
                </a>
              </div>
              {/* Primary Navbar items */}
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/" passHref><a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a></Link>
                <Link href="/cases" passHref><a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Case Studies</a></Link>
                {/* More navigation items */}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={handleMobileMenuToggle}>
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            <div className="hidden md:block">
              <button onClick={toggleTheme} className="text-xl rounded-full p-3 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300">
                {themeMode === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <Link href="/" passHref><a className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 transition duration-300">Home</a></Link>
          <Link href="/cases" passHref><a className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 transition duration-300">Case Studies</a></Link>
          {/* More mobile navigation items */}
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
