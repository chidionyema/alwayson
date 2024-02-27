


import NavBar from "./components/NavBar";
import Footer from "@/app/components/Footer";
import './globals.css'

interface LayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}  