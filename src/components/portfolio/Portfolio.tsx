import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PortfolioData } from "./PortfolioData";
import PortfolioItem from "./PortfolioItem";
import Modal from "../Modal";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleModalOpen = (index: number) => {
    setSelectedProject(index - 1);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

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
              onClick={() => handleModalOpen(project.id)}
            />
          );
        })}
      </div>
      <AnimatePresence>
        {selectedProject !== null && (
          <Modal
            key={PortfolioData[selectedProject].id}
            project={PortfolioData[selectedProject]}
            onClose={handleModalClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
