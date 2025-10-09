import { useNavigate } from "react-router-dom"
import "../index.css"

export default function Hero() {
    const navigate = useNavigate()

    const handleViewProjects = () => navigate("/projects")
    const handleContactMe = () => navigate("/contact")

  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-20 animate-fadeIn">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
        Hi, I’m <span className="text-blue-500">Calvin Then</span> 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
        A Frontend Developer passionate about crafting interactive and scalable
        web experiences with <span className="text-blue-400">React</span>, <span className="text-blue-400">TypeScript</span>, and <span className="text-blue-400">Tailwind CSS</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={handleViewProjects}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
        >
          View Projects
        </button>
        <button
          onClick={handleContactMe}
          className="border border-gray-500 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium shadow-sm transition-transform transform hover:-translate-y-1"
        >
          Contact Me
        </button>
      </div>
    </section>
  )
}