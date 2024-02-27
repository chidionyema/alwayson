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
      <nav className="bg-gray-100 dark:bg-gray-900 shadow">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <div className="text-xl font-semibold text-gray-800 dark:text-white">
              <Link href="/">
                <a>Always On Technologies</a>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="text-xl">
                {themeMode === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
              </button>
              <div className="md:hidden">
                <button onClick={handleMobileMenuToggle}>
                  {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link href="/">
                  <a className="px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <Link href="/cases">
                  <a className="px-3 py-2 rounded-md text-sm font-medium">Case Studies</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <Link href="/">
            <a className="block px-4 py-2 text-sm">Home</a>
          </Link>
          <Link href="/cases">
            <a className="block px-4 py-2 text-sm">Case Studies</a>
          </Link>
        </div>
      </nav>
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      <footer className="bg-gray-200 dark:bg-gray-700 text-center text-sm text-gray-600 dark:text-gray-300 py-4">
        © {new Date().getFullYear()} Always On Technologies. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
