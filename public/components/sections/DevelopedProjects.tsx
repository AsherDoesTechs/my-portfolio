"use client";

import Image from "next/image";
import { useState } from "react";
import {
  SiPhp,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiOpenjdk,
  SiOracle,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiAuth0,
  SiVite,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IconType } from "react-icons";

const iconMap: Record<string, { icon: IconType; color: string }> = {
  php: { icon: SiPhp, color: "#777BB4" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  html5: { icon: SiHtml5, color: "#E34F26" },
  css3: { icon: SiCss3, color: "#1572B6" },
  openjdk: { icon: SiOpenjdk, color: "#f89820" },
  oracle: { icon: SiOracle, color: "#F80000" },
  react: { icon: SiReact, color: "#61DAFB" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  tailwindcss: { icon: SiTailwindcss, color: "#06B6D4" },
  nextdotjs: { icon: SiNextdotjs, color: "#000000" },
  auth0: { icon: SiAuth0, color: "#EB5424" },
  vite: { icon: SiVite, color: "#646CFF" },
  reactnative: { icon: TbBrandReactNative, color: "#61DAFB" },
};

export default function FeaturedProjects() {
  const isPublic = true;

  const projects = [
    {
      title: "SanRoom: Schedule Management System",
      status: "On Development",
      comingSoon: true,
      description:
        "A smart, role-based schedule and room management platform for schools and organizations with automated notifications.",
      tech: "PHP • HTML • JavaScript • CSS",
      icons: ["php", "html5", "javascript", "css3"],
      link: "https://yourportfolio.com/sanroom",
      img: "/img/projects/SanRoom.png",
    },
    {
      title: "Inventory System",
      status: "On Development",
      comingSoon: false,
      description:
        "Full-stack Inventory System for real-time tracking and detailed analytics in fast-paced environments.",
      tech: "Java • JavaFX",
      icons: ["openjdk", "oracle"],
      link: "https://www.linkedin.com/posts/asher-basco_inventory-system-management-for-stocks-specially-activity-7389631159699349504-2HSt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZNFwQBI4uR7Lc5MB7W0feYqZjblliALL8",
      img: "/img/projects/Inventory.png",
    },
    {
      title: "Dev-Linked",
      status: "On Development",
      comingSoon: true,
      description:
        "A next-gen social space for developers to share logs, code snippets, and collaborate with secure authentication.",
      tech: "Next.js • TypeScript • Tailwind • Auth0",
      icons: ["nextdotjs", "typescript", "tailwindcss", "auth0"],
      link: "#",
      img: "/img/projects/Dev_Linked.png",
    },
    {
      title: "FreshFlow",
      status: "On Development",
      comingSoon: true,
      description:
        "Optimizing workflow and resource management for modern teams with real-time updates.",
      tech: "React Native • TypeScript • Tailwind",
      icons: ["reactnative", "typescript", "tailwindcss"],
      link: "#",
      img: "/img/projects/FreshFlow_UI.png",
    },
    {
      title: "Midnight Cafe",
      status: "On Development",
      comingSoon: true,
      description: [
        "Interactive booking experience",
        "Magic Link security",
        "PDF report generation",
        "Modern UI with Vite performance",
      ],
      tech: "React • Vite • TypeScript • Tailwind",
      icons: ["react", "vite", "typescript", "tailwindcss"],
      link: "midnight-cafe-nu.vercel.app",
      img: "/img/projects/CafeWebsite.png",
    },
  ];

  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-3xl font-bold mb-10 text-black">
        Developed Projects
      </h2>

      {!isPublic ? (
        <div className="w-full py-24 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center bg-gray-50/50">
          <h3 className="text-2xl font-bold text-gray-900">
            Innovation in Progress
          </h3>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const desc = project.description;
            const isArray = Array.isArray(desc);
            const isComingSoon = project.comingSoon;

            const renderDescription = () => {
              if (isArray) return desc.slice(0, 2).join(", ") + "...";
              return (desc as string).length > 100
                ? (desc as string).slice(0, 100) + "..."
                : desc;
            };

            return (
              <div
                key={index}
                className="group relative bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col min-h-[420px]"
              >
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border bg-amber-50 text-amber-700 border-amber-200">
                  {project.status}
                </div>

                {/* IMAGE */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border bg-gray-50">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      !isComingSoon && "group-hover:scale-105"
                    }`}
                  />

                  {isComingSoon && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold tracking-widest uppercase bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-lg mb-2 text-black">
                  {project.title}
                </h3>

                <div className="text-sm text-gray-600 mb-4 flex-grow">
                  {renderDescription()}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={!isComingSoon ? project.link : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (isComingSoon) e.preventDefault();
                    }}
                    className={`text-sm font-bold px-6 py-2.5 rounded-lg transition shadow-sm ${
                      isComingSoon
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "text-white bg-black hover:bg-gray-800"
                    }`}
                  >
                    {isComingSoon ? "Coming Soon" : "View Project"}
                  </a>

                  <div className="flex -space-x-2">
                    {project.icons.map((slug, i) => {
                      const iconData = iconMap[slug];
                      return (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
                        >
                          {iconData && (
                            <iconData.icon
                              className="w-5 h-5"
                              style={{ color: iconData.color }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
