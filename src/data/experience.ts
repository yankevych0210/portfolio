export type Experience = {
  company: string;
  role: string;
  period: string;
  type?: 'Full-time' | 'Contract' | 'Freelance' | 'Project';
  description: string;
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'WhiteGen',
    role: 'Front-End Developer',
    period: 'May 2023 – Present',
    type: 'Full-time',
    description:
      'Developed diverse web projects: Landing/Multi-Landing, Market with cart, Game Sites, Showcases, Blogs. Focus on adaptive, performant UI and modern design approaches.',
    tags: ['React', 'JavaScript', 'Tailwind', 'Blogs', 'E-commerce']
  },
  {
    company: 'LeadAR',
    role: 'Front-End Developer',
    period: 'January 2025',
    type: 'Project',
    description:
      'Built the front-end for a streaming platform with clean design and responsive behavior across devices.',
    tags: ['React', 'TypeScript', 'Responsive']
  },
  {
    company: 'Veido',
    role: 'Front-End Engineer',
    period: 'December 2024 – February 2025',
    type: 'Contract',
    description:
      'Collaborated on cherrytrader.com: responsive UI components, interactive features, performance optimization and cross-browser compatibility.',
    tags: ['Next.js', 'TypeScript', 'Redux', 'SCSS']
  },
  {
    company: 'Annamax',
    role: 'Front-End Developer',
    period: 'November 2024',
    type: 'Freelance',
    description:
      'Delivered Austrian (at.avtoinstallservis.site) and main (avtoinstallservis.site) websites for AvtoInstallServis.',
    tags: ['React', 'Bootstrap', 'JavaScript']
  },
  {
    company: 'A-Level Ukraine IT-School',
    role: 'Student',
    period: 'September 2022 – April 2023',
    description:
      'Studied HTML/CSS (Flexbox/Responsive), practical layout, Git/Linux/Bootstrap; JavaScript (fundamentals, DOM, Storage); React (SPA, hooks, forms, Redux).',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Redux']
  }
];
