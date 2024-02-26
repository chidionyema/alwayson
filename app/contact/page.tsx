"use client";
import React from 'react';
import Layout from '../components/Layout'; // Adjust the import path as necessary
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1 style={{ color: '#0f2b46', fontWeight: 'bold' }}>Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <p className="text-lg mb-6">
              We're eager to hear from you. Use the form below to send us a message, ask a question, or request a consultation. Our team will get back to you as soon as possible.
            </p>
          </div>
          <form className="w-full max-w-lg mx-auto md:mx-0">
            {/* Form fields */}
            {/* Name Field */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <TextField id="name" label="Name" variant="outlined" fullWidth />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <TextField id="email" label="Email" variant="outlined" fullWidth />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <TextField id="message" label="Message" multiline rows={5} variant="outlined" fullWidth />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 text-right">
                <Button variant="contained" color="primary">
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
