"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("/public/script.js");
    } 
}, []); 

return (
  <main className="px-4 py-6">
      <Script src="https://cdn.emailjs.com/dist/email.min.js"
      strategy="beforeInteractive" 
      />
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
  </main>
)