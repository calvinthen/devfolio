import './index.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        🚀 Tailwind is working!
      </h1>
      <p className="text-lg mb-6">
        This text is styled using Tailwind classes.
      </p>
      <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
        Click Me
      </button>
    </div>
  )
}

export default App