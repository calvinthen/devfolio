import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // inside your Contact.tsx component — replace handleSubmit with this version
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      // build a FormData payload (this avoids setting Content-Type manually)
      const fd = new FormData()
      fd.append("name", form.name)
      fd.append("email", form.email)
      fd.append("message", form.message)

      const res = await fetch("https://formspree.io/f/xeorbaqr", {
        method: "POST",
        body: fd, // browser will set the multipart/form-data header
      })

      // helpful debug logging
      console.log("Formspree response status:", res.status)
      const text = await res.text()
      console.log("Formspree response body:", text)

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        // show server message if available
        setStatus("error")
        console.error("Formspree returned an error:", res.status, text)
      }
    } catch (err) {
      setStatus("error")
      console.error("Network/JS error sending form:", err)
    }
  }


  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>

        <p className="text-gray-400 mb-10">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="relative bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
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
        {/* Success & Error Messages with fade animation */}
        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-green-400 mt-4"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400 mt-4"
            >
              ❌ Something went wrong. Try again later.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}