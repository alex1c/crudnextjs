import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD",
  description: "CRUD application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className='container mx-auto px-4'> 
        <Navbar></Navbar>
       
        {children}
        </div>
      </body>
    </html>
  );
}
