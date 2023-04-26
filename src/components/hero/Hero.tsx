import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  const typedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: ["Full-Stack", "Freelance", "Front-End"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="pt-8 pb-64">
      <h1 className="text-[#0D4373] dark:text-[#7AB9F0] mb-2 text-md">
        Hi, my name is
      </h1>
      <h2 className="text-[#212529] dark:text-[#f8f9fa] text-2xl mb-1 md:text-4xl lg:mb-2 lg:text-5xl">
        Jerome Haynes
      </h2>
      <h2 className="text-[#212529] dark:text-[#f8f9fa] mb-2 text-2xl md:text-4xl lg:text-5xl">
        A{" "}
        <span
          className="text-[#0D4373] dark:text-[#7AB9F0]"
          ref={typedRef}
        ></span>
        Developer
      </h2>
      <p className="md:max-w-3xl text-[#212529] dark:text-[#f8f9fa] md:text-lg mb-5">
        Software Engineer with the ability to build a web presence from the
        ground up using current best practices. Passionate learner, hard worker,
        and team player proficient in various scripting languages.
      </p>

      <div className="flex gap-5 text-white">
        <motion.a
          className="flex items-center gap-1 bg-[#0D4373] dark:bg-[#7AB9F0] py-1 px-3"
          href="https://www.linkedin.com/in/jerome-haynes/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span>
            <FaLinkedin />
          </span>
          LinkedIn
        </motion.a>
        <motion.a
          className="flex items-center gap-1 bg-[#0D4373] dark:bg-[#7AB9F0] py-1 px-3"
          href="https://github.com/dev-rome"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span>
            <FaGithub />
          </span>
          Github
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
