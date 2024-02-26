"use client";
import React from 'react';
import Layout from '../components/Layout';
import { Typography, Grid, Card, CardContent } from '@mui/material'; // Import Material-UI components

const ConsultantProfilePage: React.FC = () => {
  return (
    <Layout>
      <div className="page-container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h1" style={{ color: '#0f2b46' }} gutterBottom>
              Our Consultants
            </Typography>
            <Typography variant="body1" paragraph>
              Our team of consultants comprises industry-leading experts with extensive experience in driving technological innovation and transformation. Specializing in areas such as software development, cloud computing, DevOps, and agile methodologies, they are dedicated to delivering exceptional value and actionable insights to our clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Chidi Onyema
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Senior Software Engineer & Consultant
                </Typography>
                <Typography variant="body2" component="p">
                  Specializing in .NET Framework, Agile Development, DevOps, and Cloud Solutions.
                </Typography>
                <Typography variant="body2" component="p">
                  Contact: <a href="mailto:chidionyema@gmail.com">chidionyema@gmail.com</a> | Mobile: <a href="tel:+07904026978">07904 026 978</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default ConsultantProfilePage;

