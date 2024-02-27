import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', themeMode === 'light');
  };

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`${themeMode === 'dark' ? 'dark' : ''} flex flex-col min-h-screen`}>
      <nav className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="text-xl font-semibold">
              <Link href="/">
                <a className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition duration-300">
                  Always On Technologies
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="outline-none focus:outline-none">
                {themeMode === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
              </button>
              <button className="md:hidden" onClick={handleMobileMenuToggle}>
                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="/">
                <a className="hover:text-gray-600 dark:hover:text-gray-300 transition duration-300">Home</a>
              </Link>
              <Link href="/about">
                <a className="hover:text-gray-600 dark:hover:text-gray-300 transition duration-300">About Us</a>
              </Link>
              <Link href="/services">
                <a className="hover:text-gray-600 dark:hover:text-gray-300 transition duration-300">Services</a>
              </Link>
              <Link href="/contact">
                <a className="hover:text-gray-600 dark:hover:text-gray-300 transition duration-300">Contact</a>
              </Link>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 py-2">
              <Link href="/">
                <a className="block py-2">Home</a>
              </Link>
              <Link href="/about">
                <a className="block py-2">About Us</a>
              </Link>
              <Link href="/services">
                <a className="block py-2">Services</a>
              </Link>
              <Link href="/contact">
                <a className="block py-2">Contact</a>
              </Link>
            </div>
          </div>
        )}
      </nav>
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 text-center text-sm text-gray-700 dark:text-gray-200 py-4">
        © {new Date().getFullYear()} Always On Technologies. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
