# Meeru-72-fx - Professional Binary & Forex Trading Platform

Welcome to Meeru-72-fx, a premium binary and forex trading platform designed for aspiring and professional traders. Our platform offers professional trading signals, mentoring, and a supportive community to help you achieve consistent profitability.

## Features

- **Premium Trading Signals**: High-quality binary and forex signals with proven success rates
- **One-on-One Mentoring**: Personalized mentoring sessions with expert traders
- **Market Analysis**: Daily market analysis and insights from our team of experts
- **VIP Community**: Exclusive community of traders to share strategies and network
- **Secure Authentication**: Robust login system with Google authentication
- **Responsive Design**: Optimized for all devices with a luxury, professional feel
- **Branded Welcome Emails**: Automated welcome emails for new users

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Authentication**: NextAuth.js
- **Email Service**: Resend
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd meeru-72-fx
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   RESEND_API_KEY=your-resend-api-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Environment Variables

- `NEXTAUTH_URL`: The URL of your application
- `NEXTAUTH_SECRET`: Secret for NextAuth.js (generate one with `openssl rand -base64 32`)
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
- `RESEND_API_KEY`: API key for Resend email service

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard page
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── auth/              # Authentication-related components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions and services
│   ├── email-templates/   # Email templates
│   ├── services/          # Service functions
│   └── validation.ts      # Form validation utilities
└── public/                # Static assets
```

## Key Functionality

### Authentication
- User signup and login with email/password
- Google authentication
- Protected routes with session management
- Welcome email on registration

### User Experience
- Responsive design for all device sizes
- Smooth animations using Framer Motion
- Dark mode with gold/emerald accents
- Form validation and error handling

## Deployment

This application is designed for deployment on Vercel. To deploy:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Contributing

We welcome contributions to improve the platform. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need assistance, please contact our support team at support@meeru-72-fx.com.