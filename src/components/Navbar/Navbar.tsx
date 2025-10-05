import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">  
      <NavLink to="/" className="text-xl font-bold">Devfolio</NavLink>
      <div className="space-x-4"> 
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
      </div>
    </nav>
  )
}