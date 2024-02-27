import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import NavBar from './components/NavBar'; // Adjust according to your project structure
import 'react-toastify/dist/ReactToastify.css';
import '../path/to/your/globals.css'; // Ensure this points to your global CSS file
import { Inter } from "next/font/google";

const theme = createTheme({
  // your theme config
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={inter.className}>
        <NavBar />
        {children}
        {/* Include other global components or context providers here */}
      </div>
    </ThemeProvider>
  );
}
