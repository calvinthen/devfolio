export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      
      <p className="max-w-2xl text-gray-300 mb-8 leading-relaxed">
        Hi, I’m <span className="font-semibold text-white">Calvin Then</span> — a passionate Frontend Developer who loves
        building beautiful, scalable, and accessible web applications with
        modern technologies like React, TypeScript, and Tailwind CSS.
      </p>

      <p className="max-w-2xl text-gray-400 mb-8 leading-relaxed">
        My focus is on creating interactive, high-performance experiences that
        bring real value to users. I’m also interested in UI/UX design, testing,
        and modern development workflows.
      </p>

      <a
        href="/CalvinThen_Resume.pdf"
        download
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition inline-block"
      >
        Download Resume
      </a>


    </section>
  )
}