// src/pages/Projects.tsx
import Card from "../components/Card"

type Project = {
  id: string
  title: string
  description: string
  tags?: string[]
  image?: string
}

const projects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Redesign",
    description: "A responsive portfolio built with React, TypeScript and Tailwind.",
    tags: ["react", "tailwind", "design"],
  },
  {
    id: "p2",
    title: "E-commerce UI",
    description: "Product list, filters and cart UI prototype.",
    tags: ["ui", "accessibility"],
  },
  {
    id: "p3",
    title: "Dashboard Analytics",
    description: "Interactive charts and data tables (mock data).",
    tags: ["react-query", "performance"],
  },
  {
    id: "p4",
    title: "Chat App (Demo)",
    description: "A small realtime chat UI demo (no backend).",
    tags: ["websocket", "design"],
  },
  {
    id: "p5",
    title: "CMS Blog",
    description: "Markdown-driven blog with simple admin demo.",
    tags: ["mdx", "content"],
  },
  {
    id: "p6",
    title: "Landing Page",
    description: "Marketing landing page with animations and CTA.",
    tags: ["animations", "seo"],
  },
]

export default function Projects() {
  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <p className="text-gray-300 mb-6">
        Example projects — click <strong>View</strong> to see the demo action.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
            tags={p.tags}
            onClick={(id) => {
              alert(`Open project: ${id}, Also Know As : ${p.title}`)
            }}
          />
        ))}
      </div>
    </div>
  )
}