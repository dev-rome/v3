import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface ModalProps {
  project: {
    src: string;
    alt: string;
    title: string;
    description: string;
    github: string;
    live: string;
  };
  onClose: () => void;
}

const Modal = ({ project, onClose }: ModalProps) => {
  const controls = useAnimation();
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        transition: { delay: 0.3, duration: 0.3, ease: "easeInOut" },
      });
      setContentVisible(true);
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center z-10 px-4 sm:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-lg bg-white p-6 rounded-md"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.5 } }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div initial={{ opacity: 0 }} animate={controls}></motion.div>
        <Image width={500} height={500} src={project.src} alt={project.alt} />
        {contentVisible && (
          <>
            <button
              className="absolute top-0 right-2 text-xl font-bold text-[#212529] hover:text-red-500 focus:outline-none"
              onClick={onClose}
            >
              X
            </button>
            <h2 className="text-xl font-semibold mb-1 text-[#0D4373] dark:text-[#7AB9F0]">
              {project.title}
            </h2>
            <p className="text-[#212529] mb-2">{project.description}</p>
            <div className="flex gap-2">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-lg text-[#212529] hover:text-[#0D4373] hover:dark:text-[#7AB9F0]" />
              </Link>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-lg text-[#212529] hover:text-[#0D4373] hover:dark:text-[#7AB9F0]" />
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
