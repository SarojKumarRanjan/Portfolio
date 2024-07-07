import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/lib/theme-provider";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Saroj's Portfolio App",
  description: "Portfolio App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex text-gray-700">
            <div className="sticky top-0 h-screen">
              <Navbar />
            </div>
            <div className="w-full m-5 mt-10  md:w-[950px] md:pl-[200px] pt-[70px]">
              {" "}
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
