import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components'; // Assuming you're using styled-components for CSS-in-JS

type Props = {
  children: ReactNode;
  toggleTheme?: () => void;
  theme?: 'light' | 'dark';
};

// Styled components for navigation links
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

const Layout: React.FC<Props> = ({ children, toggleTheme, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className={`flex flex-col items-center p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition duration-500 ease-in-out`}>
      <header className="w-full max-w-screen-xl flex justify-between items-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-8">
        <div className="flex items-center">
          <img src="/your-logo.png" alt="Always On Technologies" className="h-10 md:h-12 lg:h-14 xl:h-16" />
          <span className="text-lg md:text-xl lg:text-2xl font-bold ml-4">Always On Technologies</span>
        </div>

        <nav className="hidden md:flex flex-grow justify-end items-center">
          <ul className="flex gap-6">
            <li><Link href="/" passHref><NavLink>Home</NavLink></Link></li>
            <li><Link href="/cases" passHref><NavLink>Case Studies</NavLink></Link></li>
            <li><Link href="/clients" passHref><NavLink>Clients</NavLink></Link></li>
            <li><Link href="/profile" passHref><NavLink>Consultants</NavLink></Link></li>
            <li><Link href="/contact" passHref><NavLink>Contact</NavLink></Link></li>
          </ul>
          {toggleTheme && (
            <button onClick={toggleTheme} className="ml-6">
              {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          )}
        </nav>

        <button onClick={handleMobileMenuToggle} className="md:hidden ml-6">
          {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </header>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center gap-4">
            <li><Link href="/" passHref><NavLink>Home</NavLink></Link></li>
            <li><Link href="/contact" passHref><NavLink>Contact</NavLink></Link></li>
            <li><Link href="/cases" passHref><NavLink>Case Studies</NavLink></Link></li>
            <li><Link href="/clients" passHref><NavLink>Clients</NavLink></Link></li>
            <li><Link href="/profile" passHref><NavLink>Consultants</NavLink></Link></li>
          </ul>
        </nav>
      )}
      {children}
    </main>
  );
};

export default Layout;
