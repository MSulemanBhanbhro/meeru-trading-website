---
id: 1
title: Create Meeru Website Spec
stage: spec
date: 2025-12-12
surface: agent
model: claude-sonnet-4-5-20250929
feature: meeru-website
branch: 1-meeru-website
user: Fc
command: /sp.specify
labels: ["spec","feature","website"]
links:
  spec: specs/1-meeru-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/1-meeru-website/spec.md
 - specs/1-meeru-website/checklists/requirements.md
tests:
 - none
---

## Prompt

 Meeru-72-fx Website (MVP)

**Target Audience**
Aspiring & pro traders (18+) seeking premium binary/forex signals, mentoring & community

**Focus**
Luxury, trust-building single-page website with smooth animations + simple auth

**Success Criteria**
- All 6 sections live & animated (Header, Hero, About, Skills/Services, Contact, Footer)
- Signup → branded welcome email via Resend in <8s
- Login works (protected route)
- Fully responsive + dark mode + 92+ Lighthouse score
- Deployed on Vercel, looks "bhai premium hai ye"
- Zero console errors or broken flows

**Constraints**
- Stack: Next.js 14 (App Router), Tailwind, Framer Motion, TypeScript, NextAuth/Clerk, Resend
- Timeline: MVP ready in ≤3 weeks
- No database, no payments, no live charts
- Free tools only

**Not Building**
- Real trading platform or signals dashboard
- User profiles/analytics
- Payment gateway
- Mobile app
- SEO or multi-language

## Response snapshot

Created the feature specification for the Meeru-72-fx website (MVP) with:
- Three prioritized user stories covering website browsing, account creation with welcome email, and login functionality
- Functional requirements (FR-001 to FR-010) covering all aspects of the website including responsive design, authentication, email delivery, and performance
- Success criteria (SC-001 to SC-007) with measurable outcomes for all required features
- Quality checklist validating the specification completeness
- All 6 required sections (Header, Hero, About, Skills/Services, Contact, Footer) specified with animations
- Edge cases identified for system behavior under various conditions

## Outcome

- ✅ Impact: Created comprehensive feature specification that captures all requirements for the premium trading website MVP
- 🧪 Tests: none
- 📁 Files: Created spec.md and requirements.md checklists in specs/1-meeru-website/
- 🔁 Next prompts: Can proceed with planning phase using /sp.plan
- 🧠 Reflection: Specification successfully captures the luxury, trust-building requirements with focus on animations, responsive design, and authentication flows

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): All checklist items validated as PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A