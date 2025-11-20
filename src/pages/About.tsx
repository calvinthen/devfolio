import SEO from "../SEO"

export default function About() {
  const techStack = [
    { name: "React", icon: "⚛️", color: "text-cyan-500 dark:text-cyan-400" },
    { name: "TypeScript", icon: "🌀", color: "text-blue-600 dark:text-blue-400" },
    { name: "Tailwind", icon: "🌊", color: "text-sky-500 dark:text-sky-400" },
    { name: "HTML5", icon: "🔶", color: "text-orange-500" },
    { name: "CSS3", icon: "🎨", color: "text-blue-500 dark:text-blue-300" },
    { name: "Node.js", icon: "🌿", color: "text-green-600 dark:text-green-400" },
  ]

  return (
    <>
      <SEO
        title="About"
        description="About Calvin Then — frontend developer focusing on React, TypeScript, and accessible UIs."
        url="http://localhost:5173/about"
        image="http://localhost:5173/OG_image.png"
      />
     <section
        className="
          min-h-screen
          bg-gradient-to-br from-white to-gray-100
          dark:from-gray-900 dark:via-gray-800 dark:to-black
          text-gray-900 dark:text-white
          py-20 px-6
          transition-colors duration-500
        "
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I’m <span className="font-semibold text-blue-500 dark:text-blue-400">Calvin Then</span>, 
            a frontend developer passionate about creating elegant, responsive, and accessible web experiences 
            with modern technologies.
          </p>

          <a
            href="/CalvinThen_Resume.pdf"
            download
            className="
              bg-blue-600 hover:bg-blue-700 
              text-white px-6 py-3 rounded-lg 
              font-medium transition inline-block mb-12
              shadow-md hover:shadow-lg
            "
          >
            Download Resume
          </a>

          {/* Tech Stack Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Technologies I use to build modern, performant, and maintainable apps.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <span className={`text-5xl ${tech.color}`}> {tech.icon}</span>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>

  )
}