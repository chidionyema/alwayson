"use client"
import React, { useState } from 'react';
import { FaLaptopCode, FaUserCog, FaCloud, FaServer, FaMobileAlt, FaRobot } from 'react-icons/fa';
import Layout from './components/Layout';

type Service = {
  title: string;
  icon: any; // Consider specifying a more precise type if possible
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
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 ease-in-out">
      <Icon className="text-4xl text-blue-500 dark:text-blue-300 mb-4 hover:text-blue-400 transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-center text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Layout>
      <div className="page-container p-4">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
          Empowering Your Digital Future
        </h2>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Specializing in cutting-edge solutions across software development, UI/UX design, and cloud technologies to drive your business forward.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

