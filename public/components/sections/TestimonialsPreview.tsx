"use client";

import { useEffect, useState } from "react";
import TestimonialCard from "../../../src/app/testimonial/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import TestimonialModal from "../ui/TestimonialModal";

const ROTATION_TIME = 5000;

export default function TestimonialsPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  /*
   * Automatically change testimonials every 5 seconds.
   */
  useEffect(() => {
    if (testimonials.length <= 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setIsChanging(true);

      // Start exit animation
      window.setTimeout(() => {
        setCurrentIndex(
          (previousIndex) => (previousIndex + 1) % testimonials.length,
        );

        setIsChanging(false);
      }, 350);
    }, ROTATION_TIME);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /*
   * Display two testimonials at a time.
   *
   * Example:
   *
   * Person 1 + Person 2
   *       ↓
   * Person 2 + Person 3
   *       ↓
   * Person 3 + Person 4
   */
  const visibleTestimonials =
    testimonials.length <= 2
      ? testimonials
      : [
          testimonials[currentIndex],
          testimonials[(currentIndex + 1) % testimonials.length],
        ];

  /*
   * Open modal.
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /*
   * Close modal.
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          type="button"
          onClick={openModal}
          className="text-sm underline hover:text-gray-600 cursor-pointer transition-colors"
        >
          View all →
        </button>
      </div>

      {/* Testimonials */}

      <div
        className={`
          grid
          md:grid-cols-2
          gap-8
          overflow-hidden
          transition-all
          duration-500
          ease-out
          ${
            isChanging
              ? "opacity-0 -translate-y-4"
              : "opacity-100 translate-y-0"
          }
        `}
      >
        {visibleTestimonials.map((item, index) => (
          <div key={`${currentIndex}-${index}`} className="testimonial-card">
            <TestimonialCard {...item} />
          </div>
        ))}
      </div>

      {/* Modal */}

      <TestimonialModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Smooth card animation */}

      <style jsx>{`
        .testimonial-card {
          animation: testimonialEnter 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes testimonialEnter {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
