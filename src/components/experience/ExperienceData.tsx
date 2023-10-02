export interface ExperienceData {
  date: string;
  title: string;
  company_name: string;
  points: string[];
}

export const experiences: ExperienceData[] = [
  {
    title: "Front-End Developer",
    company_name: "Timber & Hatchet",
    date: "January 2023 - Present",
    points: [
      "Collaborated with a UI/UX team and a senior engineer to boost our startup's online presence, brand recognition, and user engagement.",
      "Initiate designing and developing beautiful user interfaces and dynamic web components using React.js and Tailwind CSS, optimizing the user experience across all devices.",
      "Implemented Astro and Netlify, improving website performance with faster page load times and enhanced user satisfaction.",
    ],
  },
  {
    title: "Co-Lead Developer",
    company_name: "Tech Fleet Community DAO - Kadet Wallet",
    date: "February 2023 - April 2023",
    points: [
      "Guided Agile methodology implementation, ensuring on-time project updates through effective communication with senior management and software engineers.",
      "CCollaborated seamlessly with cross-functional teams to streamline processes, which significantly improved project delivery efficiency and contributed to successful project outcomes.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelance Web Developer (Self-Employed)",
    date: "January 2018 - Present",
    points: [
      "Developed 15+ websites using HTML, CSS, JavaScript, and WordPress to enhance user engagement and increase conversion rates.",
      "Defined project parameters for on-time, on-budget delivery through effective client communication.",
      "Enhanced revenue, trust, and usability through secure payment gateways and website documentation.",
    ],
  },
];
