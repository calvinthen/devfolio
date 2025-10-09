import Card from "../components/Card"
import { projects } from "../data/Project"

export default function Projects() {
  return (
      <div className="p-8 container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <p className="text-gray-300 mb-6">
          Example projects — click a card to view its details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              tags={p.tags}
              image={p.image}
            />
          ))}
        </div>
      </div>
    )
}