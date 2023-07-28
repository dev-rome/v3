import { PortfolioData } from "./PortfolioData";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {

  return (
    <section id="portfolio" className="pb-32 lg:pb-64">
      <h2 className="text-[#0D4373] dark:text-[#7AB9F0] text-md mb-2">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PortfolioData.map((project) => {
          return (
            <PortfolioItem
              key={project.id}
              project={project}
            />
          );
        })}
      </div>
    </section>
  );
}
