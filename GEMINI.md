# Antigravity Global Engineering & Website Standards

## Core Mission & Proactive Audit Protocol
Whenever you work on, create, review, or run ANY web project:
1. **Automatically check the codebase** against the Essential Website Launch Requirements, Security Launch Gate, and Baseline Hygiene below.
2. **If any requirement is missing or violated**, proactively alert the user with this exact message:
   > "⚠️ **Basic Website Production Requirements Notice:**
   > Your project does not have the following essential requirements:
   > - [List of missing/failing items, e.g., Privacy policy, Terms & conditions, Sitemap and robots.txt, Form validation, Spam protection]
   > 
   > Would you like to implement these now, or create an implementation report/task list to address them later?"

---

## 1. Always-On Baseline Hygiene (`web-baseline`)
Apply these automatically while building or editing UI across any project without waiting for a prompt or generating an `AUDIT.md`. Fix silently and mention anything non-trivial in your normal reply:
1. **Remove horizontal scroll** — test at 320px width (no fixed widths overflowing viewport).
2. **Meta descriptions** — ensure every route delivers a `<meta name="description">`.
3. **Favicon** — verify at least `favicon.ico` or SVG favicon exists.
4. **Specific page titles** — unique, descriptive `<title>` on every route.
5. **Compress images** — serve modern formats (WebP/AVIF) at responsive dimensions.
6. **Clickable contact links** — email text wrapped in `<a href="mailto:...">`, phone in `<a href="tel:...">`.
7. **Zero broken links** — no dead routes or missing anchors.
8. **Mobile navigation** — drawer, hamburger, or bottom nav when desktop nav cannot fit small viewports.
9. **Remove placeholders** — no lorem ipsum, dummy data, or stray TODOs.
10. **Touch targets & mobile usability** — touch targets >= 44x44px, legible typography, proper padding.
11. **Action states** — clear inline error messages on failure, confirmation toasts/states on success.
12. **Designed empty states** — lists and data tables show clean empty states instead of blank layouts.
13. **Custom 404 page** — returns real HTTP 404 with navigation back home.

---

## 2. Launch Gate & Security Single Source of Truth (`security-audit`)
The `security-audit` skill (`/security-audit`) is the single source of truth for application security. Non-negotiable P0 launch gate:
1. **Content-Security-Policy (CSP)** — scoped, strict, verified at runtime via `curl -sI`.
2. **No production debug leaks** — stack traces, SQL errors, and framework debug pages disabled.
3. **Secure session cookies** — `Secure`, `HttpOnly`, and `SameSite` flags enforced.
4. **Restricted CORS** — explicit origin allow-list; never `*` with credentials.
5. **Brute-force lockout** — lockout or backoff on auth endpoints (`/login`, `/reset-password`, OTP).
6. **File upload hardening** — magic byte inspection, size limits, stored outside web root, regenerated filenames.
7. **Secure password hashing** — bcrypt, argon2, or scrypt with per-user salt.
8. **Security headers suite** — `Strict-Transport-Security` (production-only; never send HSTS on localhost/dev), `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, and CSP `frame-ancestors` (or `X-Frame-Options: DENY`).
9. **Dependency audit** — zero unresolved high/critical CVEs (`npm audit`).
10. **Zero secrets in bundle/git** — scan with `gitleaks` / `trufflehog`, zero un-prefixed keys committed.

---

## 3. Deep Pre-Launch Audit (`website-audit`)
When invoked via `/website-audit` or when preparing for production launch:
- Run the full 14-section verification (Security, Legal & Privacy, SEO, Metadata, CWV Performance, Accessibility, Responsiveness, Forms & Spam, Analytics, Reliability, Email, Content, E-commerce, Multilingual).
- Generate a comprehensive `AUDIT.md` at the project root with `Item | Priority | Status | Evidence | Fix`.
- Report first; do not modify code unless explicitly instructed.
- Finish chat replies with P0 and P1 failures ordered by severity, followed by the Proactive Notice.

---

## 20 Essential Website Production Requirements Checklist
Every web project built or maintained must satisfy:
1. **Privacy Policy**: `/privacy` page linked from the footer and from every form that collects personal data.
2. **Terms & Conditions**: `/terms` page for service terms, usage policies, and liability.
3. **Remove Frontend Secrets**: No un-prefixed secrets, private tokens, or sensitive API keys committed in source or bundled in client output.
4. **Enforce HTTPS (Production-Only)**: All production traffic redirected to HTTPS; zero mixed-content resources. Local development MUST use standard HTTP (`http://localhost:*`). Never enforce HTTPS redirects or set `Strict-Transport-Security` (HSTS) on localhost/development, as it corrupts local browser port caches.
5. **Cookie Consent Banner**: Required if non-essential tracking cookies or scripts are used (GDPR/ePrivacy compliance).
6. **Meta Titles & Descriptions**: Unique `<title>` (50-60 chars) and meta `<meta name="description">` (150-160 chars) on every route.
7. **Social Preview Image**: Open Graph (`og:image`, 1200x630) and Twitter Card tags.
8. **Favicon**: Complete favicon suite (`favicon.ico`, SVG/PNG, `apple-touch-icon`).
9. **Sitemap and robots.txt**: Valid, indexable `sitemap.xml` referenced inside root `robots.txt`.
10. **Image Alt Text**: Meaningful descriptive `alt` on content images; `aria-hidden="true"` or `alt=""` on decorative icons.
11. **Image Compression & Modern Formats**: AVIF/WebP formats with explicit `sizes` and `width`/`height` to eliminate layout shift (CLS).
12. **Page Load Speed Check**: 100/100 Lighthouse benchmark (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1). Below-fold lazy loading (`loading="lazy"`), hero LCP prioritized (`priority`).
13. **Color Contrast Fixes**: WCAG 2.1/2.2 AA compliant contrast (>= 4.5:1 for normal text, >= 3:1 for large UI text).
14. **Mobile Responsiveness**: Fully responsive layout from 320px to 1920px+ without horizontal scroll or clipping.
15. **Custom 404 Page**: User-friendly 404 route returning proper HTTP 404 status code with home navigation.
16. **Broken Link Fixes**: Zero broken internal or external hyperlinks or media assets.
17. **Form Validation**: Dual-layer validation (robust server-side validation + immediate accessible client-side feedback).
18. **Spam Protection**: Honeypot field, Cloudflare Turnstile, or rate limiting on form endpoints.
19. **Analytics Setup**: Privacy-conscious analytics wired without blocking critical rendering path.
20. **Single Clear CTA**: Focused primary call-to-action per page with distinct action-oriented copy.
