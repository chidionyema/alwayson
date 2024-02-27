// pages/_app.tsx or a similar entry point if you're customizing
import React from 'react';
import Head from 'next/head';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { Inter } from 'next/font/google'; // Make sure you have Next.js font optimization set up
import NavBar from './components/NavBar'; // Adjust the import path as necessary
import Layout from './components/Layout'; // Adjust the import path as necessary
import '../styles/global.css'; // Global styles
import 'react-toastify/dist/ReactToastify.css'; // Toast notifications styles
// FontAwesome setup
import './fontawesome'; // Ensure you have this file set up for FontAwesome icons


const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    // Add other styles as needed
  },
});

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Your App Title</title>
        <meta name="description" content="Your App Description" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      {/* Applying the Inter font class to the body */}
      <body className={inter.className}>
        <NavBar /> {/* Global NavBar */}
        <Layout> {/* Main layout wrapping children */}
          {children}
        </Layout>
        {/* Global styles, including Roboto font setup */}
        <style jsx global>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </body>
    </ThemeProvider>
  );
}
