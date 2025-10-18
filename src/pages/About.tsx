import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiVite, SiGit } from "react-icons/si"

export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          I’m Calvin Then, a frontend developer passionate about creating elegant,
          responsive, and accessible web experiences with modern technologies.
        </p>

        <a
          href="/CalvinThen_Resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition inline-block mb-12"
        >
          Download Resume
        </a>

        {/* Tech Stack Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
          <p className="text-gray-400 mb-8">
            Technologies I use to build modern, performant, and maintainable apps.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            <FaReact className="text-5xl text-cyan-400" title="React" />
            <SiTypescript className="text-5xl text-blue-500" title="TypeScript" />
            <SiTailwindcss className="text-5xl text-sky-400" title="Tailwind CSS" />
            <FaHtml5 className="text-5xl text-orange-500" title="HTML5" />
            <FaCss3Alt className="text-5xl text-blue-400" title="CSS3" />
            <FaNodeJs className="text-5xl text-green-500" title="Node.js" />
            <SiVite className="text-5xl text-purple-400" title="Vite" />
            <SiGit className="text-5xl text-orange-400" title="Git" />
          </div>
        </div>
      </div>
    </section>
  )
}