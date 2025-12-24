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
  // SET THIS TO 'true' TO REVEAL YOUR PROJECTS
  const isPublic = false;

  const projects = [
    {
      title: "SanRoom: Schedule Management System",
      status: "On Development",
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
      description:
        "Full-stack Inventory System for real-time tracking and detailed analytics in fast-paced environments.",
      tech: "Java • JavaFX",
      icons: ["openjdk", "oracle"],
      link: "https://www.linkedin.com/posts/...",
      img: "/img/projects/Inventory.png",
    },
    {
      title: "Dev-Linked",
      status: "On Development",
      description:
        "A next-gen social space for developers to share logs, code snippets, and collaborate with secure authentication.",
      tech: "Next.js • TypeScript • Tailwind • Auth0",
      icons: ["nextdotjs", "typescript", "tailwindcss", "auth0"],
      link: "#",
      img: "/img/projects/DevLinked.png",
    },
    {
      title: "FreshFlow",
      status: "On Development",
      description:
        "Optimizing workflow and resource management for modern teams with real-time updates.",
      tech: "React Native • TypeScript • Tailwind",
      icons: ["reactnative", "typescript", "tailwindcss"],
      link: "#",
      img: "/img/projects/FreshFlow.png",
    },
    {
      title: "Midnight Cafe",
      status: "On Development",
      description: [
        "Interactive booking experience",
        "Magic Link security",
        "PDF report generation",
        "Modern UI with Vite performance",
      ],
      tech: "React • Vite • TypeScript • Tailwind",
      icons: ["react", "vite", "typescript", "tailwindcss"],
      link: "#",
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
        /* SAFE HIDE STATE */
        <div className="w-full py-24 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center bg-gray-50/50 transition-all duration-500">
          <div className="bg-white p-5 rounded-2xl shadow-sm mb-6 flex gap-3">
            <SiReact
              className="w-8 h-8 text-[#61DAFB] animate-spin-slow"
              style={{ animationDuration: "10s" }}
            />
            <SiNextdotjs className="w-8 h-8 text-black" />
            <SiTypescript className="w-8 h-8 text-[#3178C6]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center px-4">
            Innovation in Progress
          </h3>
          <p className="text-gray-500 text-center max-w-md px-6 leading-relaxed">
            I&apos;m currently building and refining several full-stack
            applications. To protect project integrity and intellectual property
            during development, detailed insights are temporarily hidden.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-5 py-2.5 rounded-full border border-blue-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Private Development Mode
          </div>
        </div>
      ) : (
        /* PUBLIC SHOW STATE */
        <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {projects.map((project, index) => {
            const desc = project.description;
            const isArray = Array.isArray(desc);
            const isLongDesc = isArray
              ? desc.length > 0
              : (desc as string).length > 100;

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
                <div
                  className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    project.status === "Production"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}
                >
                  {project.status}
                </div>

                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-bold text-lg mb-2 text-black">
                  {project.title}
                </h3>

                <div className="text-sm text-gray-600 mb-4 flex-grow">
                  {renderDescription()}{" "}
                  {isLongDesc && (
                    <button
                      onClick={() => setOpenModalIndex(index)}
                      className="text-blue-600 font-medium hover:underline cursor-pointer"
                    >
                      More info →
                    </button>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white bg-black px-6 py-2.5 rounded-lg hover:bg-gray-800 transition shadow-sm"
                  >
                    View Project
                  </a>

                  <div className="flex -space-x-2">
                    {project.icons.map((slug, i) => {
                      const iconData = iconMap[slug];
                      return (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:z-10 transition-transform hover:scale-110"
                          title={slug}
                        >
                          {iconData ? (
                            <iconData.icon
                              className="w-5 h-5"
                              style={{ color: iconData.color }}
                            />
                          ) : (
                            <span className="text-[10px] text-gray-400">
                              {slug[0]}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {openModalIndex === index && (
                  <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setOpenModalIndex(null)}
                  >
                    <div
                      className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setOpenModalIndex(null)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer text-2xl font-bold"
                      >
                        ✕
                      </button>
                      <h3 className="text-2xl font-bold mb-2 text-black">
                        {project.title}
                      </h3>

                      <div className="flex gap-4 mb-6">
                        {project.icons.map((slug, i) => {
                          const iconData = iconMap[slug];
                          return iconData ? (
                            <iconData.icon
                              key={i}
                              className="w-7 h-7 transition-transform hover:scale-110"
                              style={{ color: iconData.color }}
                              title={slug}
                            />
                          ) : null;
                        })}
                      </div>

                      <div className="text-gray-600 text-sm mb-6 leading-relaxed border-t border-gray-50 pt-4">
                        {isArray ? (
                          <ul className="list-disc pl-5 space-y-2">
                            {(desc as string[]).map((line, i) => (
                              <li key={i}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{desc as string}</p>
                        )}
                      </div>

                      <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                        <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                          {project.tech}
                        </span>
                        <a
                          href={project.link}
                          target="_blank"
                          className="bg-black text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md"
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
