export type Project = {
  id: string
  title: string
  description: string
  tags?: string[]
  image?: string
  details?: string
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Redesign",
    description: "A responsive portfolio built with React, TypeScript, and Tailwind.",
    tags: ["react", "tailwind", "design"],
    image: "/images/portfolio.jpg",
    details:
      "This portfolio project showcases a modern developer profile, built with Vite, React, TypeScript, and Tailwind CSS. It includes animations, responsive design, and SEO optimizations.",
  },
  {
    id: "p2",
    title: "E-commerce UI",
    description: "Product list, filters and cart UI prototype.",
    tags: ["ui", "accessibility"],
    image: "/images/ecommerce.jpg",
    details:
      "An accessible, component-driven e-commerce interface built as a UI prototype. Features product cards, filters, and a shopping cart drawer.",
  },
  {
    id: "p3",
    title: "Dashboard Analytics",
    description: "Interactive charts and data tables (mock data).",
    tags: ["react-query", "performance"],
    image: "/images/dashboard.jpg",
    details:
      "A mock analytics dashboard with chart visualizations, pagination, and real-time data simulation using React Query.",
  },
]