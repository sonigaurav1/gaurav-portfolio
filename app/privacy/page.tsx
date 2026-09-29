import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, Lock, Eye, Database, RefreshCw, FileText } from 'lucide-react';

const siteUrl = 'https://gauravsonidev.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | Gaurav Soni - Frontend Engineer & Next.js Specialist',
  description:
    'Privacy Policy for gauravsonidev.com. Transparent information on visitor data handling, FormSubmit contact form processing, zero-cookie policy, and your privacy rights.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 28, 2026';
  const emailAddress = 'gauravsoni7763@gmail.com';

  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-indigo-400" />
            <span>Back to Portfolio</span>
          </Link>
          <span className="text-xs font-mono text-slate-400">
            gauravsonidev.com
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Badge & Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparency & Trust</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Last updated: <time dateTime="2026-09-28">{lastUpdated}</time>
          </p>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Your privacy is respected. This policy clearly explains what information is collected
            when you visit <span className="text-indigo-400 font-mono">gauravsonidev.com</span>, how it is handled, and your rights.
          </p>
        </div>

        {/* Policy Content Sections */}
        <article className="space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-indigo-400" />
              1. Information Collected
            </h2>
            <p className="mb-3">
              This portfolio is primarily a static showcase of engineering work. Personal information
              is only collected when you voluntarily submit it through the discovery contact form:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
              <li><strong className="text-white">Your Name:</strong> Used to address you in direct communication.</li>
              <li><strong className="text-white">Email Address:</strong> Used to respond to your project discovery or hiring inquiry.</li>
              <li><strong className="text-white">Project Details & Timeline:</strong> Provided by you to evaluate project scope and feasibility.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-indigo-400" />
              2. How Your Information Is Used
            </h2>
            <p className="mb-3">
              Any personal data provided is used strictly for legitimate business and professional communication:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
              <li>Replying to project inquiries, engineering contracts, and consultation requests.</li>
              <li>Scheduling project discovery calls.</li>
              <li>Sending requested technical proposals and estimates.</li>
            </ul>
            <p className="mt-3 text-slate-400 text-xs sm:text-sm">
              Your details are never sold, rented, monetized, or shared with advertisers or data brokers.
            </p>
          </section>

          {/* Section 3 */}
          <section className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
              <RefreshCw className="w-5 h-5 text-indigo-400" />
              3. Third-Party Service Providers
            </h2>
            <p className="mb-3">
              The website integrates minimal, reputable third-party services necessary for reliable operation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
              <li>
                <strong className="text-white">FormSubmit.co:</strong> Contact form submissions are processed through FormSubmit’s encrypted email forwarding service to deliver your message directly to my inbox. FormSubmit does not store your message permanently for marketing.
              </li>
              <li>
                <strong className="text-white">Cloudflare Hosting & Edge CDN:</strong> The website is hosted on Cloudflare (Cloudflare Pages / Workers global edge network). Standard server logs (e.g., anonymized IP address, user-agent) may be recorded temporarily for security, DDoS mitigation, and edge performance delivery.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-indigo-400" />
              4. Cookies & Tracking Technologies
            </h2>
            <p className="mb-3">
              This website operates with zero non-essential tracking cookies:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
              <li>No marketing, retargeting, or advertising pixels are loaded.</li>
              <li>No third-party profiling cookies are placed on your browser.</li>
              <li>Purely essential browser cache and static assets are utilized to ensure instant page load speeds.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-indigo-400" />
              5. Data Retention & Your Rights
            </h2>
            <p className="mb-3">
              Messages received are stored only in my secure email inbox for as long as active correspondence or contractual obligations require.
            </p>
            <p className="mb-3">
              You maintain full control over your personal data under applicable data protection regulations (including GDPR and CCPA):
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
              <li>You may request a copy of the communication records you have submitted.</li>
              <li>You may request immediate and complete deletion of all prior emails and contact records.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-indigo-400" />
              6. Contact & Data Access Requests
            </h2>
            <p className="mb-4">
              To exercise your privacy rights, request data removal, or ask questions regarding this policy, reach out directly:
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span className="text-slate-400">Direct Email:</span>
              <a
                href={`mailto:${emailAddress}?subject=Privacy%20Data%20Request`}
                className="text-white hover:text-indigo-400 font-medium underline underline-offset-4 transition-colors"
              >
                {emailAddress}
              </a>
            </div>
          </section>
        </article>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Gaurav Soni (gauravsonidev.com). All rights reserved.</p>
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition-colors"
          >
            ← Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
