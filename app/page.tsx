// pages/index.tsx
import { IconType } from 'react-icons';
import React from 'react';
import { FaLaptopCode, FaUserCog, FaCloud, FaServer, FaMobileAlt, FaRobot } from "react-icons/fa";
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
    description: "We deliver custom software solutions tailored to your business needs.",
  },
  {
    title: "User Interface Design",
    icon: FaUserCog,
    description: "Our designers create intuitive and beautiful interfaces to enhance user experiences.",
  },
  {
    title: "Web and Mobile Development",
    icon: FaMobileAlt,
    description: "We specialize in building responsive and feature-rich web and mobile applications.",
  },
  {
    title: "Cloud Solutions",
    icon: FaCloud,
    description: "Utilize our expertise in cloud computing to build scalable and resilient solutions.",
  },
  {
    title: "Infrastructure",
    icon: FaServer,
    description: "We provide infrastructure solutions to support your applications and services.",
  },
  {
    title: "Automation",
    icon: FaRobot,
    description: "Automate repetitive tasks and streamline your business processes for efficiency.",
  },
];

const Home: React.FC = () => {
  return (
    <Layout>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </Layout>
  );
};

function ServiceCard({ title, icon, description }: Service) {
  const Icon = icon;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
      <Icon className="text-5xl text-blue-500 mb-4" />
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-base md:text-lg lg:text-xl text-center text-gray-700">{description}</p>
    </div>
  );
}

export default Home;
