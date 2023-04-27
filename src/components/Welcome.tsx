import { motion } from "framer-motion";
import ThemeToogle from "@/components/ThemeToggle";
import AnimatedImageSVG from "@/components/AnimatedImageSVG";

interface WelcomeProps {
  onEnterClick: () => void;
}

export default function Welcome({ onEnterClick }: WelcomeProps) {
  return (
    <section className="h-screen grid grid-cols-12">
      <div className="pt-6 col-start-11">
        <ThemeToogle />
      </div>
      <div className="col-span-12 flex flex-col items-center gap-5">
        <AnimatedImageSVG width={400} height={400} />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 3.9,
            },
          }}
        >
          <button
            className="bg-[#0D4373] dark:bg-[#7AB9F0] text-white rounded-sm py-1 px-5"
            onClick={onEnterClick}
          >
            Enter
          </button>
        </motion.div>
      </div>
    </section>
  );
}