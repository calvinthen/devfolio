// src/context/themeContextBase.ts
import { createContext } from "react"
import type { ThemeContextType } from "./ThemeContext"

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)