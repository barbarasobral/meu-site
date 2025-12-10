import React from "react";
import { useTheme } from "../hooks/useTheme";
import { FaSun, FaMoon } from 'react-icons/fa'


export function ThemeToggleButton({ toggleTheme, theme }) {
    return (
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="Alternar tema">
            {theme === 'light' ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
        </button>
    )
}

export default ThemeToggleButton;