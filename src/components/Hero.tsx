import { useNavigate } from "react-router-dom"

export default function Hero() {
    const navigate = useNavigate()

    const handleViewProjects = () => navigate("/projects")
    const handleContactMe = () => navigate("/contact")

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m Calvin Then👋
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        A Frontend Developer passionate about crafting interactive and scalable
        web experiences with React, TypeScript, and Tailwind CSS.
      </p>

      <div className="space-x-4">
        <button
            onClick={handleViewProjects}     
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
          View Projects
        </button>
        <button 
            onClick={handleContactMe}
            className="border border-gray-400 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition">
          Contact Me
        </button>
      </div>
    </section>
  )
}