"use client"
import React, { useState } from 'react';
import { FaLaptopCode, FaUserCog, FaCloud, FaServer, FaMobileAlt, FaRobot } from 'react-icons/fa';
import Layout from './components/Layout';

type Service = {
  title: string;
  icon: any;  // Ideally, specify a precise type for icons if possible
  description: string;
};

const services: Service[] = [
  {
    title: 'Software Development',
    icon: FaLaptopCode,
    description: 'Custom software solutions tailored to your business needs.',
  },
  {
    title: 'User Interface Design',
    icon: FaUserCog,
    description: 'Intuitive and beautiful interfaces enhancing user experiences.',
  },
  {
    title: 'Web and Mobile Development',
    icon: FaMobileAlt,
    description: 'Responsive, feature-rich web and mobile applications.',
  },
  {
    title: 'Cloud Solutions',
    icon: FaCloud,
    description: 'Scalable and resilient cloud computing solutions.',
  },
  {
    title: 'Infrastructure',
    icon: FaServer,
    description: 'Robust infrastructure solutions supporting your services.',
  },
  {
    title: 'Automation',
    icon: FaRobot,
    description: 'Efficiency through automation of repetitive tasks.',
  },
];

function ServiceCard({ title, icon: Icon, description }: Service) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <Icon className="text-5xl text-blue-500 dark:text-blue-300 mb-4 hover:text-blue-400 transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (

      <div className="py-10 lg:py-16 px-4 max-w-screen-xl mx-auto">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
          Empowering Your Digital Future
        </h2>
        <p className="text-lg lg:text-xl mb-8 text-gray-600 dark:text-gray-300">
          Specializing in cutting-edge solutions across software development, UI/UX design, and cloud technologies to drive your business forward.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
 
  );
};

export default HomePage;
