import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences, ExperienceData } from "./ExperienceData";

import useThemeContext from "@/hooks/useThemeContext";

const ExperienceCard = ({ experience }: { experience: ExperienceData }) => {
  const { isDarkMode } = useThemeContext();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDarkMode ? "#7AB9F0" : "#0D4373",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${isDarkMode ? "#7AB9F0" : "#0D4373"}`,
      }}
      iconStyle={{ background: isDarkMode ? "#7AB9F0" : "#0D4373" }}
    >
      <>
        <h3 className="text-white font-bold">{experience.title} - <span>{experience.date}</span></h3>
        <p className="font-semibold">{experience.company_name}</p>
      </>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience.point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <section id="work" className="pb-32 lg:pb-64">
      <h2 className="text-[#0D4373] dark:text-[#7AB9F0] text-md mb-2 font-bold">
        Experience
      </h2>

      <div className="flex flex-col">
        <VerticalTimeline lineColor={isDarkMode ? "#7AB9F0" : "#0D4373"}>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
