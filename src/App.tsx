import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App