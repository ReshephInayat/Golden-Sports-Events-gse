import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Rajdhani({ weight: "300", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Golden Sports Events",
  description: "Unlock the Golden Path to Victory",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="TL78tYiHZbhRsR05TYi_sBSCIGxA-NYX55QJAjlScjo" />
      <link rel="canonical" href="https://goldensportsevents.com/" />
      <link rel="preload" href="/images/image1.jpg" as="image"/>
  <link rel="preload" href="/images/image2.jpg" as="image"/>
  <link rel="preload" href="/images/image3.jpg" as="image"/>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
