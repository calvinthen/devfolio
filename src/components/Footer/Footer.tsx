import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white text-gray-400 py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Devfolio. Built with React + Tailwind.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/calvinthen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-white transition-colors"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/calvin-then-050b2b1b8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="mailto:samkurniawan1st@gmail.com"
            aria-label="Send Email"
            className="hover:text-white transition-colors"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}
