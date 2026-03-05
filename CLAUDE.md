# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js company website for Elektromaschinenbau Schulze, an industrial company specializing in crane systems (Krananlagen). The website is a single-page application designed to consolidate all company information in one place, with a strong focus on the career section.

**Key URL**: https://www.elektromaschinenbau-schulze.de/

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (Pages Router)
- **Styling**: styled-components with global styles
- **Database**: MongoDB via Mongoose
- **Authentication**: NextAuth.js with Google OAuth (admin-only access)
- **Email**: Nodemailer (Gmail service)
- **Form Handling**: multiparty for file uploads (job applications)
- **State Management**:
  - SWR for data fetching
  - use-local-storage-state for client-side persistence (popups, animations)
- **Analytics**: Vercel Analytics
- **Animations**: Framer Motion
- **Security**: Google reCAPTCHA v2

### Application Structure

#### Pages Architecture
- **`pages/index.js`**: Main single-page application with all sections:
  - Navigation (sticky)
  - Hero section (ModernRandomPicture)
  - Intro text
  - Products/Services section
  - Certificates section
  - Career section (job listings)
  - Contact form
  - Footer
  - Sidebar with scroll-to-top
  - Job popup (controlled by localStorage)

- **`pages/adminArea.js`**: Protected admin interface for managing job postings
  - Requires Google OAuth authentication
  - Only ALLOWED_ADMIN_EMAIL can access (configured in .env.local)

- **`pages/impressum.js`** & **`pages/privacy.js`**: Legal pages

#### Component Organization
Components are organized by feature in `/components`:
- **Admin**: Job management forms for authenticated admin
- **ApplyFormular**: Job application form with file upload
- **Buttons**: Reusable button components
- **Career**: Job listings, job cards, company advantages
- **Certificates**: Certification display
- **Config**: Configuration files (nodemailer, email settings)
- **Contact**: Contact form with reCAPTCHA
- **Footer**: Site footer
- **Homescreen**: Hero section, intro text, back-to-home navigation
- **Icons**: Icon components
- **ImpressumAndPrivacy**: Legal content components
- **Navigation**: Main navigation with scroll behavior
- **Popup**: Job-related popups
- **Products**: Product/service showcases
- **Sidebar**: Scroll-to-top and other sidebar utilities
- **ToastMessage**: Notification system
- **WindowCards**: Card-based UI components

#### API Routes (`/pages/api`)
- **`addJob.js`**: Create new job posting (admin only)
- **`changeJob.js`**: Update existing job posting (admin only)
- **`deleteJob.js`**: Remove job posting (admin only)
- **`getJobData.js`**: Fetch all job postings (public)
- **`apply.js`**: Handle job applications with file upload (max 10MB)
- **`contact.js`**: Process contact form submissions
- **`auth/[...nextauth].js`**: NextAuth configuration with Google OAuth

#### Database Layer (`/db`)
- **`connect.js`**: MongoDB connection with cached connection handling for hot reloads
- **`models/Jobs.js`**: Job schema (jobTitle, introduction, whatWeOffer, tasks, qualification)
- **`models/Products.js`**: Product/service schema

### State Management Patterns

1. **Global State** (`_app.js`):
   - `scrollY`: Tracks scroll position for navigation and scroll-to-top behavior
   - `device`: Boolean for desktop (≥1024px) vs mobile layout

2. **Local Storage State**:
   - Job popup visibility and animation triggers
   - Persisted across sessions

3. **SWR Configuration**:
   - Global fetcher: `(url) => fetch(url).then(res => res.json())`
   - Used for job data fetching

### Styling System

Global styles defined in `styles.js`:
- **Font**: Roboto Flex (Google Font)
- **CSS Variables**:
  - `--color-primary`: #BAFFC6 (light green)
  - `--color-secondary`: #178012 (dark green)
  - `--color-third`: #F5F6FF (light blue/white)
  - `--color-fourth`: #4B5E6B (dark gray - main text)
  - `--color-fifth`: #181E90 (dark blue)
  - Responsive font sizes that scale at 768px breakpoint

- **Responsive Design**: Mobile-first with breakpoints at 768px, 1024px, 1199px, and 1920px
- **Animations**: Uses keyframes with styled-components (fade-in effects)

### Authentication Flow

1. Google OAuth via NextAuth.js
2. Only email matching `ALLOWED_ADMIN_EMAIL` environment variable can sign in
3. Admin routes protected via `useSession()` hook
4. Session passed down from `_app.js` via SessionProvider

### Email Configuration

- Service: Gmail via Nodemailer
- Configured in `components/Config/nodemailer.js`
- Two email types:
  1. Job applications (with PDF attachments)
  2. General contact inquiries
- Both send to EMAIL environment variable

### File Upload Handling

- Library: multiparty
- Max file size: 10MB
- Used in job application form
- Body parser disabled for `/api/apply` route

### Environment Variables Required

See `.env.local` for structure (NEVER commit this file):
- `EMAIL`: Gmail address for sending/receiving emails
- `EMAIL_PASS`: Gmail app-specific password
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Public reCAPTCHA key
- `RECAPTCHA_SECRET_KEY`: Secret reCAPTCHA key
- `ALLOWED_ADMIN_EMAIL`: Email address with admin access
- `NEXTAUTH_SECRET`: NextAuth session encryption key
- `NEXTAUTH_URL`: Production URL
- `GOOGLE_CLIENT_ID`: OAuth client ID
- `GOOGLE_CLIENT_SECRET`: OAuth client secret
- `MONGODB_URI`: MongoDB connection string

## Important Notes

- The main branch is `main` (for PRs)
- Current branch `website-upgrade-test` is for testing/development
- Image domains allowed in Next.js config: www.kununu.com
- Styled-components compiler enabled in next.config.js
- Windows development environment (Git Bash)
- The site uses a testing preview indicator on the current branch (red "TESTING-PREVIEW-BRANCH" banner)

## Development Patterns

- Component styling: Use styled-components with template literals
- Media queries: Mobile-first, use component-level media queries
- Data fetching: Use SWR for client-side data fetching
- Form handling: Controlled components with state
- Animations: Framer Motion for complex animations, CSS keyframes for simple fades
- Icons: FontAwesome React components + lucide-react
