import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToogle from "@/components/ThemeToggle";
import AnimatedImageSVG from "@/components/AnimatedImageSVG";

export default function WelcomePage() {
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
          <Link href="/home">
            <button className="bg-[#0D4373] dark:bg-[#7AB9F0] text-white rounded-sm py-1 px-5">
              Enter
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}