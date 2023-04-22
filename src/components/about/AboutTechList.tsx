interface AboutTechProps {
    tech: string;
    icon: JSX.Element;
}

const AboutTechList = ({ tech, icon }: AboutTechProps) => {
  return (
    <li className="flex items-center gap-1">
      <span className="text-[#0D4373] dark:text-[#7AB9F0]">{icon}</span>
      <span className="text-[#212529] dark:text-[#f8f9fa] text-sm">{tech}</span>
    </li>
  );
};

export default AboutTechList;
