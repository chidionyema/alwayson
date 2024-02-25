// Import necessary libraries and components
"use client";
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaLaptopCode, FaUserCog, FaCloud, FaServer, FaMobileAlt, FaRobot } from "react-icons/fa";
import Layout from './components/Layout'; // Adjust the import path as necessary

// Define the type for service information
type Service = {
  title: string;
  icon: IconType;
  description: string;
};

// Array of services offered, each with a title, icon, and description
const services: Service[] = [
  {
    title: "Software Development",
    icon: FaLaptopCode,
    description: "Custom software solutions tailored to your business needs.",
  },
  {
    title: "User Interface Design",
    icon: FaUserCog,
    description: "Intuitive and beautiful interfaces enhancing user experiences.",
  },
  {
    title: "Web and Mobile Development",
    icon: FaMobileAlt,
    description: "Responsive, feature-rich web and mobile applications.",
  },
  {
    title: "Cloud Solutions",
    icon: FaCloud,
    description: "Scalable and resilient cloud computing solutions.",
  },
  {
    title: "Infrastructure",
    icon: FaServer,
    description: "Robust infrastructure solutions supporting your services.",
  },
  {
    title: "Automation",
    icon: FaRobot,
    description: "Efficiency through automation of repetitive tasks.",
  },
];

// Component for rendering individual service cards
function ServiceCard({ title, icon, description }: Service) {
  const Icon = icon;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <Icon className="text-6xl text-blue-500 dark:text-blue-300 mb-4 hover:text-blue-600 transition-colors duration-500" />
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-900 dark:text-white hover:text-gray-600 transition-colors duration-500">{title}</h2>
      <p className="text-md md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}


// HomePage component
const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // State to manage theme
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light'); // Function to toggle theme

  return (
    <Layout>
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-[#0f2b46]'}`}>
        Empowering Your Digital Future
      </h2>
      <p className={`text-md md:text-lg lg:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-[#0f2b46]'}`}>
        Specializing in cutting-edge solutions across software development, UI/UX design, and cloud technologies to drive your business forward.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </Layout>
  
  );
};

export default HomePage;
