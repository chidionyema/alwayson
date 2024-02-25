import React from 'react';
import { CaseStudy } from '../interfaces/CaseStudy';
import Layout from '../components/Layout';

const CaseStudy: React.FC<CaseStudy> = ({ title, client, duration, challenge, solution, result, technologies }) => (
  <div className="case-study">
    <h3>{title}</h3>
    <p><strong>Client:</strong> {client}</p>
    <p><strong>Duration:</strong> {duration}</p>
    <p><strong>Challenge:</strong> {challenge}</p>
    <p><strong>Solution:</strong> {solution}</p>
    <p><strong>Result:</strong> {result}</p>
    <p><strong>Key Technologies:</strong> {technologies.join(', ')}</p>
  </div>
);

const ConsultantProfilePage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      title: "Government Service Infrastructure Overhaul",
      client: "HMCTS (Her Majesty's Courts and Tribunals Service)",
      duration: "June to August 2023",
      challenge: "Outdated infrastructure hindering service efficiency.",
      solution: "Deployed a CI/CD pipeline, re-architected the platform, and orchestrated microservices using Kubernetes.",
      result: "Significantly reduced operational costs and enhanced system scalability.",
      technologies: ["Terraform", "Helm", "Kubernetes", "Python", "Java", "Cloud Migration"],
    },
    // Additional case studies...
  ];

  return (
    <Layout>
    <div className="consultant-profile">
      <section className="bio">
        <h2>Chidi Onyema</h2>
        <p>Senior Software Engineer & Consultant specializing in .NET Framework, Agile Development, DevOps, and Cloud Solutions.</p>
        <p>Contact: <a href="mailto:chidionyema@gmail.com">chidionyema@gmail.com</a> | Mobile: 07904 026 978</p>
      </section>
      <section className="case-studies">
        {caseStudies.map((study, index) => (
          <CaseStudy key={index} {...study} />
        ))}
      </section>
    </div>
    </Layout>
  );
};

export default ConsultantProfilePage;
