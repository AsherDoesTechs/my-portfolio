"use client";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <section className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <p className="text-gray-600">
          What people I’ve worked with say about my skills, work ethic, and
          collaboration.
        </p>
      </section>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </section>
    </main>
  );
}
