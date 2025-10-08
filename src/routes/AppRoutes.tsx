import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import About from "../pages/About"
import Contact from "../pages/Contact"

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const content = document.querySelector("#page-content");
    if(content){
      content.classList.add("fade-in");
      const timer = setTimeout(() => content.classList.remove("fade-in"), 300);
      return () => clearTimeout(timer);
    }

  }, [location]); 

  return (
    <div id="page-content" className="transition-opacity duration-300">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    
  )
}