"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  <Script src="/script.js" strategy="afterInteractive" />;

  return (
    <main className="px-4 py-6">
      <Script
        src="https://cdn.emailjs.com/dist/email.min.js"
        strategy="beforeInteractive"
      />
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-6">
        {/*Profile Column*/}
        <div className="relative flex flex-col items-center text-center lg:text-left">
          <Image
            src="/img/Logo.png"
            alt="Logo"
            width={96}
            height={148}
            className="absolute top-0 left-0 cursor-pointer z-50"
            onClick={() => location.reload()}
          />

          <Image
            src="/img/Asher_Basco.jpg"
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

          <div className="border border-gray-400 p-4 rounded-lg w-full max-w-sm bg-[#111]">
            <h5 className="text-white text-md font-bold mb-2">
              Why Front-End Developer?
            </h5>
            <p className="text-sm text-gray-300">
              The aspects of digital art inspire me to build a whole new world
              that only I can see. I lived to turn these masterpieces into
              reality, never thought that website and digital arts can be
              combined in a whole new level of Artistry.
            </p>
          </div>
        </div>

        {/* Right Column (Intro + Projects) */}
        <section id="home" className="min-h-screen flex flex-col">
          {/* Nav Links */}
          <nav className="mb-4 flex flex-wrap gap-2 items-center justify-between py-2 z-50">
            <div className="flex flex-wrap gap-2">
              <a
                href="#home"
                className="nav-btn active animate-rise-up animate-delay-1"
              >
                HOME
              </a>
              <a
                href="#about"
                className="nav-btn animate-rise-up animate-delay-2"
              >
                ABOUT
              </a>
              <a
                href="#techstack"
                className="nav-btn animate-rise-up animate-delay-3"
              >
                TECHSTACK
              </a>
              <a
                href="#contacts"
                className="nav-btn animate-rise-up animate-delay-4"
              >
                CONTACTS
              </a>
            </div>

            <a
              href="/Asher_Basco_M_CV.pdf"
              download
              className="relative px-4 py-2 text-green-400 font-semibold rounded-md border-2 border-green-400 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white group animate-rise-up animate-delay-5"
            >
              <span className="absolute inset-0 rounded-md border-2 border-green-400 opacity-25 group-hover:opacity-0 transition duration-300 pointer-events-none"></span>
              <i className="fas fa-download mr-1"></i> Download CV
            </a>
          </nav>

          <h1 className="text-4xl font-bold mb-2">Hi! I’m ASHER BASCO</h1>
          <p className="text-xl text-gray-300 mb-6">
            I'm a Front-end Developer Focused on building an interactive and
            functional website that suits your needs.
          </p>

          {/* Reusable project cards would go here */}
        </section>
      </div>
    </main>
  );
}
