import React, { ReactNode } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

type Props = {
  children: ReactNode;
  toggleTheme?: () => void;
  theme?: 'light' | 'dark';
};

const Layout: React.FC<Props> = ({ children, toggleTheme, theme }) => {
  return (
    <main className={`flex flex-col items-center p-8 md:p-16 lg:p-24 xl:p-32 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} min-h-screen transition duration-500 ease-in-out`}>
      <header className="w-full flex justify-between items-center mb-12 text-center">
        <div className="flex-1"></div> {/* This div is used to balance the header content */}
        <h1 className={`flex-1 text-2xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
          Always On Technologies
        </h1>
        {toggleTheme && (
          <button onClick={toggleTheme} className="flex-1 text-right text-gray-600 dark:text-gray-300">
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        )}
      </header>
      {children}
    </main>
  );
};

export default Layout;
