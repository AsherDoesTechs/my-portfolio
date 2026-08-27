"use client";

import { useState } from "react";
import {
  HiCheckBadge,
  HiHashtag,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";
import { SiDatacamp, SiOpenai, SiDatabricks } from "react-icons/si";

export default function Certifications() {
  const [copied, setCopied] = useState(false);

  const certifications = [
    {
      title: "SQL Associate",
      tech: "Database Management • SQL • Data Querying",
      position: "DataCamp Certified",
      link: "/img/certificates/SQL_Certificate.pdf",
      icon: SiDatacamp,
      iconColor: "text-[#05192D]",
    },
    {
      title: "Computer Systems Servicing NCII",
      tech: "Hardware • Networking • Software Installation",
      position: "TESDA Certified",
      uli: "BAM-05-014-04010-001",
      link: null,
      imageLogo: "/Icons/Tesda.jpg",
      imageScale: "scale-175",
    },
    {
      title: "Virtual AI Camp 2025",
      tech: "Leveraging Business • Machine Learning • AI For the Future",
      position: "Participant",
      link: "/img/certificates/Daffodil.png",
      icon: SiOpenai,
      iconColor: "text-emerald-600",
    },
    {
      title: "Databiz Conference 2024",
      tech: "Data Science • Business Analytics • Artificial Intelligence",
      position: "Participant",
      link: "/img/certificates/Databiz.png",
      icon: SiDatabricks,
      iconColor: "text-orange-600",
    },
    {
      title: "PHILNITS IP",
      tech: "Information Technology • Programming • IT Fundamentals",
      position: "Passed",
      link: null,
      imageLogo: "/Icons/PhilNITS.jpg",
      pending: true,
      logoType: "wide",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <HiCheckBadge className="w-8 h-8 text-blue-600" />

        <h2 className="text-3xl font-bold text-black text-center">
          Certifications
        </h2>
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;

          return (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Title + Logo */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-black transition-colors">
                    {cert.title}
                  </h3>

                  {/* Top-Right Logo */}
                  <div
                    className={`
                      ${cert.logoType === "wide" ? "w-16 h-10" : "w-10 h-10"}
                      p-1.5 rounded-xl bg-gray-50 border border-gray-100
                      shrink-0 transition-transform duration-300
                      group-hover:scale-110 group-hover:rotate-6
                      flex items-center justify-center overflow-hidden
                    `}
                  >
                    {cert.imageLogo ? (
                      <img
                        src={cert.imageLogo}
                        alt={`${cert.title} logo`}
                        className={`
                          w-full h-full
                          ${
                            cert.logoType === "wide"
                              ? "object-contain"
                              : "object-cover"
                          }
                          transition-transform duration-300
                          ${cert.imageScale || "scale-100"}
                        `}
                      />
                    ) : IconComponent ? (
                      <IconComponent className={`w-6 h-6 ${cert.iconColor}`} />
                    ) : null}
                  </div>
                </div>

                {/* Certificate Status */}
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                    cert.pending ? "text-amber-600" : "text-blue-600"
                  }`}
                >
                  {cert.pending ? "Passed" : cert.position}
                </p>

                {/* Technologies / Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.tech.split(" • ").map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-4">
                {/* ULI Display with Copy Button */}
                {cert.uli && (
                  <div className="mb-4 p-3 bg-gray-50 border border-gray-100 rounded-lg group/uli relative">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-gray-400">
                        <HiHashtag className="w-3 h-3" />

                        <span className="text-[10px] uppercase font-bold tracking-tighter">
                          Verification ID (ULI)
                        </span>
                      </div>

                      {/* Copy Button */}
                      <button
                        onClick={() => copyToClipboard(cert.uli!)}
                        className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                        title="Copy to clipboard"
                      >
                        {copied ? (
                          <span className="text-[9px] font-bold text-blue-600 flex items-center gap-1">
                            <HiOutlineClipboardDocumentCheck className="w-3.5 h-3.5" />
                            COPIED!
                          </span>
                        ) : (
                          <HiOutlineClipboardDocument className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <code className="text-[11px] text-gray-700 font-mono break-all bg-white px-1 rounded block mt-1 border border-gray-50">
                      {cert.uli}
                    </code>
                  </div>
                )}

                {/* Certificate Action / Status */}
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center text-sm font-bold text-white bg-black px-4 py-3 rounded-xl hover:bg-gray-800 transition-all shadow-sm group-hover:shadow"
                  >
                    View Certificate
                  </a>
                ) : cert.pending ? (
                  /* PHILNITS Certificate Placeholder */
                  <div className="w-full p-4 rounded-xl bg-amber-50 border border-amber-100">
                    <div className="flex items-center justify-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-white text-xs font-bold">
                        ✓
                      </span>

                      <span className="text-xs font-semibold text-amber-700">
                        Passed — Certificate Still Not Received
                      </span>
                    </div>

                    <p className="text-[10px] text-amber-600 text-center mt-2">
                      Certificate will be added once received.
                    </p>
                  </div>
                ) : (
                  !cert.uli && (
                    <div className="pt-2 border-t border-gray-50">
                      <span className="text-xs italic text-gray-400">
                        Verification available upon request
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
