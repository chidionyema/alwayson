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
              <Link href="/cases">
                <a className="hover:text-gray-600 dark:hover:text-gray-300 transition duration-300">Case Studies</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
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
