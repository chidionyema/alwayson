import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

// Define props type
type Props = {
  children: ReactNode;
  toggleTheme?: () => void; // Make toggleTheme optional by adding a question mark
  theme?: 'light' | 'dark';
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
const Layout: React.FC<Props> = ({ children, toggleTheme, theme = 'light' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </nav>

        <button onClick={handleMobileMenuToggle} className="md:hidden ml-6">
          {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
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
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </nav>
      )}
      {children}
    </main>
  );
};

export default Layout;
