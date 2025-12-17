"use client";

import Image from "next/image";
import { useState } from "react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Inventory System",
      description:
        "Streamline your business with our full-stack Inventory System. Track products in real-time, manage stock levels, generate detailed analytics, and gain insights for smarter decision-making. Designed for efficiency and reliability in fast-paced environments.",
      tech: "Java • JavaFX • Scene Builder",
      link: "https://www.linkedin.com/posts/asher-basco_inventory-system-management-for-stocks-specially-activity-7389631159699349504-2HSt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZNFwQBI4uR7Lc5MB7W0feYqZjblliALL8",
      img: "/img/projects/Inventory.png",
    },
    {
      title: "Cafe Booking Website",
      description: [
        "Interactive booking experience with a secret admin Easter egg for quick redirection",
        "User-friendly 'Back to Top' navigation button for seamless browsing",
        "Mandatory login to ensure secure orders and personalized sessions",
        "Magic Link functionality for instant access without passwords",
        "Guest session support for casual visitors",
        "Special access codes for VIP users and promotions",
        "Automated email reports for each booking and order",
        "Dedicated customer accounts for streamlined order history",
        "Downloadable PDF reports for booking confirmations and details",
      ],
      tech: "React • TypeScript • Tailwind • Node.js • Express",
      link: "https://yourportfolio.com/cafe-website",
      img: "/img/projects/CafeWebsite.png",
    },
    {
      title: "SanRoom: Schedule Management System",
      description:
        "SanRoom is a smart, role-based schedule and room management platform for schools and organizations. Automate notifications, manage room assignments, monitor enrollments, and leverage moderator tools. all while ensuring secure, session-based access.",
      tech: "PHP • MySQL • JavaScript • HTML • CSS",
      link: "https://yourportfolio.com/sanroom",
      img: "/img/projects/sanroom.png",
    },
  ];

  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-3xl font-bold mb-10">Developed Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const isLongDesc =
            Array.isArray(project.description) ||
            project.description.length > 100;
          const truncatedDesc = Array.isArray(project.description)
            ? project.description.slice(0, 3).join(", ") + "…"
            : project.description.slice(0, 100) +
              (project.description.length > 100 ? "…" : "");

          return (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Title */}
              <h3 className="font-semibold mb-2">{project.title}</h3>

              {/* Project Description with inline "View Full Information" */}
              <div className="mb-4 text-sm text-gray-600">
                {isLongDesc ? (
                  <>
                    {truncatedDesc}{" "}
                    <button
                      onClick={() => setOpenModalIndex(index)}
                      className="text-blue-600 hover:underline cursor-pointer text-sm"
                    >
                      View Full Information →
                    </button>
                  </>
                ) : (
                  project.description
                )}
              </div>

              {/* Tech Stack */}
              <p className="text-xs text-gray-500 mb-4">{project.tech}</p>

              {/* Main CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-sm font-semibold text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition text-center"
              >
                View Project →
              </a>

              {/* Modal */}
              {openModalIndex === index && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-xl p-6 max-w-lg w-full relative">
                    <button
                      onClick={() => setOpenModalIndex(null)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg font-bold cursor-pointer "
                    >
                      ✕
                    </button>
                    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                    <div className="mb-4 text-sm text-gray-600">
                      {Array.isArray(project.description) ? (
                        <ul className="list-disc pl-5 space-y-1">
                          {project.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        project.description
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-4">{project.tech}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-semibold text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
