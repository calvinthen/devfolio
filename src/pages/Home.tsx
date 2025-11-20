import Hero from "../components/Hero"
import SEO from "../SEO"

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <SEO
          title="Home"
          description="Hi, I’m Calvin Then — frontend developer building modern web apps with React, TypeScript, and Tailwind."
          url="http://localhost:5173/"
          image="http://localhost:5173/OG_image.png"
      />
      <Hero />
    </div>
  )
}