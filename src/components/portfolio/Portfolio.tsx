import { PortfolioData } from "./PortfolioData";
import PortfolioItem from "./PortfolioItem";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="portfolio" className="pb-32 lg:pb-64" ref={ref}>
      <h2 className="text-[#0D4373] dark:text-[#7AB9F0] text-md mb-2 font-bold">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {PortfolioData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: inView ? index * 0.4 : 0 }}
            >
              <PortfolioItem project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
