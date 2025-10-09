import { useParams, useNavigate } from "react-router-dom"
import { projects } from "../data/Project"

export default function ProjectDetail() {
    const navigate = useNavigate()
    const { id } = useParams()

    const project = projects.find((p) => p.id === id)

    if (!project) {
        return (
        <div className="p-8 container mx-auto text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <button
            onClick={() => navigate("/projects")}
            className="text-blue-400 hover:underline"
            >
            ← Back to Projects
            </button>
        </div>
        )
    }


    return (
        <div className="p-8 container mx-auto text-white">
        <button
            onClick={() => navigate(-1)}
            className="mb-6 text-blue-400 hover:underline"
        >
            ← Back
        </button>

        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-300 mb-6">{project.description}</p>

            {project.image && (
            <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg mb-6"
            />
            )}

            <p className="text-gray-400 leading-relaxed mb-6">{project.details}</p>

            {project.tags && (
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                <span
                    key={tag}
                    className="text-sm bg-gray-700 px-3 py-1 rounded-full"
                >
                    #{tag}
                </span>
                ))}
            </div>
            )}
        </div>
        </div>
    )
}