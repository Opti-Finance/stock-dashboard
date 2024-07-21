import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute right-6 top-6 p-2 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <FaMoon className="text-gray-700 text-xl hover:text-indigo-600" />
      ) : (
        <FaSun className="text-yellow-300 text-xl hover:text-yellow-400" />
      )}
    </button>
  );
};

export default ColorSwitch;