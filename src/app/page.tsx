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

      <div className="container mx-auto grid lg:grid-cols-2 gap-6">
        {/*Profile Column*/}
        <div className="relative flex flex-col items-center text-center lg:text-left">
          <Image
            src="/public/img/Logo.png" 
            alt="Logo"
            width={96}
            height={148}
            className="absolute top-0 left-0 cursor-pointer z-50"
            onClick={() => location.reload()}
            />

          <Image
            src="/public/img/Asher_Basco.jpg"
            alt="Developers_Profile"
            width={256}
            height={320}
            className="rounded-xl object-cover mb-4 shadow-lg mt-12 animate-rise-up animate-delay-1" 
          />

           <p className="text-sm text-gray-400 mb-1">
            <i className="fas fa-map-marker-alt"></i> Laurel, Batangas City
          </p>
          <p className="text-sm text-gray-400 mb-4">
            <i className="fas fa-laptop-code"></i> I'm a Tech Enthusiast.
          </p>

          </p>
        </div>
      </div>
  </main>
)