import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  toggleTheme?: () => void;
  theme?: 'light' | 'dark';
};

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

// Define the Logo styled component
const Logo = styled.div<{ theme: 'light' | 'dark' }>`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#0070f3'};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Layout: React.FC<Props> = ({ children, toggleTheme, theme = 'light' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className={`flex flex-col items-center p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition duration-500 ease-in-out`}>
      <header className="w-full max-w-screen-xl flex justify-between items-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-8">
        <div className="flex items-center">
          {/* Render the Logo component and pass the theme prop */}
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
