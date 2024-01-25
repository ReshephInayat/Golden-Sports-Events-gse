import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Rajdhani({ weight: "400", subsets: ["latin"] });

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
