import React, { ReactNode } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

type Props = {
  children: ReactNode;
  toggleTheme: () => void; // Assuming you have a theme toggle function
  theme: string; // Assuming you have a theme state
};

const Layout: React.FC<Props> = ({ children, toggleTheme, theme }) => {
  return (
    <main className={`flex flex-col items-center justify-between p-8 md:p-16 lg:p-24 xl:p-32 bg-gray-100 dark:bg-gray-800 min-h-screen transition duration-500 ease-in-out`}>
      <header className="w-full flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Always On Technologies</h1>
        <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
          {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
      </header>
      <div className="max-w-4xl w-full text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Empowering Your Digital Future
        </h2>
        <p className="text-md md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
          Specializing in cutting-edge solutions across software development, UI/UX design, and cloud technologies to drive your business forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {children}
      </div>

      <div className="mt-16">
        <a
          href="/contact"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
};

export default Layout;
