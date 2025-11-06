import { useParams, useNavigate } from "react-router-dom"
import { projects } from "../data/Project"

export default function ProjectDetail() {
  const navigate = useNavigate()
  const { id } = useParams()

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <button
          onClick={() => navigate("/projects")}
          className="text-blue-500 hover:underline"
        >
          ← Back to Projects
        </button>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white py-20 px-6 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg shadow-lg mb-6 w-full"
          />
        )}

        <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
          {project.details}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}