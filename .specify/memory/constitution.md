<!--
Sync Impact Report:
Version change: N/A → 1.0.0
Modified principles: N/A (new constitution)
Added sections: All sections added based on project requirements
Removed sections: None
Templates requiring updates: N/A (first version)
Follow-up TODOs: None
-->
# Meeru-72-fx Constitution

## Core Principles

### Spec-Driven Development (NON-NEGOTIABLE)
All development follows the specification-first approach with 100% adherence to the documented requirements. No deviations from the spec are allowed without formal amendment. This ensures predictability, reduces scope creep, and maintains alignment between stakeholder expectations and delivered features.

### Premium Quality & Trust-Building Design
Every aspect of the application must embody ultra-premium, luxurious design with black, gold, and emerald/teal color scheme. The interface must instill trust and confidence in users. All animations, interactions, and visual elements contribute to a professional binary & forex trading experience that feels expensive and reliable.

### Mobile-First Responsive Approach
Development begins with mobile implementation, ensuring buttery-smooth animations and optimal performance across all device sizes. The responsive design adapts seamlessly to desktop views while maintaining the luxury aesthetic. All interactive elements are optimized for touch interfaces as the baseline.

### Secure Authentication & Instant Communication
Authentication systems must be simple yet secure, implemented with NextAuth.js supporting credentials and Google login. Account creation triggers instant branded welcome emails via Resend within 8 seconds. All authentication flows include proper validation, loading states, and toast notifications for optimal user experience.

### Clean, Scalable Architecture
The codebase follows clean Next.js 14 App Router patterns with TypeScript, Tailwind CSS, and Framer Motion. All styling uses Tailwind exclusively with no custom CSS. Components are modular, reusable, and maintainable. The architecture supports future expansion while maintaining performance and accessibility standards.

### Performance & Accessibility Excellence
All pages achieve Lighthouse Performance ≥92 and Accessibility ≥95 scores. The application loads quickly, responds to user interactions immediately, and provides excellent UX for all users. Dark mode is the default with gold accents that pop against the black background, following accessibility contrast ratios.

## Technical Constraints

### Tech Stack Requirements
- Next.js 14 (App Router) with TypeScript
- Tailwind CSS for all styling (no custom CSS)
- Framer Motion for animations
- NextAuth.js for authentication (credentials + Google)
- Resend for welcome emails with branded templates
- Deployment on Vercel with custom domain capability

### Development Standards
- All forms must include validation, loading indicators, and toast notifications
- Code follows TypeScript best practices with strict typing
- Zero linting errors or warnings allowed
- All components are tested for responsiveness across mobile, tablet, and desktop
- Proper error handling and graceful degradation implemented

## Development Workflow

### Feature Implementation Process
- All features begin with detailed specifications in spec files
- Implementation follows the sequence: Header → Hero → About → Services → Contact → Footer
- Social media integration for WhatsApp, Facebook, YouTube, Instagram, and Telegram
- Core functionality (signup/login/dashboard) implemented with proper authentication guards
- Testing includes form validation, authentication flows, and email delivery

### Quality Gates
- All code must pass TypeScript compilation
- Lighthouse scores must meet minimum requirements (Performance ≥92, Accessibility ≥95)
- All forms validated with proper error handling
- Email delivery tested and confirmed working
- Cross-browser compatibility verified
- Mobile responsiveness verified on multiple screen sizes

## Governance

The constitution serves as the definitive guide for all development decisions. All team members must adhere to these principles. Any proposed changes to the constitution must be documented, reviewed, and formally approved. Compliance is verified during code reviews and testing phases. The constitution supersedes any conflicting practices or preferences.

**Version**: 1.0.0 | **Ratified**: 2025-12-12 | **Last Amended**: 2025-12-12
