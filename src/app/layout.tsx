import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asher Basco - Personal Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: "/Black.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
