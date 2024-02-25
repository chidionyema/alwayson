import { IconType } from 'react-icons';
import React from 'react';
import { FaLaptopCode, FaUserCog, FaCloud, FaServer, FaMobileAlt, FaRobot, FaAdjust } from "react-icons/fa";
import Layout from './components/Layout';

type Service = {
  title: string;
  icon: IconType;
  description: string;
};

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

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Layout>
  );
};

function ServiceCard({ title, icon, description }: Service) {
  const Icon = icon;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
      <Icon className="text-5xl text-blue-500 dark:text-blue-300 mb-4" />
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h2>
      <p className="text-base md:text-lg lg:text-xl text-center text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default Home;
