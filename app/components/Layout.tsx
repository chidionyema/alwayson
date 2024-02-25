import React, { ReactNode, useState } from 'react';
import Link from 'next/link'; // Import Link from next/link for navigation
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

type Props = {
  children: ReactNode;
  toggleTheme?: () => void;
  theme?: 'light' | 'dark';
};

const Layout: React.FC<Props> = ({ children, toggleTheme, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className={`flex flex-col items-center p-8 md:p-16 lg:p-24 xl:p-32 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition duration-500 ease-in-out`}>
      <header className="w-full flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/your-logo.png" alt="Always On Technologies" className="h-8 md:h-auto" />
          <span className="ml-2 text-lg font-bold">Always On Technologies</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      
        {/* Theme toggle button */}
        {toggleTheme && (
          <div className="flex-1 text-right">
            <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
              {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          </div>
        )}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-1 md:justify-center">
          <ul className="flex gap-4">
            <li><Link href="/"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Home</a></Link></li>
            <li><Link href="/casestudies"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Case Studies</a></Link></li>
            <li><Link href="/clients"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Clients</a></Link></li>
            <li><Link href="/profile"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Consultants</a></Link></li>
            <li><Link href="/contact"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Contact</a></Link></li>
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center">
            <li><Link href="/"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Home</a></Link></li>
            <li><Link href="/contact"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Contact</a></Link></li>
            <li><Link href="/casestudies"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Case Studies</a></Link></li>
            <li><Link href="/clients"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Clients</a></Link></li>
            <li><Link href="/profile"><a className={`nav-link ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Consultants</a></Link></li>
          </ul>
        </nav>
      )}
      {children}
    </main>
  );
};

export default Layout;
