export type Education = {
  institution: string;
  degree: string;
  period: string;
  description: string;
  tags?: string[];
  certificateUrl?: string;
};

export const EDUCATION: Education[] = [
  {
    institution: 'A-Level Ukraine IT-School',
    degree: 'Student',
    period: 'September 2022 – April 2023',
    description:
      'Studied: Layout & Tools (HTML, CSS/Flexbox, Responsive, practical layout, Git, Linux, Bootstrap). JavaScript: basics, data types, hoisting, strings/numbers/arrays/objects, var/let/const, type casting, conditions, loops, functions, dates, OOP, classes, timers, DOM, Local/Session Storage. React: SPA, JSX/CRA, rendering, components & props, state & lifecycle (class & functional), props drilling, hooks, forms, API work, Flux, useReducer, useContext, Redux. Diploma project: CodePen.',
    tags: ['SCSS', 'Sass', 'CSS', 'HTML', 'JSX', 'Front‑End', 'React', 'GraphQL', 'Git', 'Redux', 'Web', 'JavaScript'],
    certificateUrl: 'https://drive.google.com/file/d/1fHTo8G7cUJj-D7zyIBj34olLYaZhjxl8/view'
  }
];
