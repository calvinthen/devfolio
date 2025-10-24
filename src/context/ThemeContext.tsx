import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { ThemeContext } from "./themeContextBase"

export type Theme = "light" | "dark"

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme")
    return (saved as Theme) || "dark"
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}