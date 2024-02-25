import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

// Define props type
type Props = {
  children: ReactNode;
};

// Styled component for navigation links
const NavLink = styled.a`
  color: #0070f3; // Primary color for unvisited links
  text-decoration: none;
  &:visited {
    color: #5e5e5e; // Distinct color for visited links
  }
  &:hover,
  &:focus {
    color: #003580; // Interaction feedback color
    text-decoration: underline; // Optional: underline on hover/focus
  }
`;

// Styled component for the logo
const Logo = styled.div<{ theme: 'light' | 'dark' }>`
  font-size: 2.5rem; /* Increase font size */
  font-weight: bold;
  color: #0f2b46; // Set the color directly here
  text-transform: uppercase;
  letter-spacing: 2px; /* Increase letter spacing */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Add text shadow */
  transition: transform 0.3s ease-in-out; /* Add transition effect */
  
  &:hover {
    transform: scale(1.1); /* Scale up on hover for an impressive effect */
  }
`;

// Layout component
// Layout component
const Layout: React.FC<Props> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Initialize theme state

  useEffect(() => {
    // Check if theme preference is stored in local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark'); // Update theme state from local storage
    }
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Update local storage with new theme
  };

  return (
    <main className={`flex flex-col items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition duration-500 ease-in-out p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32`}>
      <header className="w-full max-w-screen-xl flex justify-between items-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-8">
        <div className="flex items-center">
          <Logo theme={theme}>Always On Technologies</Logo>
        </div>

        <nav className="hidden md:flex flex-grow justify-end items-center">
          <ul className="flex gap-6">
            <li><Link href="/" passHref><NavLink>Home</NavLink></Link></li>
            <li><Link href="/cases" passHref><NavLink>Case Studies</NavLink></Link></li>
            <li><Link href="/clients" passHref><NavLink>Clients</NavLink></Link></li>
            <li><Link href="/profile" passHref><NavLink>Consultants</NavLink></Link></li>
            <li><Link href="/contact" passHref><NavLink>Contact</NavLink></Link></li>
          </ul>
          <button onClick={toggleTheme} className="ml-6">
            {theme === 'dark' ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-yellow-300" />}
          </button>
        </nav>

        <button onClick={handleMobileMenuToggle} className="md:hidden ml-6">
          {isMobileMenuOpen ? <FaTimes className="text-yellow-300" /> : <FaBars className="text-yellow-300" />}
        </button>
      </header>

      {isMobileMenuOpen && (
        <nav className="md:hidden text-center">
          <ul className="flex flex-col items-center gap-4">
            <li><Link href="/" passHref><NavLink>Home</NavLink></Link></li>
            <li><Link href="/contact" passHref><NavLink>Contact</NavLink></Link></li>
            <li><Link href="/cases" passHref><NavLink>Case Studies</NavLink></Link></li>
            <li><Link href="/clients" passHref><NavLink>Clients</NavLink></Link></li>
            <li><Link href="/profile" passHref><NavLink>Consultants</NavLink></Link></li>
          </ul>
          <button onClick={toggleTheme} className="mt-4">
            {theme === 'dark' ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-yellow-300" />}
          </button>
        </nav>
      )}
      {children}
    </main>
  );
};
