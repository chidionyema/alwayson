// components/Layout.tsx

import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-between p-8 md:p-16 lg:p-24 xl:p-32 bg-gray-100 min-h-screen">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
          Welcome to Always On Technologies
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
          We are specialists in software development, user interface design, web and mobile development, cloud solutions, infrastructure, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {children}
      </div>

      <div className="mt-16">
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
};

export default Layout;
