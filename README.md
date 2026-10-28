# <Dev /> — Professional Software Engineer & Architect Portfolio

A modern, minimalist, sophisticated, and high-performance developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Designed as a premier showcase for software engineering projects, system architectures, and technical deep dives, inspired by clean dark-aesthetic vitrines and editorial typography.

---

## 🌟 Key Features

- **Editorial Cinematic Hero**: High-impact presentation with status indicators, value proposition, and visual showcase card.
- **Interactive Project Vitrine Grid**:
  - Filterable by categories: `All`, `Full Stack`, `Frontend`, `Backend & APIs`, `Mobile & Cloud`, `AI & Data`.
  - Real-time instant search indexing across titles, descriptions, and technology stacks.
  - Hover action cards with 1-click GitHub and Live Demo buttons.
- **Deep-Dive Project Detail Pages (`/project/:slug`)**:
  - **A. Presentation**: High-res mockups, tags, role, and live links.
  - **B. Problem & Objective**: Target users, core problems, and engineering motivation.
  - **C. Developed Solution**: Features breakdown and architectural rationale.
  - **D. Architecture & Data Flow**: 4-step execution flow diagram with technology callouts.
  - **E. Key Features**: Matrix with performance highlights.
  - **F. Technical Challenges & Learnings**: Concrete engineering obstacles, solutions, and measured impacts.
  - **G. Verified Results & Benchmarks**: Real metrics (Lighthouse scores, p99 latency, conversions).
  - **H. Case Study Navigation**: Previous/next project carousel and back-to-vitrine controls.
- **Profile & Tech Stack Breakdown**: Categorized skills (Languages, Frameworks, Databases, DevOps & Cloud).
- **Interactive Resume / CV Modal**: Built-in formatted curriculum vitae with print/PDF support.
- **Functional Contact Engine**:
  - Direct email with 1-click clipboard copy feedback.
  - Form validation with simulated submission state and success confirmation.
  - Social profiles (GitHub & LinkedIn).
- **Dark & Light Mode**: Seamless theme switching with persistent local storage preferences.
- **Accessibility & Performance**: Built with semantic HTML5, keyboard navigation, and responsive layouts across mobile, tablet, and desktop.

---

## 🏗️ Project Architecture

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── hero-cinematic.png     # Editorial reference photograph
│   │   ├── reference-grid.png     # Vitrine design reference
│   │   └── projects/              # High-resolution vector project mockups
│   └── dev-icon.svg               # Vector brand favicon
├── src/
│   ├── components/
│   │   ├── Header.tsx             # Fixed navbar with active section detection & theme toggle
│   │   ├── Hero.tsx               # Hero introduction & visual showcase
│   │   ├── ProjectCard.tsx        # Card with hover actions (GitHub / Live demo)
│   │   ├── ProjectFilters.tsx     # Search input & category pills bar
│   │   ├── ProjectGrid.tsx        # 3-column responsive grid with empty state
│   │   ├── About.tsx              # Bio, philosophy & categorized skills matrix
│   │   ├── ContactForm.tsx        # Functional contact form & email copy utility
│   │   ├── Footer.tsx             # Dynamic year, legal copy, and back-to-top
│   │   ├── ResumeModal.tsx        # Curriculum vitae modal with print function
│   │   ├── ScrollToTop.tsx        # Automatic route scroll restoration
│   │   └── Icons.tsx              # Clean SVG icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── projects.ts            # Centralized typed project records & developer info
│   ├── hooks/
│   │   └── useTheme.tsx           # Dark/Light theme context and local storage syncing
│   ├── pages/
│   │   ├── Home.tsx               # Main landing page
│   │   ├── ProjectDetails.tsx     # Comprehensive single project route (/project/:slug)
│   │   └── NotFound.tsx           # 404 fallback page
│   ├── types/
│   │   └── project.ts             # TypeScript definitions for projects & categories
│   ├── App.tsx                    # Routing & global theme provider
│   ├── main.tsx                   # React root mount
│   └── index.css                  # Tailwind CSS imports & custom styles
├── index.html                     # HTML5 entry with meta SEO tags & Google Fonts
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Vite bundler & Tailwind configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended, tested on Node v22)
- **npm** (v9.0.0 or higher)

### 1. Installation

Clone or open the repository folder, then install the dependencies:

```bash
npm install
```

### 2. Development Server

Start the local development server with hot-module replacement (HMR):

```bash
npm run dev
```

The application will be live at:
`http://localhost:5173/`

### 3. Production Build

Compile and bundle the project for production:

```bash
npm run build
```

The optimized static output will be generated inside the `dist/` directory.

### 4. Preview Production Build

Preview the built application locally:

```bash
npm run preview
```

---

## 🛠️ Adding or Editing Projects

To add a new project or edit existing ones, modify `src/data/projects.ts`. No manual component edits are required!

Example project entry structure:

```typescript
{
  id: 'new-project',
  slug: 'new-project',
  title: 'Project Title',
  subtitle: 'Concise architectural tagline',
  shortDescription: 'Short summary for grid cards.',
  fullDescription: 'Comprehensive overview for project details page.',
  category: 'Full Stack', // 'Full Stack' | 'Frontend' | 'Backend & APIs' | 'Mobile & Cloud' | 'AI & Data'
  technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  coverImage: '/assets/projects/your-preview.svg',
  demoGif: '/assets/projects/your-preview.svg',
  githubUrl: 'https://github.com/developer/repo',
  liveUrl: 'https://demo.developer.dev',
  featured: true,
  publishedYear: '2026',
  role: 'Lead Architect',
  problem: { ... },
  solution: { ... },
  architecture: { ... },
  features: [ ... ],
  challenges: [ ... ],
  results: [ ... ]
}
```

---

## 🎨 Customizing Developer Information

Update personal details in `src/data/projects.ts` under the `developerInfo` export:

```typescript
export const developerInfo = {
  name: 'Your Name',
  title: 'Software Engineer & Solutions Architect',
  tagline: 'Transforming ideas into solutions through code.',
  bio: 'Your personal summary...',
  email: 'your.email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  location: 'City, Country • Remote',
  // ...
};
```

---

## 🌐 Deployment

The static assets produced in `dist/` can be deployed instantly to any modern hosting platform:

- **Vercel**: Import the repository and select Vite template (`npm run build`, output: `dist`).
- **Netlify**: Set build command `npm run build` and publish directory `dist`.
- **GitHub Pages**: Build the repository and publish the `dist` directory.

---

## 📄 License

MIT © All rights reserved.

