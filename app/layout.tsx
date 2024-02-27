


import NavBar from "./components/NavBar";
import Footer from "@/app/components/Footer";
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import './globals.css'

interface LayoutProps {
  children: React.ReactNode;
}

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
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    // Add other typography defaults as needed
  },
  // Include any other theme customizations here
});
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
          <NavBar />
          {children}
          <Footer />
        </main>
        </ThemeProvider>
      </body>
    </html>
  )
}  