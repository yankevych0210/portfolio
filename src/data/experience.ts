export type Experience = {
  company: string;
  role: string;
  period: string;
  type?: 'Full-time' | 'Contract' | 'Freelance' | 'Project';
  description: string;
  tags: string[];
  projectName?: string;
  projectUrls?: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'WhiteGen',
    role: 'Front-End Developer',
    period: 'May 2023 – Present',
    type: 'Full-time',
    description:
      'Built a range of websites — Landing/Multi‑Landing, Market land, Market with basket, Game sites, Showcases, and Blogs — using JavaScript, libraries, and macros. Each project required a tailored approach, with emphasis on adaptive, highly functional UI, modern design, and performance.',
    tags: [
      'HTML', 'CSS', 'JavaScript', 'jQuery', 'Front‑End', 'Macros',
      'Bootstrap', 'Bulma', 'Foundation', 'Metro 4 UI', 'Materialize',
      'Tailwind CSS', 'Windi CSS', 'Tachyons', 'React', 'Blogs', 'E‑commerce'
    ]
  },
  {
    company: 'LeadAR',
    role: 'Front-End Developer',
    period: 'January 2025',
    type: 'Project',
    description:
      'Solely responsible for the front‑end of a streaming platform. Delivered a modern, clean UI with adaptive, responsive behavior across devices.',
    projectName: 'Streaming Platform UI',
    projectUrls: ['https://streaming-platform-pi.vercel.app/'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Web','Responsive']
  },
  {
    company: 'Veido',
    role: 'Front-End Engineer',
    period: 'December 2024 – February 2025',
    type: 'Contract',
    description:
      'Collaborated on cherrytrader.com: implemented responsive UI components and interactive features, optimized performance, ensured cross‑browser compatibility, and worked closely with designers and backend to deliver a seamless user experience.',
    projectName: 'CherryTrader',
    projectUrls: ['https://cherrytrader.com'],
    tags: ['Git', 'Next.js', 'TypeScript', 'JavaScript', 'HeroUI', 'Tailwind', 'React', 'CSS', 'Redux', 'SCSS']
  },
  {
    company: 'Annamax',
    role: 'Front-End Developer',
    period: 'November 2024',
    type: 'Freelance',
    description:
      'Developed and launched the Austrian (at.avtoinstallservis.site) and main (avtoinstallservis.site) websites for AvtoInstallServis as a one‑time freelance project using modern front‑end technologies.',
    projectName: 'AvtoInstallServis',
    projectUrls: ['https://at.avtoinstallservis.site','https://avtoinstallservis.site'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Web', 'Responsive']
  },
 
];
