/**
 * @license
 * Copyright (c) 2025 Asher Basco. All rights reserved.
 * Proprietary and Confidential.
 */

import Link from "next/link";
import { ShieldAlert, ArrowLeft, Mail } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12">
          <header className="border-b border-gray-100 pb-8 mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">
              Terms of Service & Licensing
            </h1>
            <p className="text-sm text-gray-400">
              Effective Date: December 24, 2025
            </p>
          </header>

          <div className="space-y-8">
            {/* Ownership Section */}
            <section>
              <h2 className="text-lg font-semibold text-black mb-3">
                1. Proprietary Rights
              </h2>
              <p className="leading-relaxed">
                All source code, UI designs, layout configurations, and original
                content on this website are the exclusive intellectual property
                of <span className="font-semibold text-black">Asher Basco</span>
                . This project is <strong>not open source</strong> unless
                explicitly stated otherwise in a specific repository.
              </p>
            </section>

            {/* Violation Section */}
            <section className="bg-red-50 border border-red-100 p-6 rounded-xl">
              <div className="flex items-center gap-2 text-red-800 mb-2">
                <ShieldAlert className="w-5 h-5" />
                <h2 className="text-lg font-bold">2. Usage Violations</h2>
              </div>
              <p className="text-sm text-red-900 leading-relaxed">
                Unauthorized cloning, "scraping," or redistribution of this
                site's logic and architecture is strictly prohibited. Any
                violation of these terms will be met with a
                <strong> DMCA Takedown Notice</strong> and potential legal
                action to protect proprietary intellectual property.
              </p>
            </section>

            {/* Licensing Section */}
            <section>
              <h2 className="text-lg font-semibold text-black mb-3">
                3. Individual Licensing
              </h2>
              <p className="leading-relaxed">
                If you are a developer interested in using specific components
                or logic found here for educational purposes, you must obtain
                written consent.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-lg font-semibold text-black mb-3">
                4. Contact & Inquiries
              </h2>
              <p className="mb-4">
                For licensing permissions or to report a violation, please
                contact:
              </p>
              <a
                href="mailto:Asherbasco93@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                Asherbasco93@gmail.com
              </a>
            </section>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-gray-400 italic">
          &copy; 2025 Asher Basco. All Rights Reserved. Legal action will be
          pursued for unauthorized use.
        </footer>
      </div>
    </main>
  );
}
