import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import NavBar from './NavBar';
import Layout from './Layout';
import '../fontawesome'; // Adjust the import path as necessary

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // Add other typography defaults as needed
  },
});

// The HOC takes a Next.js page component as an argument
const withAppLayout = (PageComponent: React.ComponentType<any>) => {
  // This is the HOC itself, returning a functional component
  const WithAppLayout = (props: AppProps) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          {/* Add any head content you want to be included in all pages */}
          <title>Your App Title</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <div>
          <NavBar />
          <Layout>
            <PageComponent {...props} />
          </Layout>
        </div>
        <style jsx global>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </ThemeProvider>
    );
  };

  // Use a type assertion to inform TypeScript that getInitialProps exists
  if ((PageComponent as any).getInitialProps) {
    WithAppLayout.getInitialProps = (PageComponent as any).getInitialProps;
  }

  return WithAppLayout;
};

export default withAppLayout;
