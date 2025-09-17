"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark
    setIsDark(shouldBeDark)

    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    localStorage.setItem("theme", newTheme ? "dark" : "light")

    if (newTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-cyan via-teal to-dark-teal p-0.5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan/25 cursor-pointer"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative overflow-hidden">
        {/* Sol */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            isDark ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <Sun className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />
        </div>

        {/* Lua */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
          }`}
        >
          <Moon className="w-6 h-6 md:w-7 md:h-7 text-slate-300" />
        </div>

        {/* Efeito de brilho */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-br from-slate-700/20 to-slate-900/20"
              : "bg-gradient-to-br from-amber-200/20 to-orange-300/20"
          }`}
        />
      </div>
    </button>
  )
}
