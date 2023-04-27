import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

interface NavItem {
  target: string;
  icon: React.ReactNode;
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      target: "#home",
      icon: <FaHome size={24} />,
    },
    {
      target: "#about",
      icon: <FaUser size={24} />,
    },
    {
      target: "#portfolio",
      icon: <FaBriefcase size={24} />,
    },
    {
      target: "#contact",
      icon: <FaEnvelope size={24} />,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const circleVariants: Variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <nav className="md:hidden fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={toggleMenu}
      >
        <button className="p-3 rounded-full dark:bg-[#7AB9F0] bg-[#0D4373] text-[#f8f9fa]">
          {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
        <motion.ul
          className="absolute bottom-12 right-10 flex items-center gap-4"
          variants={circleVariants}
          animate={isOpen ? "open" : "closed"}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="p-2 rounded-full dark:bg-[#7AB9F0] bg-[#0D4373] text-[#f8f9fa] cursor-pointer"
              variants={itemVariants}
            >
              <Link
                href={item.target}
                className="flex items-center"
                onClick={(e) => handleMenuItemClick(e, item.target)}
              >
                {item.icon}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};
