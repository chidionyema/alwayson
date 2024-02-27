
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
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
   
        {children}
        {/* Include other global components or context providers here */}
      </div>
    </ThemeProvider>
  );
}
