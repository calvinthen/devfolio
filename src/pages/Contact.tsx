import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [isValid, setIsValid] = useState(false)

  // Regex for simple email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Validate each field as user types
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

    // Form is valid if no error messages exist
    const noErrors = Object.values(newErrors).every((err) => err === "")
    setIsValid(noErrors)
  }, [form])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setStatus("sending")

    try {
      const fd = new FormData()
      fd.append("name", form.name)
      fd.append("email", form.email)
      fd.append("message", form.message)

      const res = await fetch("https://formspree.io/f/xeorbaqr", {
        method: "POST",
        body: fd,
      })

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
        <p className="text-gray-400 mb-10">
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
              className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                errors.name ? "border-red-500" : "border-gray-700 focus:border-blue-500"
              } focus:outline-none`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                errors.email ? "border-red-500" : "border-gray-700 focus:border-blue-500"
              } focus:outline-none`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                errors.message ? "border-red-500" : "border-gray-700 focus:border-blue-500"
              } focus:outline-none resize-none`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid || status === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
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
  )
}