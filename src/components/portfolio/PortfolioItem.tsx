import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioItemProps {
  project: {
    src: string;
    alt: string;
  };
  onClick: () => void;
  onImageClick: () => void;
  showReadMore: boolean;
}

const PortfolioItem = ({
  project,
  onClick,
  onImageClick,
  showReadMore,
}: PortfolioItemProps) => {
  return (
    <div className="relative overflow-hidden cursor-pointer">
      <Image
        className="mx-auto"
        width={500}
        height={500}
        src={project.src}
        alt={project.alt}
        onClick={onImageClick}
      />
      {showReadMore && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-30 items-center justify-center flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="dark:bg-[#7AB9F0] bg-[#0D4373] text-[#f8f9fa] p-3 w-24 h-24 rounded-full text-xs font-bold"
            whileHover={{ scale: 1.1 }}
            onClick={onClick}
          >
            Read More
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioItem;
