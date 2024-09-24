import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'


export const metadata: Metadata = {
  title: "Killian",
  description: "Portfolio Web app",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


const calSans = LocalFont({
  src: "./public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>

      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
