"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

/* -------------------------------------------------------------------------- */
/*  Types & data                                                              */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  domain: string;
  href: string;
  src: string;
  alt: string;
};

type Role = "back" | "middle" | "front";
type Pose = { x: string; y: string; rotate: number; scale: number };

const DEFAULT_PROJECTS: [Project, Project, Project] = [
  {
    title: "Invento / DigitalDukan",
    domain: "digitaldukan.vercel.app",
    href: "https://digitaldukan.vercel.app/",
    src: "/images/invento.webp",
    alt: "Invento inventory dashboard preview",
  },
  {
    title: "Penowa",
    domain: "puremelt.vercel.app",
    href: "https://puremelt.vercel.app",
    src: "/images/penowa.webp",
    alt: "Penowa organic nut butter storefront preview",
  },
  {
    title: "Nirdeep Arts Cloud OS",
    domain: "nirdeep-arts.pages.dev",
    href: "https://nirdeep-arts.pages.dev/",
    src: "/images/bizos-pos.webp",
    alt: "Nirdeep Arts Cloud OS dashboard preview",
  },
];

/* -------------------------------------------------------------------------- */
/*  Poses                                                                     */
/* -------------------------------------------------------------------------- */

const POSES: Record<"desktop" | "mobile", Record<Role, { closed: Pose; open: Pose }>> = {
  desktop: {
    back: {
      closed: { x: "20%", y: "16%", rotate: -6, scale: 0.9 },
      open: { x: "0%", y: "0%", rotate: -4, scale: 1 },
    },
    middle: {
      closed: { x: "4%", y: "4%", rotate: -2, scale: 0.95 },
      open: { x: "0%", y: "0%", rotate: -1, scale: 1 },
    },
    front: {
      closed: { x: "-12%", y: "-8%", rotate: 4, scale: 0.98 },
      open: { x: "0%", y: "0%", rotate: 3, scale: 1 },
    },
  },
  mobile: {
    back: {
      closed: { x: "0%", y: "12%", rotate: 0, scale: 0.92 },
      open: { x: "0%", y: "0%", rotate: -1.5, scale: 1 },
    },
    middle: {
      closed: { x: "0%", y: "6%", rotate: 0, scale: 0.96 },
      open: { x: "0%", y: "0%", rotate: -0.5, scale: 1 },
    },
    front: {
      closed: { x: "0%", y: "0%", rotate: 0, scale: 1 },
      open: { x: "0%", y: "0%", rotate: 1.5, scale: 1 },
    },
  },
};

function poseFor(role: Role, desktop: boolean, open: boolean, zIndexOffset: number): Pose {
  const set = POSES[desktop ? "desktop" : "mobile"][role];
  if (!open) return set.closed;
  const scaleMultiplier = Math.pow(0.96, zIndexOffset);
  return { ...set.open, scale: set.open.scale * scaleMultiplier };
}

const SPRING = { type: "spring", stiffness: 90, damping: 16, mass: 0.9 } as const;
const INSTANT = { duration: 0 } as const;

/* -------------------------------------------------------------------------- */
/*  Breakpoint hook                                                           */
/* -------------------------------------------------------------------------- */

const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(DESKTOP_QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => (typeof window !== "undefined" ? window.matchMedia(DESKTOP_QUERY).matches : false),
    () => false,
  );
}

/* -------------------------------------------------------------------------- */
/*  Browser-frame card                                                        */
/* -------------------------------------------------------------------------- */

type CardProps = {
  project: Project;
  className: string;
  initialPose: Pose;
  pose: Pose;
  zIndexOffset: number;
  lift: boolean;
  priority?: boolean;
  parallaxY: MotionValue<number> | number;
  transition: typeof SPRING | typeof INSTANT;
  onActivate: () => void;
};

function BrowserCard({
  project,
  className,
  initialPose,
  pose,
  zIndexOffset,
  lift,
  priority,
  parallaxY,
  transition,
  onActivate,
}: CardProps) {
  const zIndex = 30 - zIndexOffset * 10;
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ y: parallaxY, zIndex }}
    >
      <motion.a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live site`}
        onHoverStart={onActivate}
        onFocus={onActivate}
        initial={initialPose}
        animate={pose}
        whileHover={lift ? { y: "-2.5%" } : undefined}
        transition={transition}
        className="relative block overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900 shadow-2xl shadow-black/50 ring-1 ring-white/5 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-3 py-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-slate-700" />
            <span className="h-2 w-2 rounded-full bg-slate-700" />
            <span className="h-2 w-2 rounded-full bg-slate-700" />
          </span>
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-slate-950/80 px-2.5 py-1 text-center font-mono text-[10px] text-slate-400">
            {project.domain}
          </span>
        </div>
        <div className="relative aspect-[16/10] w-full bg-slate-950">
          <Image
            src={project.src}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 430px, 90vw"
            priority={priority}
            className="object-cover object-top"
          />
        </div>
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-slate-950"
          initial={false}
          animate={{ opacity: zIndexOffset === 0 ? 0 : 0.4 }}
          transition={{ duration: 0.25 }}
        />
      </motion.a>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Showcase                                                                  */
/* -------------------------------------------------------------------------- */

type Props = {
  projects?: [Project, Project, Project];
  className?: string;
};

export default function HeroShowcase({
  projects = DEFAULT_PROJECTS,
  className = "",
}: Props) {
  const [backProject, middleProject, frontProject] = projects;

  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();

  const [openFront, setOpenFront] = useState(false);
  const [openMiddle, setOpenMiddle] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  
  const [topIdx, setTopIdx] = useState<0 | 1 | 2>(2);

  useEffect(() => {
    if (reduce) {
      const t = window.setTimeout(() => {
        setOpenFront(true);
        setOpenMiddle(true);
        setOpenBack(true);
      }, 0);
      return () => window.clearTimeout(t);
    }
    const a = window.setTimeout(() => setOpenFront(true), 250);
    const b = window.setTimeout(() => setOpenMiddle(true), 420);
    const c = window.setTimeout(() => setOpenBack(true), 590);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
      window.clearTimeout(c);
    };
  }, [reduce]);

  const { scrollY } = useScroll();
  const backY = useTransform(scrollY, [0, 500], [0, -32]);
  const middleY = useTransform(scrollY, [0, 500], [0, 0]);
  const frontY = useTransform(scrollY, [0, 500], [0, 32]);

  const transition = reduce ? INSTANT : SPRING;

  const getOffset = (idx: number) => {
    if (topIdx === idx) return 0;
    if (topIdx === 2) return idx === 1 ? 1 : 2;
    if (topIdx === 1) return idx === 2 ? 1 : 2;
    if (topIdx === 0) return idx === 1 ? 1 : 2;
    return 2;
  };

  return (
    <div
      role="group"
      aria-label="Featured projects"
      className={`relative isolate mx-auto aspect-[4/3] w-full max-w-[440px] lg:ml-auto lg:mr-0 lg:aspect-[13/9] lg:max-w-[560px] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-indigo-600/20 via-violet-500/10 to-sky-500/20 blur-3xl"
      />

      <BrowserCard
        project={backProject}
        className="left-0 top-0 hidden w-[88%] lg:block lg:w-[70%]"
        initialPose={POSES.desktop.back.closed}
        pose={poseFor("back", isDesktop, openBack, getOffset(0))}
        zIndexOffset={getOffset(0)}
        lift={openBack && !reduce}
        parallaxY={reduce ? 0 : backY}
        transition={transition}
        onActivate={() => setTopIdx(0)}
      />

      <BrowserCard
        project={middleProject}
        className="left-[15%] top-[18%] hidden w-[88%] lg:block lg:w-[70%]"
        initialPose={POSES.desktop.middle.closed}
        pose={poseFor("middle", isDesktop, openMiddle, getOffset(1))}
        zIndexOffset={getOffset(1)}
        lift={openMiddle && !reduce}
        parallaxY={reduce ? 0 : middleY}
        transition={transition}
        onActivate={() => setTopIdx(1)}
      />

      <BrowserCard
        project={frontProject}
        className="left-[0%] top-0 w-[100%] lg:left-auto lg:right-0 lg:top-auto lg:bottom-0 lg:w-[70%]"
        initialPose={POSES.mobile.front.closed}
        pose={poseFor("front", isDesktop, openFront, getOffset(2))}
        zIndexOffset={getOffset(2)}
        priority
        lift={openFront && !reduce}
        parallaxY={reduce ? 0 : frontY}
        transition={transition}
        onActivate={() => setTopIdx(2)}
      />
    </div>
  );
}
