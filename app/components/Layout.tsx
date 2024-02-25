// Layout.tsx
// Import the useTheme hook instead of ThemeProvider for context consumption
import React, { useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext'; // Adjusted import to useTheme


// Define props type
type Props = {
  children: React.ReactNode;
};

// Styled component for navigation links
const NavLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  &:visited {
    color: #5e5e5e;
  }
  &:hover,
  &:focus {
    color: #003580;
    text-decoration: underline;
  }
`;

// Styled component for the logo
const Logo = styled.div<{ theme: 'light' | 'dark' }>`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0f2b46;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Layout: React.FC<Props> = ({ children }) => {
  const { theme, toggleTheme } = useTheme(); // Correctly consume the theme context

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // No need to wrap with ThemeProvider here; it should wrap the Layout component usage in _app.tsx or individual pages
  return (
    <main className={`flex flex-col items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition duration-500 ease-in-out p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32`}>
      <header className="w-full max-w-screen-xl flex justify-between items-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-8">
        <div className="flex items-center">
          {/* Pass theme as a prop to Logo */}
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
