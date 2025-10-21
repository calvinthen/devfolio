export default function About() {
  const techStack = [
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "TypeScript", icon: "🌀", color: "text-blue-500" },
    { name: "Tailwind", icon: "🌊", color: "text-sky-400" },
    { name: "HTML5", icon: "🔶", color: "text-orange-500" },
    { name: "CSS3", icon: "🎨", color: "text-blue-400" },
    { name: "Node.js", icon: "🌿", color: "text-green-500" },
  ]

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
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <span className={`text-5xl ${tech.color}`}> {tech.icon}</span>
                <p className="mt-2 text-sm text-white-300"><b>{tech.name}</b></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}