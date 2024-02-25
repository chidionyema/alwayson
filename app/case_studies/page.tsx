// pages/case-studies.tsx
import React from 'react';
import Layout from '../components/Layout';
import { CaseStudy } from '../interfaces/CaseStudy';

// Mock data for demonstration
const caseStudiesData: CaseStudy[] = [
  {
    title: "Government Service Infrastructure Overhaul",
    client: "HMCTS",
    duration: "June to August 2023",
    challenge: "Outdated infrastructure hindering service efficiency.",
    solution: "Deployed a CI/CD pipeline, re-architected the platform, and orchestrated microservices using Kubernetes.",
    result: "Significantly reduced operational costs and enhanced system scalability.",
    technologies: ["Terraform", "Helm", "Kubernetes", "Python", "Java", "Cloud Migration"],
  },
  {
    title: "Digital Asset Management Platform Revamp",
    client: "ASOS",
    duration: "September 2018 to January 2019",
    challenge: "The challenge was to rewrite a legacy Digital Asset Management platform to microservices to improve scalability, performance, and maintainability.",
    solution: "Implemented a microservices architecture using .NET Core 2.0, Azure, ReactJS, and CosmosDb, employing a domain-driven/CQRS approach. Integrated end-to-end authentication and group-based access control using Azure AD with JWT and OAuth 2.0.",
    result: "Successfully transitioned the platform to a scalable, efficient microservices architecture, enhancing the overall performance and enabling faster feature development and deployment.",
    technologies: [".NET Core 2.0", "Azure", "ReactJS", "CosmosDb", "Azure Service Bus", "Docker", "Kubernetes"],
  },
  {
    title: "Microservices for Job Data Integration",
    client: "Stepstone UK",
    duration: "April 2016 to August 2018",
    challenge: "Needed to architect and build containerized microservices for importing external job data from newly acquired brands.",
    solution: "Co-architected the solution using .NET Core, Web API, and AngularJS, and introduced Docker for containerization. Implemented Amazon SQS for message queuing and Elastic Search for data indexing.",
    result: "The solution streamlined the job data integration process, significantly improving the SEO rankings and visibility of Total Jobs Group's brands.",
    technologies: [".NET Core", "Web API", "React Js", "AngularJs", "Docker", "Amazon SQS", "Elastic Search", "Kibana", "Exception-less"],
  },
  {
    title: "Private Cloud Platform Development",
    client: "Tesco PLC",
    duration: "April 2015 to April 2016",
    challenge: "Tasked with building an IAAS/private cloud platform to automate provisioning of infrastructure for engineering teams.",
    solution: "Developed core services including a crawler to scrape cluster and VM data, algorithms for efficient cluster resource utilization, and a UI dashboard for VM management.",
    result: "Reduced infrastructure provisioning times from weeks to minutes, significantly enhancing the productivity of engineering teams.",
    technologies: ["C#", "Web API", "Angular.js", "Topshelf Services", "Citrix Xen Server API", "VMware", "vSphere", "Active Directory Services"],
  },
  {
    title: "E-Commerce Platform Enhancement",
    client: "ASOS",
    duration: "June 2011 to December 2011",
    challenge: "Enhance the e-commerce platform to support new delivery services, improve site performance, and integrate with third-party systems.",
    solution: "Developed new features to support e-commerce, back office, and logistics, including integration with Collect+ and the warehouse management system. Implemented caching and performance optimization techniques.",
    result: "Improved overall site performance, reducing product catalog database network traffic by 40% and enabling new delivery services that enhanced customer satisfaction.",
    technologies: ["ASP.NET", "C#", "SQL Server 2008", "JavaScript", "HTML", "CSS"],
  },
  
];

const CaseStudiesPage: React.FC = () => {
    return (
        <Layout>
    <div className="page-container">
      <h1>Case Studies</h1>
      {caseStudiesData.map((study, index) => (
        <div key={index} className="case-study">
          <h3>{study.title}</h3>
          {/* The rest of the case study details */}
        </div>
      ))}
    </div>
   </Layout>
  );
};

export default CaseStudiesPage;
