"use client";

import { useState } from "react";
import {
  HiCheckBadge,
  HiHashtag,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";

export default function Certifications() {
  const [copied, setCopied] = useState(false);

  const certifications = [
    {
      title: "Computer Systems Servicing NCII",
      tech: "Hardware • Networking • Software Installation",
      position: "TESDA Certified",
      uli: "BAM-05-014-04010-001",
      link: null,
    },
    {
      title: "Virtual AI Camp 2025",
      tech: "Leveraging Business • Machine Learning • AI For the Future",
      position: "Participant",
      link: "/img/certificates/Daffodil.png",
    },
    {
      title: "Databiz Conference 2024",
      tech: "Data Science • Business Analytics • Aritificial Intelligence",
      position: "Participant",
      link: "/img/certificates/Databiz.png", // Added link here
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div className="flex items-center justify-center gap-3 mb-10">
        <HiCheckBadge className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-black text-center">
          Certifications
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">
                {cert.title}
              </h3>
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-3">
                {cert.position}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {cert.tech.split(" • ").map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              {/* ULI Display with Copy Button */}
              {cert.uli && (
                <div className="mb-4 p-3 bg-gray-50 border border-gray-100 rounded-lg group relative">
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
                          <HiOutlineClipboardDocumentCheck className="w-3.5 h-3.5" />{" "}
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

              {/* Action Button */}
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center text-sm font-bold text-white bg-black px-4 py-2.5 rounded-lg hover:bg-gray-800 transition shadow-sm"
                >
                  View Certificate
                </a>
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
        ))}
      </div>
    </section>
  );
}
