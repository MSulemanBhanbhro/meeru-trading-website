---
id: 1
title: Create Meeru Constitution
stage: constitution
date: 2025-12-12
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Fc
command: /sp.constitution
labels: ["constitution","setup","project"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

/sp.constitution

**Project**: Meeru-72-fx – Premium Binary & Forex Trading Website

**Core Principles**
- 100% spec-driven, no deviation
- Ultra-premium, luxurious & trust-building design
- Mobile-first, buttery-smooth animations
- Simple, secure auth with instant welcome email
- Clean, scalable Next.js codebase

**Tech Stack**
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (animations)
- TypeScript
- NextAuth.js / Clerk (auth)
- Resend (welcome email – beautiful template)

**Website Name & Branding**
- Official Name: Meeru-72-fx
- Tagline: Professional Binary & Forex Trader
- Color palette: Black, Gold, Emerald/Teal accents (luxury feel)

**Required Sections**
- Header (sticky, logo: Meeru-72-fx, nav links)
- Hero (big bold headline + pro trader photo/video + CTA)
- About Meeru-72-fx (story, experience, results)
- Trading Skills / Services (Binary, Forex, Signals, Mentoring)
- Contact Form (with WhatsApp floating button)
- Footer (copyright + social icons)

**Social Icons (Footer + Floating)**
- WhatsApp • Facebook • YouTube • Instagram • Telegram (all clickable)

**Core Functionality**
- Signup → account created + branded welcome email sent instantly
- Login → dashboard access (simple protected page)
- All forms: validation, loading, toast notifications

**Key Standards**
- Luxury animations (fade-in, parallax, hover effects)
- Dark mode default (gold accents pop)
- 100% Tailwind, no custom CSS
- Lighthouse: Performance ≥92 | Accessibility ≥95
- Deploy: Vercel (custom domain ready)

**Constraints**
- MVP: NextAuth (credentials + Google)
- Email: Resend free tier (branded Meeru-72-fx template)
- No live trading/DB in v1

**Success Criteria**
- Live site looks expensive & professional
- Signup → receives "Welcome to Meeru-72-fx" email in <8s
- Zero bugs, fully responsive
- Visitor reaction: "Bhai yeh toh bohot premium lag rha hai"

## Response snapshot

Created the project constitution file for Meeru-72-fx with the following key aspects:
- Six core principles established: Spec-Driven Development, Premium Quality Design, Mobile-First Approach, Secure Authentication, Clean Architecture, and Performance Excellence
- Technical constraints defined including tech stack requirements and development standards
- Development workflow outlined with feature implementation process and quality gates
- Governance section established with constitutional authority
- Version 1.0.0 created with ratification date of 2025-12-12

## Outcome

- ✅ Impact: Created foundational constitution document that will guide all future development decisions for the Meeru-72-fx project
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles and constraints
- 🔁 Next prompts: Can proceed with creating feature specifications based on this constitution
- 🧠 Reflection: The constitution captures all essential requirements and constraints from the project brief, establishing clear guidelines for implementation

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A