import React, { ReactNode } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

type Props = {
  children: ReactNode;
  toggleTheme?: () => void;
  theme?: 'light' | 'dark';
};

const Layout: React.FC<Props> = ({ children, toggleTheme, theme }) => {
  // Inline style for the logo text
  const logoStyle = {
    background: 'linear-gradient(45deg, #007BFF, #4A4A4A)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '100%',
    fontSize: '2em',
    fontWeight: 'bold',
  };

  return (
    <main className={`flex flex-col items-center p-8 md:p-16 lg:p-24 xl:p-32 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} min-h-screen transition duration-500 ease-in-out`}>
      <header className="w-full flex justify-between items-center mb-12">
        {/* Apply the logoStyle to the h1 element */}
        <h1 style={logoStyle}>Always On Technologies</h1>
        {toggleTheme && (
          <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300" style={{ position: 'absolute', right: '20px' }}>
            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        )}
      </header>
      {children}
    </main>
  );
};

export default Layout;
