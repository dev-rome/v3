import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

interface NavItem {
  target: string;
  icon: React.ReactNode;
};

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

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (target: string) => {
    toggleMenu();
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
    <div className="md:hidden fixed bottom-4 right-4">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={toggleMenu}
      >
        <button className="p-3 rounded-full dark:bg-[#7AB9F0] bg-[#0D4373] text-white">
          {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
        <motion.div
          className="absolute bottom-12 right-4 flex items-center gap-4"
          variants={circleVariants}
          animate={isOpen ? "open" : "closed"}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              className="p-2 rounded-full dark:bg-[#7AB9F0] bg-[#0D4373] text-white"
              onClick={() => handleMenuItemClick(item.target)}
              variants={itemVariants}
            >
              {item.icon}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
