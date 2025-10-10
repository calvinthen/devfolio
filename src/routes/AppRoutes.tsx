import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import About from "../pages/About"
import Contact from "../pages/Contact"
import ProjectDetail from "../pages/ProjectDetail"

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
    <AnimatePresence mode="wait">  
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Home />
              </motion.div>
            }
          />
                  <Route
            path="/projects"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectDetail />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
    </AnimatePresence>
    
  )
}