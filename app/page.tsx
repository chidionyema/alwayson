"use client";
import React, { useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { IconType } from 'react-icons';
import { FaLaptopCode, FaUserCog, FaCloud, FaServer, FaMobileAlt, FaRobot } from 'react-icons/fa';
import Layout from './components/Layout';

type Service = {
  title: string;
  icon: IconType;
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <Icon className="text-6xl text-blue-500 dark:text-blue-300 mb-4 hover:text-blue-600 transition-colors duration-500" />
      <Typography variant="h6" className="font-semibold mb-4 text-gray-900 dark:text-white hover:text-gray-600 transition-colors duration-500">{title}</Typography>
      <Typography variant="body1" className="text-center text-gray-700 dark:text-gray-300">{description}</Typography>
    </div>
  );
}

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Layout>
      <div className="page-container">
        <Typography variant="h2" className={`text-1xl md:text-1xl lg:text-1xl font-bold mb-4 ${theme === 'dark' ? 'text-gray-100' : 'text-[#0f2b46]'}`}>
          Empowering Your Digital Future
        </Typography>
        <Typography variant="body1" className="text-lg mb-6">
          Specializing in cutting-edge solutions across software development, UI/UX design, and cloud technologies to drive your business forward.
        </Typography>
      </div>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default HomePage;
