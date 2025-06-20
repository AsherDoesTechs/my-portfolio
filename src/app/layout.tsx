import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Asher Basco",
  description: "© 2025 Asher Basco. All rights reserved.",
};

// Import and configure Inter font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111]`}
      >
        {children}
      </body>
    </html>
  );
}
