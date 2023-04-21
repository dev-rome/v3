import useThemeContext from "@/hooks/useThemeContext";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function ThemeToogle() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <BsMoonFill className="text-[#7AB9F0] text-2xl transition-all duration-500 ease-in-out" />
      ) : (
        <BsSunFill className="text-[#0D4373] text-2xl transition-all duration-500 ease-in-out" />
      )}
    </button>
  );
}
