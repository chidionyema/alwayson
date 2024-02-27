import React, { useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
    document.documentElement.classList.toggle('dark', newThemeMode === 'dark');
  };

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`min-h-screen ${themeMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <nav className="bg-gray-100 dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-7">
            <div>
              <a href="#" className="text-lg font-semibold text-gray-700 dark:text-white">Always On Technologies</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" passHref><a className="text-gray-700 dark:text-white hover:text-green-500 transition duration-300">Home</a></Link>
              <Link href="/cases" passHref><a className="text-gray-700 dark:text-white hover:text-green-500 transition duration-300">Case Studies</a></Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="text-xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-300">
              {themeMode === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <button className="md:hidden" onClick={handleMobileMenuToggle}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="container mx-auto py-2">
            <Link href="/" passHref><a className="block text-gray-700 dark:text-white hover:text-green-500 transition duration-300 py-2">Home</a></Link>
            <Link href="/cases" passHref><a className="block text-gray-700 dark:text-white hover:text-green-500 transition duration-300 py-2">Case Studies</a></Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;
