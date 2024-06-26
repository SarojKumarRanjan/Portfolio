import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Saroj's Portfolio App",
  description: "Portfolio App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex text-gray-700 ">
          <span className="sticky top-0 h-screen"><Navbar/></span>
          <span className="w-[950px] pl-[200px] pt-[70px]"> {children}</span>
        </div>
      </body>
      
    </html>
  )
}
