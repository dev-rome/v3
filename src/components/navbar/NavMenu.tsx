import {
  FaUser,
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

interface NavigationItem {
  title: string;
  icon: React.ReactNode;
  target: string;
}

const navigationItems: NavigationItem[] = [
  { title: "Home", icon: <FaHome />, target: "#home" },
  { title: "About", icon: <FaUser />, target: "#about" },
  { title: "Portfolio", icon: <FaBriefcase />, target: "#portfolio" },
  { title: "Contact", icon: <FaEnvelope />, target: "#contact" },
];

const handleMenuItemClick = (target: string) => {
  const element = document.querySelector(target);
  element?.scrollIntoView({ behavior: "smooth" });
};

const NavMenu = () => {
  return (
    <nav className="flex h-screen">
      <div className="fixed top-0 h-full w-36 dark:bg-[#7AB9F0] bg-[#0D4373] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center mt-8">
            <p className="text-white">JH</p>
          </div>
          <ul className="mt-8 flex flex-col justify-center flex-grow">
            {navigationItems.map((item, index) => (
              <li key={index} className="relative my-2 cursor-pointer">
                <a
                  className="block py-2 px-4 text-white text-lg rounded-lg hover:bg-blue-500 hover:bg-opacity-50 transition-colors duration-300 cursor-pointer"
                  onClick={() => handleMenuItemClick(item.target)}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mb-8">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
