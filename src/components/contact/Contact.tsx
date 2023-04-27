import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="pb-10">
      <h2 className="text-[#0D4373] dark:text-[#7AB9F0] text-md mb-2">
        Contact
      </h2>
      <h3 className="text-4xl text-[#212529] dark:text-[#f8f9fa]">
        Get in Touch
      </h3>
      <p className="text-[#212529] dark:text-[#f8f9fa] md:text-lg mb-3">
        Currently available for hire, my inbox is always open. Also avaiable for
        freelance work.
      </p>
      <motion.a
        className="inline-flex items-center gap-1 text-white bg-[#0D4373] dark:bg-[#7AB9F0] py-1 px-3"
        href="mailto:haynesjerome@gmail.com"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span>
          <FaEnvelope />
        </span>
        Contact
      </motion.a>
    </section>
  );
}

export default Contact;
