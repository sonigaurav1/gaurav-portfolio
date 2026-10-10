"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Check,
  Copy,
  Menu,
  X,
  Layers,
  ShoppingBag,
  Maximize2,
  Send,
  Globe,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Zap,
  Terminal,
  CheckCircle2,
  Clock,
  Sparkles,
  Code2,
} from "lucide-react";
import HeroShowcase from "@/components/hero-showcase";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  liveLink: string;
  liveButtonText?: string;
  liveProof?: string;
  githubLink?: string;
  category: string;
  tags: string[];
  imageSrc: string;
  problem: string;
  solution: string;
  impact: string;
  deploymentInfo?: string;
  metrics: {
    lighthouse: number;
    lcp: string;
    cls: string;
  };
  techHighlights: string[];
}

const PROJECTS: Project[] = [
  {
    id: "nirdeep-arts",
    title: "Nirdeep Arts Cloud OS (Dual-Shop ERP & POS)",
    subtitle:
      "Dual-shop retail fabrication ERP, real-time POS & automated accounting engine",
    liveLink: "https://bizos-demo.pages.dev/",
    liveButtonText: "View Interactive Demo",
    liveProof:
      "Active internal production deployment powering 2 retail locations in Kathmandu. Interactive demo sandbox available below.",
    category: "Cloud ERP, POS & Real-Time Sync",
    tags: [
      "React 19",
      "Vite 8",
      "TypeScript",
      "Tailwind CSS v4",
      "Convex",
      "Dual Calendar (BS/AD)",
    ],
    imageSrc: "/images/bizos-pos.webp",
    problem:
      "The business was losing hours daily and leaking revenue through manual paper billing, complex flex dimension calculations (width × height sq.ft math done by hand), untracked customer credit, and lack of WhatsApp invoice delivery.",
    solution:
      "Architected a cloud-native dual-shop ERP & POS with real-time reactive sync via Convex, automated dimension math, dual Bikram Sambat (BS) / Gregorian (AD) calendar conversion, client-side vector PDF generation (@react-pdf/renderer), 1-tap WhatsApp invoice dispatch, and an integrated counter merchant QR payment modal.",
    impact:
      "Eliminated manual calculation errors, centralized customer credit collection across 2 partner fabrication locations in Kathmandu, and automated daily P&L / Excel balance audits.",
    deploymentInfo: "⚡ Deployed to Production for Nirdeep Arts (Kathmandu)",
    metrics: {
      lighthouse: 99,
      lcp: "< 910ms",
      cls: "0.00",
    },
    techHighlights: [
      "React 19, Vite 8, TypeScript, and Tailwind CSS v4 powering a sub-second, zero-latency counter checkout POS",
      "Real-time reactive data sync & cloud file storage powered by Convex across both retail fabrication locations",
      "Dual Calendar engine seamlessly bridging Bikram Sambat (BS) and Gregorian (AD) dates for local fiscal operations",
      "Client-side vector PDF generation (@react-pdf/renderer) & automated 1-tap WhatsApp invoice delivery",
      "Integrated Merchant Payment QR Modal with instant on-screen switching between shop Fonepay and bank QRs",
      "Centralized customer credit (Udharo) tracking with automated daily P&L and Excel balance audit exports",
    ],
  },
  {
    id: "digitaldukan",
    title: "Invento / DigitalDukan (Inventory Management System)",
    subtitle: "Inventory & analytics system deployed for consumer electronics & home appliances retail",
    liveLink: "https://digitaldukan.vercel.app/",
    githubLink: "https://github.com/sonigaurav1/stock-management-system",
    category: "Enterprise SaaS & Internal Tools",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "State Management",
    ],
    imageSrc: "/images/invento.webp",
    problem:
      "Managing high-ticket consumer electronics (TVs, refrigerators, washing machines), model variants, suppliers, and customer orders manually in spreadsheets created stockouts and costly inventory discrepancies.",
    solution:
      "Architected and developed a full-stack, multi-tenant inventory management system with fast real-time stock lookups, appliance model records, and supplier management.",
    impact:
      "Streamlines retail stock operations with instant inventory updates, saving hours of manual reconciliation and stock counting every week.",
    deploymentInfo: "Live for Electronics & Appliance Retail Shop",
    metrics: {
      lighthouse: 98,
      lcp: "< 800ms",
      cls: "0.00",
    },
    techHighlights: [
      "Optimistic UI state updates for immediate feedback during barcode & stock updates",
      "Strict TypeScript data models across inventory mutations and components",
      "Granular server-rendered dashboard sections to maximize initial page render speed",
      "Responsive data tables designed for rapid use on both mobile and desktop screens",
    ],
  },
  {
    id: "puremelt",
    title: "Penowa (Organic Nut Butter D2C Storefront)",
    subtitle: "High-converting D2C peanut butter storefront built for an Indian entrepreneur brand",
    liveLink: "https://puremelt.vercel.app",
    githubLink: "https://github.com/sonigaurav1/puremelt",
    category: "E-Commerce & High-Converting Web",
    tags: ["Next.js", "React", "Tailwind CSS", "Mobile First", "Performance"],
    imageSrc: "/images/penowa.webp",
    problem:
      "An Indian entrepreneur launching an organic peanut butter brand needed an appetizing, high-converting web storefront that loads instantly on mobile and eliminates checkout drop-off.",
    solution:
      "Built a custom, responsive e-commerce storefront with optimized image delivery, intuitive ingredient showcases, and a seamless slide-over cart experience designed for D2C sales.",
    impact:
      "Delivers sub-second mobile page loads with a crisp, appetizing presentation ready to scale direct-to-consumer sales.",
    deploymentInfo: "Live Storefront for Indian D2C Peanut Butter Brand",
    metrics: {
      lighthouse: 99,
      lcp: "< 900ms",
      cls: "0.00",
    },
    techHighlights: [
      "Next.js Server Components for static product page SEO and instant first loads",
      "Interactive slide-over cart drawer with client-side state for zero-friction additions",
      "Optimized image pipeline with automatic responsive sizing and priority loading",
      "Clean, accessible mobile navigation tailored for one-thumb browsing and checkout",
    ],
  },
];

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Who is Gaurav Soni?",
    answer:
      "Gaurav Soni is a frontend engineer and Next.js specialist. He builds high-converting e-commerce storefronts, internal tools, and SaaS dashboards designed to eliminate operational bottlenecks and deliver fast, memorable user experiences.",
    category: "Entity Overview",
  },
  {
    question: "What core technologies and frameworks does Gaurav Soni use?",
    answer:
      "Gaurav specializes in Next.js (App Router, Server Components, SSR/SSG), React 19, TypeScript, Tailwind CSS, REST APIs, and modern frontend state management, focusing strictly on Core Web Vitals, accessibility, and high performance.",
    category: "Technical Stack",
  },
  {
    question: "What types of web applications has Gaurav Soni built?",
    answer:
      "His key case studies include Nirdeep Arts Cloud OS (a dual-shop fabrication ERP & POS with real-time Convex sync and interactive demo sandbox at bizos-demo.pages.dev), Invento / DigitalDukan (a multi-tenant inventory management SaaS platform at digitaldukan.vercel.app), and Penowa (a conversion-optimized D2C organic nuts & peanut butter storefront at puremelt.vercel.app), along with production interfaces for international tech teams.",
    category: "Case Studies",
  },
  {
    question:
      "What is Gaurav Soni’s geographic availability and working model?",
    answer:
      "Gaurav operates as a remote frontend developer available worldwide. With proven experience collaborating remotely with a Netherlands-based technology company, he comfortably accommodates EMEA, US, and Asian business hours.",
    category: "Work & Location",
  },
  {
    question:
      "Is Gaurav Soni available for freelance contracts and project hire?",
    answer:
      "Yes, Gaurav is currently taking on select freelance clients for custom web development, frontend architecture, and performance revamps. Direct inquiries can be sent through the contact form or directly via gauravsoni7763@gmail.com.",
    category: "Hiring & Freelance",
  },
];

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedTechId, setExpandedTechId] = useState<string | null>(
    "nirdeep-arts",
  );

  // Contact Form State using formsubmit.co
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquirySubject, setInquirySubject] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("E-Commerce");
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const emailAddress = "gauravsoni7763@gmail.com";
  const whatsappUrl = "https://wa.me/9779705470563";
  const linkedinUrl = "https://www.linkedin.com/in/gaurav-web-dev/";
  const githubUrl = "https://github.com/sonigaurav1";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail || !inquiryMessage) return;

    setFormStatus("submitting");
    setFormErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/gauravsoni7763@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: inquiryName.trim() || "Prospective Client",
            email: inquiryEmail.trim(),
            projectType: inquiryType,
            subject:
              inquirySubject.trim() || `Freelance Inquiry: ${inquiryType}`,
            message: inquiryMessage.trim(),
            _subject: `[Portfolio Inquiry] ${inquiryType} from ${inquiryEmail.trim()}`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const data = await response.json();
      if (response.ok && data.success !== "false") {
        setFormStatus("success");
        setInquiryName("");
        setInquiryEmail("");
        setInquirySubject("");
        setInquiryMessage("");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err: unknown) {
      console.error("FormSubmit error:", err);
      setFormStatus("error");
      setFormErrorMessage(
        "Could not send message automatically. Please reach out directly to gauravsoni7763@gmail.com.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background ambient lighting subtle glow */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-indigo-500/10 via-slate-800/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-3xl rounded-full" />
        <div className="absolute top-[70%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-3xl rounded-full" />
      </div>

      {/* 1. TOP NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-800/70 bg-gray-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-base sm:text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors flex items-center gap-2 group"
          >
            <span>Gaurav Soni</span>
            <span className="text-xs font-mono font-normal text-slate-400 group-hover:text-indigo-300 transition-colors">
              / frontend developer
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#standards" className="hover:text-white transition-colors">
              Standards
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex h-9 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] rounded-lg transition-all shadow-sm items-center justify-center"
            >
              Discuss a Project
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-gray-800 bg-gray-950/95 backdrop-blur-xl px-4 pt-3 pb-6 flex flex-col gap-4 text-base"
            >
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 border-b border-gray-900"
              >
                Work
              </a>
              <a
                href="#standards"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 border-b border-gray-900"
              >
                Standards
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 border-b border-gray-900"
              >
                About
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 border-b border-gray-900"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 border-b border-gray-900"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors mt-2"
              >
                Discuss a Project
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        {/* 2. HERO SECTION */}
        <section className="pt-20 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              {/* Status indicator unboxed text with pulsing glow */}
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono tracking-wide px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for select freelance contracts & web builds</span>
              </div>

              {/* Honest, punchy, high-converting headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl text-balance">
                Frontend Developer & Next.js Specialist.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-sky-400 mt-2 font-normal text-3xl sm:text-4xl md:text-5xl">
                  I build high-converting storefronts & lightning-fast dashboards.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
                Specializing in Next.js, React, and Tailwind CSS. I help
                businesses and creators turn ideas into fast, responsive, and
                polished web applications that look great and load instantly.
              </p>

              {/* CTA Button & Quick Links */}
              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="h-12 px-6 text-sm sm:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-indigo-600/25 inline-flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#work"
                  className="h-12 px-6 text-sm sm:text-base font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Explore Featured Work</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* 3 Technical Authority Anchors */}
              <div className="w-full pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/70">
                  <Terminal className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="font-mono text-slate-300">
                    Next.js 15 & React 19
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/70">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="font-mono text-slate-300">
                    TypeScript & Clean Components
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/70">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-slate-300">
                    Sub-Second Web Vitals (95+)
                  </span>
                </div>
              </div>

              {/* AI-Scannable Entity Summary (Inverted Pyramid for GEO / AEO) */}
              <div className="w-full pt-8 border-t border-gray-800/60 mt-2">
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
                  <strong className="text-slate-200 font-semibold">
                    Entity Profile:{" "}
                  </strong>
                  Gaurav Soni is an independent frontend developer specializing in
                  Next.js, React, and TypeScript. Providing modern web
                  development, D2C e-commerce systems, and SaaS dashboards for
                  businesses and creators worldwide.
                </p>
              </div>
            </div>

            {/* Showcase Animation */}
            <div className="lg:col-span-5 w-full hidden lg:flex justify-center mt-12 lg:mt-20 lg:pl-6">
              <HeroShowcase />
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section
          id="work"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-gray-800/60"
        >
          <div className="mb-14 sm:mb-16">
            <span className="text-xs font-semibold text-indigo-400 tracking-wider mb-2 block">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Work & Proven Solutions
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
              Production web applications built to eliminate operational
              bottlenecks, speed up customer journeys, and deliver measurable
              results.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {PROJECTS.map((project, index) => {
              const isExpanded = expandedTechId === project.id;
              return (
                <article
                  key={project.id}
                  id={`project-${project.id}`}
                  className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/90 transition-all duration-300 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10"
                >
                  {/* Card backdrop spotlight */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                    {/* Left Column: Media Showcase & Vitals Strip */}
                    <div className="lg:col-span-6 flex flex-col space-y-4">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          setSelectedImage({
                            src: project.imageSrc,
                            title: project.title,
                          })
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedImage({
                              src: project.imageSrc,
                              title: project.title,
                            });
                          }
                        }}
                        aria-label={`Enlarge and inspect UI for ${project.title}`}
                        className="relative aspect-video sm:aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/90 group/img shadow-inner cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <Image
                          src={project.imageSrc}
                          alt={`${project.title} Interface Preview`}
                          fill
                          loading="lazy"
                          className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                          referrerPolicy="no-referrer"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 880px"
                        />

                        {/* Enlarge preview overlay badge */}
                        <span className="absolute bottom-3 right-3 h-9 px-3.5 bg-slate-950/90 group-hover/img:bg-indigo-600 text-slate-200 group-hover/img:text-white rounded-lg border border-slate-700/80 group-hover/img:border-indigo-500 backdrop-blur-md transition-all text-xs font-medium inline-flex items-center gap-2 shadow-lg shadow-black/50">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Inspect UI</span>
                        </span>
                      </div>

                      {/* Core Web Vitals Receipts Strip */}
                      <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-mono">
                        <div>
                          <span className="text-[10px] uppercase text-slate-400 block font-medium">
                            Lighthouse
                          </span>
                          <span className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-1">
                            <Zap className="w-3 h-3" />{" "}
                            {project.metrics.lighthouse}/100
                          </span>
                        </div>
                        <div className="border-x border-slate-800">
                          <span className="text-[10px] uppercase text-slate-400 block font-medium">
                            LCP Speed
                          </span>
                          <span className="text-white font-semibold text-sm">
                            {project.metrics.lcp}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-slate-400 block font-medium">
                            CLS Shift
                          </span>
                          <span className="text-white font-semibold text-sm">
                            {project.metrics.cls}
                          </span>
                        </div>
                      </div>

                      {/* Unboxed Metadata & Tags */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-slate-400 pt-1">
                        <span className="font-medium text-slate-300">
                          {project.category}
                        </span>
                        <span aria-hidden="true" className="text-slate-600">
                          ·
                        </span>
                        {project.tags.map((tag, tIdx) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {tIdx < project.tags.length - 1 && (
                              <span
                                aria-hidden="true"
                                className="text-slate-600"
                              >
                                ·
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Case Study Narrative */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                      <div>
                        {/* Title & Action Buttons */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-slate-800/80">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1.5">
                              <span className="text-xs font-mono text-indigo-400 font-semibold block">
                                Case Study 0{index + 1}
                              </span>
                              {project.deploymentInfo && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[11px] font-medium text-emerald-300">
                                  {project.deploymentInfo}
                                </span>
                              )}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                              {project.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                              {project.subtitle}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 pt-1">
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code on GitHub`}
                                className="h-10 px-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors border border-slate-700/60"
                              >
                                <Github
                                  className="w-3.5 h-3.5"
                                  aria-hidden="true"
                                />
                                <span className="hidden sm:inline">GitHub</span>
                              </a>
                            )}
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-10 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-sm shadow-indigo-600/20 whitespace-nowrap"
                            >
                              <span>{project.liveButtonText || "View Live"}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>

                        {/* Structured Narrative: Problem -> Solution -> Impact */}
                        <div className="mt-6 space-y-5 text-sm sm:text-base leading-relaxed">
                          {project.liveProof && (
                            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-indigo-500/30 text-xs text-slate-300 flex items-start gap-2.5 shadow-sm">
                              <span className="text-amber-400 font-bold shrink-0 mt-0.5">⚡</span>
                              <div>
                                <span className="font-semibold text-white">Live Proof: </span>
                                <span className="text-slate-300">"{project.liveProof}"</span>
                              </div>
                            </div>
                          )}

                          <div>
                            <h4 className="text-xs font-semibold text-rose-400 tracking-wide mb-1.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                              The Problem
                            </h4>
                            <p className="text-slate-300">{project.problem}</p>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold text-indigo-400 tracking-wide mb-1.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                              The Solution
                            </h4>
                            <p className="text-slate-300">{project.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold text-emerald-400 tracking-wide mb-1.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              The Impact
                            </h4>
                            <p className="text-slate-200 font-medium">
                              {project.impact}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Technical Decision Drawer */}
                      <div className="pt-4 border-t border-slate-800/80">
                        <button
                          onClick={() =>
                            setExpandedTechId(isExpanded ? null : project.id)
                          }
                          className="text-xs text-slate-300 hover:text-indigo-300 flex items-center justify-between w-full font-mono py-2 transition-colors group/toggle"
                          aria-expanded={isExpanded}
                        >
                          <span className="flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-indigo-400" />
                            <span>
                              Technical Decisions & Stack Architecture
                            </span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 group-hover/toggle:text-indigo-300 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <ul className="mt-3 space-y-2 text-xs text-slate-300 bg-slate-950/70 p-4 rounded-xl border border-slate-800/90 font-sans">
                            {project.techHighlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Bottom Live URL Indicator */}
                      <div className="pt-3 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="font-mono text-slate-300">
                            {project.liveLink
                              .replace("https://", "")
                              .replace(/\/$/, "")}
                          </span>
                        </div>
                        <span className="text-slate-400 font-medium hidden sm:inline">
                          {project.deploymentInfo || "Production Deployed"}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 4. HOW I WORK / DEVELOPMENT STANDARDS (Client Trust Section) */}
        <section
          id="standards"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-gray-800/60"
        >
          <div className="mb-12">
            <span className="text-xs font-semibold text-indigo-400 tracking-wider mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              Development Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How I Build Web Applications You Can Rely On
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl">
              Clean code, fast load times, and transparent communication. Here
              is what you can expect when we work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50">
                    Clean Code
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  TypeScript & Clean Structure
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I write well-typed, modular code with clear component
                  boundaries. No messy spaghetti code, making it easy for you or
                  any future developer to maintain and expand.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-emerald-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50">
                    95+ Target
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Fast Performance by Default
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Slow websites lose customers. I optimize every asset,
                  prioritize above-the-fold content, and leverage Next.js
                  caching to deliver sub-second page loads on both mobile and
                  desktop.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50">
                    Async Friendly
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Clear Communication & Delivery
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  No disappearing acts or surprises. I provide regular progress
                  updates, test demos before shipping, and keep feedback loops
                  short so we stay on schedule and on budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ABOUT SECTION */}
        <section
          id="about"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl bg-gradient-to-b from-slate-900/70 to-slate-950/90 border border-slate-800/90 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Photo & Identity Col */}
              <div className="md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative w-36 aspect-[3/4] sm:w-54 rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-xl mb-4 bg-slate-900 group">
                  <Image
                    src="/images/gaurav-portrait.webp"
                    alt="Gaurav Soni - Frontend Engineer & Next.js Specialist"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 144px, 176px"
                    referrerPolicy="no-referrer"
                  />
                  {/* <button
                    onClick={() =>
                      setSelectedImage({
                        src: "/images/gaurav-portrait.webp",
                        title:
                          "Gaurav Soni - Frontend Engineer & Next.js Specialist",
                      })
                    }
                    className="absolute bottom-2 right-2 p-1.5 bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white rounded-md border border-slate-700/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    title="View high-resolution portrait"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button> */}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Gaurav Soni
                </h3>
                <p className="text-sm text-indigo-400 font-medium mt-0.5">
                  Frontend Developer & Next.js Specialist
                </p>
                <div className="mt-3 flex items-center gap-3 text-slate-400 text-xs">
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-slate-500" />
                    Available Worldwide (Remote)
                  </span>
                </div>
              </div>

              {/* Bio & Copywriting Col */}
              <div className="md:col-span-8 flex flex-col space-y-6">
                <div>
                  <span className="text-xs font-semibold text-indigo-400 tracking-wider mb-2 block">
                    Background & Experience
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    About Me
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  I am a frontend developer specializing in the React and
                  Next.js ecosystem. Recently, I completed a remote internship
                  with a Netherlands-based tech company, where I collaborated
                  with an international team to build and optimize web
                  interfaces. Whether you need a blazing-fast landing page, a
                  custom e-commerce experience, or a complex internal dashboard,
                  I bring a mix of technical expertise and business
                  understanding to every project.
                </p>

                {/* Key Technical Competencies */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-sm">
                    <Layers className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">
                        React & Next.js Ecosystem
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-normal">
                        App Router, SSR, Server Components, TypeScript, and
                        modern state management.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-sm">
                    <ShoppingBag className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">
                        High-Converting Frontends
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-normal">
                        Frictionless checkouts, rapid mobile performance, and
                        clean UI engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. GEO / AEO FAQ SECTION (Generative Engine Optimization) */}
        {/* <section
          id="faq"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-800/60"
        >
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-semibold text-indigo-400 tracking-wider mb-2 flex items-center gap-1.5 justify-center sm:justify-start">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions (AEO & AI Search Ready)
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Questions & Direct Answers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Definitive, scannable facts regarding technical capabilities,
              engineering philosophy, and project availability.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between text-base font-semibold text-white hover:text-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-indigo-400 font-normal">
                        [{faq.category}]
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/40"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* 7. CONTACT SECTION (Powered by formsubmit.co) */}
        <footer
          id="contact"
          className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800 bg-gray-950"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Info & Availability */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-semibold text-indigo-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Available for Work
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                    Let’s build something fast and clean.
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
                    Have an idea, an upcoming web project, or an interface that
                    needs a performance revamp? Send me a note with your goals
                    and timeline, and I’ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Direct Contact & Channels
                  </div>

                  {/* Direct Contact: Email & WhatsApp */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={copyEmailToClipboard}
                      className="h-11 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-colors group cursor-pointer"
                      title="Copy email address"
                    >
                      <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="font-mono text-xs sm:text-sm">
                        {emailAddress}
                      </span>
                      {copiedEmail ? (
                        <span className="ml-1 text-emerald-400 font-semibold text-xs flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Copied!
                        </span>
                      ) : (
                        <span className="ml-1 text-slate-400 group-hover:text-white text-xs flex items-center gap-1">
                          <Copy className="w-3 h-3 text-slate-500" /> Copy
                        </span>
                      )}
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-200 hover:text-white font-medium text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-sm group"
                      title="Chat on WhatsApp"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-400 shrink-0 transition-transform group-hover:scale-110"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>WhatsApp (+977 9705470563)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0 group-hover:text-emerald-400" />
                    </a>
                  </div>

                  {/* Social Channels */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-sm">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-sm"
                    >
                      <Linkedin className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    </a>

                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-sm"
                    >
                      <Github className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>GitHub Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: In-Page Contact Form powered by formsubmit.co */}
              <div className="lg:col-span-6 bg-slate-900/50 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl relative">
                <h3 className="text-lg font-bold text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your project details below. Your message will be sent
                  directly to my inbox with no mail app needed.
                </p>

                {formStatus === "success" ? (
                  <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. I’ve received your note and
                      will review your project details and get back to you
                      within 24 hours.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setFormStatus("idle")}
                        className="px-4 py-2 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {formStatus === "error" && (
                      <div className="p-3.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-200">
                        {formErrorMessage}
                      </div>
                    )}

                    {/* Project Type Selection */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        What are you looking to build?
                      </label>
                      <div
                        role="radiogroup"
                        aria-label="Project type selection"
                        className="grid grid-cols-2 gap-2"
                      >
                        {[
                          "E-Commerce",
                          "SaaS Dashboard",
                          "Landing Page",
                          "Full Redesign",
                        ].map((type) => {
                          const isSelected = inquiryType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => setInquiryType(type)}
                              className={`py-2 px-3 rounded-lg border text-xs font-medium flex items-center justify-between transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                                isSelected
                                  ? "bg-indigo-950/70 border-indigo-500 text-white font-semibold ring-1 ring-indigo-500/50 shadow-sm"
                                  : "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                              }`}
                            >
                              <span>{type}</span>
                              {isSelected ? (
                                <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 ml-1" />
                              ) : (
                                <span className="w-3 h-3 rounded-full border border-slate-700 shrink-0 ml-1 opacity-60" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Subject or Company Name
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={inquirySubject}
                        onChange={(e) => setInquirySubject(e.target.value)}
                        placeholder="e.g. New storefront build for organic brand"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Project Details / Timeline{" "}
                        <span className="text-indigo-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        placeholder="Tell me what you're looking to build, any key features, and your target timeline..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="h-12 w-full px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20 inline-flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message Directly</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1 text-center">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>
                          Direct delivery via FormSubmit. Reply within 24 hours.
                        </span>
                      </div>
                      <span className="hidden sm:inline text-slate-600">•</span>
                      <span>
                        Subject to{" "}
                        <Link
                          href="/privacy"
                          className="text-indigo-400 hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom Copyright & Wordmark */}
            <div className="mt-20 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <p suppressHydrationWarning>
                © 2026 Gaurav Soni (gauravsonidev.com). All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#work"
                  className="hover:text-slate-200 transition-colors"
                >
                  Work
                </a>
                <a
                  href="#standards"
                  className="hover:text-slate-200 transition-colors"
                >
                  Standards
                </a>
                <a
                  href="#about"
                  className="hover:text-slate-200 transition-colors"
                >
                  About
                </a>
                <a
                  href="#faq"
                  className="hover:text-slate-200 transition-colors"
                >
                  FAQ
                </a>
                <Link
                  href="/privacy"
                  className="hover:text-slate-200 transition-colors"
                >
                  Privacy Policy
                </Link>
                <a
                  href={`mailto:${emailAddress}`}
                  className="hover:text-slate-200 transition-colors"
                >
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Lightbox Modal for UI Screenshots */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
                <h4 className="text-sm font-semibold text-white">
                  {selectedImage.title}
                </h4>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-slate-950">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  loading="lazy"
                  className="object-contain"
                  sizes="100vw"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
