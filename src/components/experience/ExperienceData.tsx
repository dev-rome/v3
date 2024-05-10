export interface ExperienceData {
  date: string;
  title: string;
  company_name: string;
  points: string[];
}

export const experiences: ExperienceData[] = [
  {
    title: "Jr. Developer (Frontend)",
    company_name: "The Hero Company",
    date: "March 2024 - Present",
    points: [
      "Achieved a 100% completion rate of assigned weekly priorities for the past month, demonstrating consistent efficiency and reliability.",
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, and automated tasks with Gulp; optimized web interfaces through A/B split testing, technical verifications, and payment testing.",
      "Managed backend data storage solutions with MySQL Workbench to support data-driven website functionality.",
      "Participated in team meetings and code reviews, promoting collaborative decision-making and continuous improvement."
    ],
  },

  {
    title: "Software Engineer Mentee",
    company_name: "Onramp",
    date: "November 2023 - February 2024",
    points: [
      "Prioritizing code quality and readability for professional growth.",
      "Effective career development through personal branding and networking.",
      "Mastering software engineering interviews and fostering a feedback culture.",
    ],
  },

  {
    title: "Front-End Developer",
    company_name: "Timber & Hatchet",
    date: "January 2023 - October 2023",
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
      "Collaborated seamlessly with cross-functional teams to streamline processes, significantly improving project delivery efficiency and contributing to successful project outcomes.",
    ],
  },

  {
    title: "Freelance Web Developer",
    company_name: "Freelance Web Developer (Self-Employed)",
    date: "January 2018 - Present",
    points: [
      "Developed 15+ websites using HTML, CSS, JavaScript, and WordPress to enhance user engagement and increase conversion rates.",
      "Ensured on-time, on-budget delivery of projects by effectively communicating with clients and defining project parameters, resulting in a 95% client satisfaction rate.",
      "Improved revenue and trust by implementing secure payment gateways and providing detailed website documentation, leading to a 10% increase in sales and enhanced user experience.",
    ],
  },
];
