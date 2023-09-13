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
      "Collaborated with a cross-functional team to develop the company startup website, significantly enhancing online presence and increasing visibility.",
      "Initiate designing and developing beautiful user interfaces and dynamic web components using React.js and Tailwind CSS, optimizing the user experience across all devices.",
      "Implemented Astro and Netlify, resulting in a decrease in page load times and improved user satisfaction.",
    ],
  },
  {
    title: "Co-Lead Developer",
    company_name: "Tech Fleet Community DAO - Kadet Wallet",
    date: "February 2023 - April 2023",
    points: [
      "Guide the execution of Agile principles for timely project updates and effective communication with senior management and software engineers.",
      "Collaborated with stakeholders and cross-functional teams from UX/UI, Product, and Strategy to prioritize tasks and improve development efficiency, resulting in an increase in project delivery efficiency.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelance Web Developer (Self-Employed)",
    date: "January 2018 - Present",
    points: [
      "Designed and developed 15+ websites, boosting user engagement, traffic, and conversion rates.",
      "Established precise project requirements, budgets, and timelines through effective client communication, ensuring on-time and within-budget project delivery. Maintained a high client satisfaction rate.",
      "Implemented secure payment gateways, boosting revenue and trust. Authored website documentation for usability and code simplicity.",
    ],
  },
];
