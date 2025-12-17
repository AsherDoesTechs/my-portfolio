// components/ui/TestimonialModal.tsx
import React from "react";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "../../../src/app/testimonial/TestimonialCard";

type TestimonialModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TestimonialModal: React.FC<TestimonialModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4">All Testimonials</h2>

        {/* Render all testimonials */}
        <div className="grid gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TestimonialModal;
