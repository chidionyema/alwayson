import React, { ReactNode } from 'react';
import Link from 'next/link'; // Import Link from next/link for navigation
import { FaMoon, FaSun } from 'react-icons/fa';

type Props = {
  children: ReactNode;
  toggleTheme?: () => void;
  theme?: 'light' | 'dark';
};

const Layout: React.FC<Props> = ({ children, toggleTheme, theme }) => {
  return (
    <main className={`flex flex-col items-center p-8 md:p-16 lg:p-24 xl:p-32 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} min-h-screen transition duration-500 ease-in-out`}>
      <header className="w-full flex justify-between items-center mb-12">
        <nav className="flex-1">
          <ul className="flex justify-center gap-4">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
            <li><Link href="/case-studies"><a>Case Studies</a></Link></li>
            <li><Link href="/clients"><a>Clients</a></Link></li>
            <li><Link href="/profile"><a>Consultants</a></Link></li>
          </ul>
        </nav>
        {/* Ensuring the logo and button are properly aligned */}
        <div style={{ flex: 3, display: 'flex', justifyContent: 'center' }}>
          <div className="logo" style={{ textAlign: 'center' }}>
            {/* Inline styles or className for logo */}
            Always On Technologies
          </div>
        </div>
        {toggleTheme && (
          <div className="flex-1 text-right">
            <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
              {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          </div>
        )}
      </header>
      {children}
    </main>
  );
};

export default Layout;
