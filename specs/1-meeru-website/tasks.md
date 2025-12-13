---
description: "Task list for Meeru-72-fx Website (MVP) implementation"
---

# Tasks: Meeru-72-fx Website (MVP)

**Input**: Design documents from `/specs/1-meeru-website/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - only included where explicitly needed for critical functionality like authentication and email delivery.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `app/`, `components/`, `lib/`, `styles/` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Next.js 14 project with TypeScript configuration
- [x] T002 Install and configure Tailwind CSS with luxury color theme
- [x] T003 [P] Configure ESLint and Prettier with TypeScript support
- [x] T004 Set up basic project structure following App Router conventions
- [x] T005 [P] Install Framer Motion for animations
- [x] T006 [P] Install and configure NextAuth.js
- [x] T007 Install Resend for email service

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T008 Create root layout with responsive navigation in app/layout.tsx
- [x] T009 [P] Set up global CSS with luxury color palette in app/globals.css
- [x] T010 [P] Create reusable UI components (FormInput, Toast) in components/ui/
- [x] T011 Create component folder structure in components/
- [x] T012 Configure NextAuth.js providers and session management
- [x] T013 Set up environment variables for development
- [x] T014 Create utility functions for form validation in lib/validation.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Premium Website Content (Priority: P1) 🎯 MVP

**Goal**: Create a visually appealing, responsive website with all 6 sections (Header, Hero, About, Skills/Services, Contact, Footer) with smooth animations and luxury design

**Independent Test**: Can be fully tested by visiting the website and verifying all 6 sections (Header, Hero, About, Skills/Services, Contact, Footer) are visible, animated, and responsive across different devices. Delivers immediate value by establishing credibility and trust.

### Implementation for User Story 1

- [ ] T015 [P] Create Header component with sticky navigation in components/layout/Header.tsx
- [x] T016 [P] Create Footer component with copyright and social icons in components/layout/Footer.tsx
- [x] T017 Create Hero section with animations in components/sections/HeroSection.tsx
- [x] T018 Create About section with company story in components/sections/AboutSection.tsx
- [x] T019 Create Services section with trading skills in components/sections/ServicesSection.tsx
- [x] T020 Create Contact section with form in components/sections/ContactSection.tsx
- [x] T021 [P] Create SocialIcons component in components/ui/SocialIcons.tsx
- [x] T022 [P] Create FloatingWhatsAppButton component in components/ui/FloatingWhatsAppButton.tsx
- [x] T023 Implement dark mode as default with gold/emerald accents in components/layout/Layout.tsx
- [x] T024 Add mobile-first responsive design to all components
- [x] T025 Implement smooth animations using Framer Motion across all sections
- [x] T026 Create main page with all 6 sections in app/page.tsx
- [x] T027 Add meta tags and SEO basics in app/page.tsx
- [x] T028 Test responsiveness on mobile, tablet, and desktop
- [x] T029 Verify zero console errors and smooth animations

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Create Account & Receive Welcome Email (Priority: P2)

**Goal**: Enable users to create accounts and receive a branded welcome email within 8 seconds

**Independent Test**: Can be fully tested by completing the signup flow and verifying that a branded welcome email is received within 8 seconds. Delivers value by capturing user information and initiating the customer relationship.

### Implementation for User Story 2

- [x] T030 [P] Create AuthForm component with signup/login toggle in components/auth/AuthForm.tsx
- [x] T031 Create FormInput component with validation in components/ui/FormInput.tsx
- [x] T032 [P] Create Toast component for notifications in components/ui/Toast.tsx
- [x] T033 Create auth page with signup/login forms in app/auth/page.tsx
- [x] T034 Implement signup form validation and error handling
- [x] T035 Configure NextAuth.js credentials provider for email/password
- [x] T036 Configure NextAuth.js Google provider
- [x] T037 Create branded welcome email template using Resend
- [x] T038 Implement email sending on user registration with Resend
- [x] T039 Add retry mechanism for email delivery when service unavailable
- [x] T040 Test email delivery timing to ensure <8s delivery
- [x] T041 Handle email service failures gracefully without blocking account creation
- [x] T042 Test signup flow with valid credentials
- [x] T043 Test form validation for invalid email format
- [x] T044 Test form validation for existing email

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Login to Access Protected Content (Priority: P3)

**Goal**: Allow registered users to log in and access protected dashboard content

**Independent Test**: Can be fully tested by logging in with valid credentials and accessing a protected dashboard page. Delivers value by demonstrating the complete authentication flow.

### Implementation for User Story 3

- [x] T045 [P] Create ProtectedRoute HOC in components/auth/ProtectedRoute.tsx
- [x] T046 Create UserProfile component in components/auth/UserProfile.tsx
- [x] T047 Create dashboard page with welcome message in app/dashboard/page.tsx
- [x] T048 Implement protected route functionality with NextAuth.js
- [x] T049 Implement user session management and display
- [x] T050 Add form validation and error handling for login
- [x] T051 Add toast notifications for auth events
- [x] T052 Test login flow with valid credentials   
- [x] T053 Test login flow with invalid credentials
- [x] T054 Test protected route access control
- [x] T055 Verify unauthenticated users are redirected to login page

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T056 [P] Run Lighthouse audits and optimize for 92+ performance, 95+ accessibility
- [x] T057 [P] Add comprehensive form validation across all forms
- [x] T058 Add loading states and error handling throughout application
- [x] T059 Test on multiple devices and browsers (Chrome, Firefox, Safari)
- [x] T060 Fix any console errors or broken flows
- [x] T061 Optimize animations for performance
- [x] T062 Add proper error boundaries in app/error.tsx
- [x] T063 Add loading states in app/loading.tsx
- [x] T064 [P] Add unit tests for auth forms and validation in __tests__/
- [x] T065 [P] Add integration tests for signup → email flow in __tests__/
- [x] T066 [P] Add end-to-end tests for critical user flows in __tests__/
- [x] T067 Update documentation in README.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on auth infrastructure from Phase 2
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Depends on auth infrastructure from Phase 2

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Create Header component with sticky navigation in components/layout/Header.tsx"
Task: "Create Footer component with copyright and social icons in components/layout/Footer.tsx"
Task: "Create SocialIcons component in components/ui/SocialIcons.tsx"
Task: "Create FloatingWhatsAppButton component in components/ui/FloatingWhatsAppButton.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence