"use client";

import Header from "../../public/components/sections/Header";
import Hero from "../../public/components/sections/Hero";
import InfoCards from "../../public/components/sections/InfoCards";
import FeaturedProjects from "../../public/components/sections/DevelopedProjects";
import Journey from "../../public/components/sections/Journey";
import TechStacks from "../../public/components/sections/TechStack";
import Certifications from "../../public/components/sections/Certifications";
import TestimonialsPreview from "../../public/components/sections/TestimonialsPreview";
import Contact from "../../public/components/sections/Contact";
import Footer from "../../public/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-black">
      {/* Soft off-white background */}
      <Hero />
      <InfoCards />
      <FeaturedProjects />
      <Journey />
      <TechStacks />
      <Certifications />
      <TestimonialsPreview />
      <Contact />
      <Footer />
    </main>
  );
}
