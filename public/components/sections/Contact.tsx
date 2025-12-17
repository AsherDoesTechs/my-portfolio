"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 mb-24 relative">
      {/* Soft background shape */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl -z-10"></div>

      <div className="bg-white border rounded-xl p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-600 mb-8">
          Have a project in mind, a question, or just want to say hi? Reach out
          through any of the platforms below. I usually reply fast.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/asher-basco-370bb828a/"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-5 flex flex-col items-center gap-2 hover:bg-black hover:text-white transition transform hover:scale-105"
          >
            <FaLinkedin size={28} />
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-sm opacity-80 text-center">
              Professional conversations & networking
            </p>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~010189161a74fdfe22"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-5 flex flex-col items-center gap-2 hover:bg-black hover:text-white transition transform hover:scale-105"
          >
            <SiUpwork size={28} />
            <h3 className="font-semibold">Upwork</h3>
            <p className="text-sm opacity-80 text-center">
              Freelance projects & collaborations
            </p>
          </a>

          <a
            href="https://github.com/AsherDoesTechs"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-5 flex flex-col items-center gap-2 hover:bg-black hover:text-white transition transform hover:scale-105"
          >
            <FaGithub size={28} />
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-sm opacity-80 text-center">
              Code, repositories & open-source work
            </p>
          </a>

          <a
            href="mailto:Asherbasco93@gmail.com"
            className="border rounded-lg p-5 flex flex-col items-center gap-2 hover:bg-black hover:text-white transition transform hover:scale-105"
          >
            <FaEnvelope size={28} />
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm opacity-80 text-center">
              For detailed ideas or direct inquiries
            </p>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          No forms. No friction. Just real conversations.
        </p>
      </div>
    </section>
  );
}
