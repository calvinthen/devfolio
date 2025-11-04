import { NavLink } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <NavLink to="/" className="text-xl font-bold">
        Devfolio
      </NavLink>

      {/* Navigation links */}
      <div className="flex items-center space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-400 ${isActive ? "text-blue-500 font-semibold" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `hover:text-blue-400 ${isActive ? "text-blue-500 font-semibold" : ""}`
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-blue-400 ${isActive ? "text-blue-500 font-semibold" : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-blue-400 ${isActive ? "text-blue-500 font-semibold" : ""}`
          }
        >
          Contact
        </NavLink>

        {/* Theme toggle button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-blue-400" />
          )}
        </motion.button>
      </div>
    </nav>
  )
}
