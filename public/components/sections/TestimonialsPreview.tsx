// components/sections/TestimonialsPreview.tsx
import { useState } from "react";
import Link from "next/link";
import TestimonialCard from "../../../src/app/testimonial/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import TestimonialModal from "../ui/TestimonialModal";

export default function TestimonialsPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
          <p className="text-gray-600 text-sm">
            What people say after working with me
          </p>
        </div>

        <button
          onClick={openModal}
          className="text-sm underline hover:text-gray-600 cursor-pointer"
        >
          View all → {/* Trigger modal open */}
        </button>
      </div>

      {/* Preview Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.slice(0, 2).map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>

      {/* Modal */}
      <TestimonialModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
