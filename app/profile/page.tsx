"use client";
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic from '../assets/profile-pic.jpeg';

const ConsultantProfilePage: React.FC = () => {
  return (
    <Layout>
      <div className="consultant-profile px-4 py-8">
      <h1 style={{ color: '#0f2b46' }}> Our Consultants</h1>
        <section className="bio text-center">
          <Image src={profilePic} alt="Chidi Onyema" width={144} height={144} className="rounded-full mx-auto mb-6" />
          <h1 className="text-3xl font-semibold mb-2">Chidi Onyema</h1>
          <p className="text-lg mb-4">Senior Software Engineer & Consultant</p>
          <p className="text-md">Specializing in .NET Framework, Agile Development, DevOps, and Cloud Solutions.</p>
          <p className="text-md mt-4">Contact: <a href="mailto:chidionyema@gmail.com" className="text-blue-500">chidionyema@gmail.com</a> | Mobile: <a href="tel:+07904026978" className="text-blue-500">07904 026 978</a></p>
        </section>
      </div>
    </Layout>
  );
};

export default ConsultantProfilePage;
