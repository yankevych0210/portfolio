export type Project = {
  slug: string;
  title: string;
  role: string;
  stack: string[];
  summary: string;
  image?: string; // path in public/
  tags?: string[];
  status?: 'Project' | 'Contract' | 'Freelance' | 'Full-time';
  url?: string;
  images?: string[];
  repo?: string;
  case?: {
    goal?: string;
    tasks?: string[];
    solution?: string[];
    results?: string[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "avtoinstall",
    title: "AvtoInstallServis",
    role: "Front‑End Developer",
    stack: ["HTML", "CSS", "JavaScript", "Web"],
    summary: "Corporate websites for AvtoInstallServis with clean, responsive UI and fast loading.",
    image: "/avtoinstall/img-1.png",
    images: [
      "/avtoinstall/img-1.png",
      "/avtoinstall/img-2.png",
      "/avtoinstall/img-3.png",
      "/avtoinstall/img-4.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Web"],
    status: 'Freelance',
    url: "https://at.avtoinstallservis.site/",
    case: {
      goal: 'Corporate presence with fast, responsive UX and clear service structure.',
      tasks: ['Design clean layout', 'Responsive grid', 'Cross-browser checks'],
      solution: ['Bootstrap based layout', 'Reusable components', 'Image optimization'],
      results: ['Reduced bounce rate', 'Consistent mobile experience']
    }
  },
  {
    slug: "cherrytrader",
    title: "CherryTrader",
    role: "Front‑End Engineer",
    stack: ["Git", "Next.js", "TypeScript", "JavaScript", "HeroUI", "Tailwind", "React", "CSS", "Redux", "SCSS"],
    summary: "Trading platform UI improvements: responsiveness, interactivity and cross‑browser stability.",
    image: "/cherrytrader/img-1.png",
    images: [
      "/cherrytrader/img-1.png",
      "/cherrytrader/img-2.png",
      "/cherrytrader/img-3.png",
      "/cherrytrader/img-4.png",
    ],
    tags: ["Git", "Next.js", "TypeScript", "JavaScript", "HeroUI", "Tailwind", "React", "CSS", "Redux", "SCSS"],
    status: 'Contract',
    url: "https://cherrytrader.com/",
    case: {
      goal: 'Enhance trading platform UI/UX.',
      tasks: ['Adaptive layout', 'Interactive components', 'Performance improvements'],
      solution: ['Next.js + TS refactors', 'Memoization & code splitting', 'Accessible components'],
      results: ['Smoother interactions', 'Better Lighthouse metrics']
    }
  },
  {
    slug: "streaming",
    title: "Streaming Platform UI",
    role: "Front‑End Developer",
    stack: ["HTML", "CSS", "JavaScript", "Web", "Figma"],
    summary: "Streaming platform interface with adaptive layout and consistent media experience.",
    image: "/streaming/img-1.png",
    images: [
      "/streaming/img-1.png",
      "/streaming/img-2.png",
      "/streaming/img-3.png",
      "/streaming/img-4.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Web", "Figma"],
    status: 'Project',
    url: "https://streaming-platform-pi.vercel.app/",
    case: {
      goal: 'Create streaming UI with clean navigation.',
      tasks: ['Responsive grid', 'Media cards', 'Dark/light theme'],
      solution: ['Tailwind utility design', 'Framer micro-animations', 'Accessible focus states'],
      results: ['Consistent design system', 'Fast initial load']
    },
    repo: "https://github.com/yankevych0210/Streaming-Platform"
  },
  {
    slug: "framer",
    title: "Framer",
    role: "Front‑End Developer",
    stack: ["HTML", "CSS", "Web", "Figma"],
    summary: "Animated landing built with Framer Motion: smooth hero reveal and micro‑interactions.",
    image: "/framer/img-1.png",
    images: [
      "/framer/img-1.png",
      "/framer/img-2.png",
      "/framer/img-3.png",
    ],
    tags: ["HTML", "CSS", "Web", "Figma"],
    status: 'Project',
    url: "https://framer-ebon.vercel.app/",
    case: {
      goal: 'Animated landing demonstrating motion craft.',
      tasks: ['Hero reveal', 'Scroll animations', 'CTA micro-interactions'],
      solution: ['Framer Motion variants', 'Reduced-motion fallbacks'],
      results: ['Engaging first impression']
    },
    repo: "https://github.com/yankevych0210/framer"
  },
  {
    slug: "mole",
    title: "Mole Game",
    role: "Front‑End Developer",
    stack: ["HTML", "CSS", "JavaScript", "Web"],
    summary: "Lightweight experimental app with clean, type‑safe UI.",
    image: "/mole/img-1.png",
    images: [
      "/mole/img-1.png",
      "/mole/img-2.png",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Web"],
    status: 'Project',
    url: "https://mole-js.vercel.app/",
    case: {
      goal: 'Minimal app with clean UI.',
      tasks: ['Small components', 'Type-safe code'],
      solution: ['HTML + CSS + JavaScript', 'Strict lints & formatters'],
      results: ['Fast dev cycle', 'Readable codebase']
    },
    repo: "https://github.com/yankevych0210/mole_js"
  },
  {
    slug: "zerolimits",
    title: "Zero Limits",
    role: "Front‑End Developer",
    stack: ["React", "Framer Motion", "GSAP", "Tailwind", "JavaScript", "Web"],
    summary: "Minimal modern landing with balanced typography and responsive layout.",
    image: "/zerolimits/img-1.png",
    images: [
      "/zerolimits/img-1.png",
      "/zerolimits/img-2.png",
      "/zerolimits/img-3.png",
      "/zerolimits/img-4.png",
    ],
    tags: ["Landing", "Design"],
    status: 'Project',
    url: "https://zero-limits.vercel.app/",
    case: {
      goal: 'Minimal modern landing.',
      tasks: ['Typography scale', 'Sections rhythm', 'Responsive images'], 
      solution: ["React", "Framer Motion", "GSAP", "Tailwind", "JavaScript", "Web"],
      results: ['Consistent look on all devices']
    },
    repo: "https://github.com/yankevych0210/Zero-Limits"
  },
  {
    slug: "codepen",
    title: "CodePen UI Clone",
    role: "Front‑End Developer",
    stack: ["SCSS", "Sass", "CSS", "HTML", "JSX", "Front‑End", "React", "GraphQL", "Git", "Redux", "Web", "JavaScript"],
    summary: "UI exploration inspired by CodePen: header, cards grid and hover interactions.",
    image: "/codepen/img-1.png",
    images: [
      "/codepen/img-1.png",
      "/codepen/img-2.png",
      "/codepen/img-3.png",
      "/codepen/img-4.png",
    ],
    tags: ["Clone", "UI"],
    status: 'Project',
    url: "https://codepen-gray.vercel.app/",
    case: {
      goal: 'Explore UI inspired by CodePen.',
      tasks: ['Header/nav layout', 'Cards grid', 'Hover effects'],
      solution: ["SCSS", "Sass", "CSS", "HTML", "JSX", "Front‑End", "React", "GraphQL", "Git", "Redux", "Web", "JavaScript"],
      results: ['Cohesive UI kit sample']
    },
    repo: "https://github.com/yankevych0210/codepen"
  }
];
