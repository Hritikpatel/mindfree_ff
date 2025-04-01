import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MindFree - A better way to heal",
  description: "We have solution for your mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-white scroll-smooth`}>
            {children}
      </body>
    </html>
  );
}
