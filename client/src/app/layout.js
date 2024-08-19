import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HCI Project",
  description: "HCI Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
