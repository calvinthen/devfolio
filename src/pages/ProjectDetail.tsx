import { useParams, useNavigate } from "react-router-dom"

export default function ProjectDetail() {
    const navigate = useNavigate()
    const { id } = useParams()

    return (
        <div className="p-8 container mx-auto text-white">
            <button 
            onClick={() => navigate(-1)}
            className="mb-6 text-blue-400 hover:underline">
                ← Back to projects
            </button>

            <h1 className="text-3xl font-bold mb-4">Project Detail: {id}</h1>
            <p className="text-gray-300">
                This is where project details for <strong>{id}</strong> will appear.
            </p>
        </div>
    )
}