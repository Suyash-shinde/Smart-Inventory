// "use client"; // Add this at the top of the file

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
// import { NextUIProvider } from '@nextui-org/react';
// import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider } from "./components/theme-provider";
// import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
// import { useEffect } from 'react';
// import { useTheme } from 'next-themes';

// export const metadata = {
//   title: "Smart Inventory",
//   description: "Generated by create next app",
// };


export default function RootLayout({ children }) {
  // const { theme } = useTheme();

  // useEffect(() => {
  //   document.body.className = theme; // Add a class to the body
  // }, [theme]);
  return (
    <html lang="en" suppressHydrationWarning>
      
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          <Navbar />
          {children}
          <Toaster

        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Customize default options
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          success: {
            duration: 4000,
            style: {
              background: '#28a745',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#dc3545',
            },
          },
        }}
      />
       </ThemeProvider>

        </body>
        

    </html>
  );
}
