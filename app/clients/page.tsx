"use client";
import React from 'react';
import { Typography, Grid } from '@mui/material';
import Layout from '../components/Layout';

const ClientsPage: React.FC = () => {
  return (
    <Layout>
      <div className="page-container">
        <Typography variant="h1" style={{ color: '#0f2b46', fontWeight: 'bold' }}> Our Clients</Typography>
        <Typography variant="body1" className="text-lg mb-6">
          We partner with leading organizations across various industries to deliver innovative solutions:
        </Typography>
        <Grid container spacing={3}>
          <ClientItem
            name="HMCTS (Her Majesty's Courts and Tribunals Service)"
            description="Revolutionized government services by leading a digital infrastructure overhaul. This involved deploying a CI/CD pipeline, re-architecting the platform, and orchestrating microservices using Kubernetes."
          />
          <ClientItem
            name="Omnio"
            description="Collaborated with Omnio as a senior full-stack engineer to enhance banking solutions through a cloud-based microservices platform. Technologies included Vue.js, C#, and .NET Core, hosted on Azure."
          />
          <ClientItem
            name="Stepstone UK"
            description="Contributed to platform and cloud transformation initiatives as a full-stack engineer and DevOps specialist. Utilized DotNet Core, C#, AngularJS, Docker, Kubernetes, Terraform, and Bash scripting to modernize infrastructure and streamline processes."
          />
          <ClientItem
            name="Philip Morris International"
            description="Led the development of a microservice cloud platform and scalable REST APIs using Microsoft technology stack. Designed and built cloud-based microservices running on Azure Kubernetes Service, enhancing scalability and automation."
          />
          <ClientItem
            name="ASOS"
            description="Played a key role as a senior engineer in rewriting a legacy Digital Asset Management platform to microservices. Leveraged .NET Core 2.0, Azure, ReactJS, CosmosDB, Azure Service Bus, and Docker with Kubernetes, adopting a domain-driven/CQRS approach."
          />
          <ClientItem
            name="Stepstone UK (Total Jobs Group)"
            description="Led the development of containerized microservices to import external job data from newly acquired brands. Technologies included .NET Core, Web API, ReactJS, AngularJS, Docker, Amazon SQS, Elastic Search, and Kibana, hosted on EC2 Container Service."
          />
          <ClientItem
            name="Tesco PLC"
            description="Contributed to the infrastructure/cloud department, automating provisioning of infrastructure for engineering teams. Co-architected and built core services including crawlers, algorithms for cluster resource utilization, UI dashboards, and scheduled notification service. Utilized C#, Web API, Angular.js, Topshelf Services, Citrix Xen Server API, VMware, Active Directory Services, among others."
          />
          <ClientItem
            name="Total Jobs Group"
            description="Led the integration of an off-the-shelf SAAS platform into business applications and processes. Successfully delivered a RESTful API layer and integration into various internal systems, resulting in increased client engagement and revenue."
          />
          <ClientItem
            name="BBC World Wide"
            description="Served as a senior/lead developer for BBC Worldwide's Talent contract automation system. Enhanced and supported Talent contract automation system and other internal systems/websites/CMS. Leveraged SOLID principles, Domain Driven Design, and BDD for development and testing."
          />
          <ClientItem
            name="Dunhumby"
            description="Enhanced a coupon allocation system used by major retailers and brands. Technologies included .NET, C#, MVC, NHibernate, TDD, Rhino Mocks, Castle Windsor, and Oracle 10g."
          />
          <ClientItem
            name="ASOS"
            description="Contributed as a software engineer in web, application, and database development using ASP.NET, C#, and SQL Server 2008. Developed features to support e-commerce, back-office, and line-of-business applications. Worked on logistics for implementing a new delivery service on the ASOS customer-facing website."
          />
          {/* Add more ClientItems as needed */}
        </Grid>
      </div>
    </Layout>
  );
};

const ClientItem: React.FC<{ name: string; description: string }> = ({ name, description }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <div className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 p-6">
        <Typography variant="h2" className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</Typography>
        <Typography variant="body2" className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{description}</Typography>
      </div>
    </Grid>
  );
};

export default ClientsPage;
