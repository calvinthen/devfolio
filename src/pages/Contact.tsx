import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../SEO"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [isValid, setIsValid] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  useEffect(() => {
    const newErrors = { name: "", email: "", message: "" }

    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters."
    }

    if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address."
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters."
    }

    setErrors(newErrors)
    setIsValid(Object.values(newErrors).every((err) => err === ""))
  }, [form])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true }) // Show all errors if user tries to submit
    if (!isValid) return

    setStatus("sending")

    try {
      const response = await fetch("https://formspree.io/f/xeorbaqr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
        setTouched({ name: false, email: false, message: false })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <SEO
        title="Home"
        description="Hi, I’m Calvin Then — frontend developer building modern web apps with React, TypeScript, and Tailwind."
        url="http://localhost:5173/contact"
        image="http://localhost:5173/OG_image.png"
      />
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full text-center text-black dark:text-white">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="dark:text-gray-400 mb-10">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-lg dark:bg-gray-800 border ${
                  touched.name && errors.name
                    ? "border-red-500"
                    : "border-gray-700 focus:border-blue-500"
                } focus:outline-none`}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-lg dark:bg-gray-800 border ${
                  touched.email && errors.email
                    ? "border-red-500"
                    : "border-gray-700 focus:border-blue-500"
                } focus:outline-none`}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-lg dark:bg-gray-800 border ${
                  touched.message && errors.message
                    ? "border-red-500"
                    : "border-gray-700 focus:border-blue-500"
                } focus:outline-none resize-none`}
              />
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid || status === "sending"}
              className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed text-white dark:text-black"
            >
              {status === "sending" ? (
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending...</span>
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Success & Error Messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-400 mt-4 text-center"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 mt-4 text-center"
              >
                ❌ Something went wrong. Try again later.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>
    
    </>

  )
}