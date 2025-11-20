import Card from "../components/Card"
import { projects } from "../data/Project"
import SEO from "../SEO"

export default function Projects() {
  return (
    <>
        <SEO
          title="Projects"
          description="Collection of projects — portfolio examples built with React, TypeScript, and Tailwind."
          url="http://localhost:5173/projects"
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
        <h2 className="text-4xl font-bold text-center mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </section>

    </>

  )
}
