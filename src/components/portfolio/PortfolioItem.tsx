import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioItemProps {
  project: {
    src: string;
    alt: string;
  };
  onClick: () => void;
}

const PortfolioItem = ({ project, onClick }: PortfolioItemProps) => {
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Image
        width={1000}
        height={1000}
        src={project.src}
        alt={project.alt}
      />
    </motion.div>
  );
};

export default PortfolioItem;
