import React from 'react';
import Layout from '../components/Layout';

const ConsultantProfilePage: React.FC = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-full">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0f2b46] mb-4">Our Consultants</h1>
            <p className="text-lg mb-4">
              Our team of consultants comprises industry-leading experts with extensive experience in driving technological innovation and transformation. Specializing in areas such as software development, cloud computing, DevOps, and agile methodologies, they are dedicated to delivering exceptional value and actionable insights to our clients.
            </p>
          </div>
          <div className="col-span-full md:col-span-4 lg:col-span-3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Chidi Onyema</h2>
                <p className="text-sm text-gray-600 mb-1">Senior Software Engineer & Consultant</p>
                <p className="text-sm text-gray-700 mb-2">Specializing in .NET Framework, Agile Development, DevOps, and Cloud Solutions.</p>
                <p className="text-sm text-gray-700 mb-1">Contact: <a href="mailto:chidionyema@gmail.com" className="text-blue-500">chidionyema@gmail.com</a> | Mobile: <a href="tel:+07904026978" className="text-blue-500">07904 026 978</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConsultantProfilePage;
