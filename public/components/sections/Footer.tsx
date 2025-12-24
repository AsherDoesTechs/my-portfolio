"use client";

import Link from "next/link";
import { ShieldAlert } from "lucide-react"; // npm install lucide-react if you haven't

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t py-10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <p className="text-gray-500 text-sm">
            © {currentYear}{" "}
            <span className="font-semibold text-black">Asher Basco</span>. All
            rights reserved.
          </p>

          <Link
            href="/terms"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors underline underline-offset-4"
          >
            Terms & Licensing
          </Link>
        </div>

        {/* Proprietary Warning Section */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full text-[10px] text-red-700 uppercase tracking-tighter font-bold">
            <ShieldAlert className="w-3 h-3" />
            Proprietary Architecture - No Unauthorized Copying
          </div>

          <p className="max-w-xl text-[10px] text-gray-400 leading-relaxed">
            Legal Notice: This website’s source code, layout, and logic are
            protected under international copyright law. Unauthorized
            reproduction, cloning, or distribution will be treated as a legal
            violation.
          </p>
        </div>
      </div>
    </footer>
  );
}
