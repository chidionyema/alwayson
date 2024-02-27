import React from 'react';
import Layout from '../components/Layout';

interface ClientItemProps {
  name: string;
  description: string;
}

// Data for clients - you can add more clients as needed
const clients = [
  {
    name: "HMCTS (Her Majesty's Courts and Tribunals Service)",
    description: "Revolutionized government services by leading a digital infrastructure overhaul. This involved deploying a CI/CD pipeline, re-architecting the platform, and orchestrating microservices using Kubernetes.",
  },
  {
    name: "Omnio",
    description: "Collaborated with Omnio as a senior full-stack engineer to enhance banking solutions through a cloud-based microservices platform. Technologies included Vue.js, C#, and .NET Core, hosted on Azure.",
  },
  {
    name: "Stepstone UK",
    description: "Contributed to platform and cloud transformation initiatives as a full-stack engineer and DevOps specialist. Utilized DotNet Core, C#, AngularJS, Docker, Kubernetes, Terraform, and Bash scripting to modernize infrastructure and streamline processes.",
  },
  {
    name: "Philip Morris International",
    description: "Led the development of a microservice cloud platform and scalable REST APIs using Microsoft technology stack. Designed and built cloud-based microservices running on Azure Kubernetes Service, enhancing scalability and automation.",
  },
  {
    name: "ASOS",
    description: "Played a key role as a senior engineer in rewriting a legacy Digital Asset Management platform to microservices. Leveraged .NET Core 2.0, Azure, ReactJS, CosmosDB, Azure Service Bus, and Docker with Kubernetes, adopting a domain-driven/CQRS approach.",
  },
  // Add more client entries here as needed
];

// Component for individual client items
const ClientItem: React.FC<ClientItemProps> = ({ name, description }) => (
  <div className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 p-6">
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</h2>
    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{description}</p>
  </div>
);

// Main page component
const ClientsPage = () => {
  return (
    <Layout>
      <div className="page-container p-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Clients</h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          We partner with leading organizations across various industries to deliver innovative solutions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <ClientItem key={index} {...client} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ClientsPage;
