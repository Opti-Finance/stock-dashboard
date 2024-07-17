import { useTheme } from "../context/ThemeContext"

const ColorSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
        <button 
            onClick={toggleTheme} 
            className="absolute right-20 top-10 text-gray-300 dark:text-white text-xl"
        >
            {theme === "light" ? "Turn Dark" : "Turn Light"}
        </button>
        </>
    )
}

export default ColorSwitch