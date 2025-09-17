"use client"

import type React from "react"

import { useState } from "react"

interface LinkCardProps {
  title: string
  description: string
  url: string
  icon: React.ReactNode
  gradient?: boolean
}

export function LinkCard({ title, description, url, icon, gradient = false }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative block w-full p-6 rounded-xl border transition-all duration-300 transform
        ${
          gradient
            ? "bg-gradient-to-r from-cyan/10 via-teal/10 to-dark-teal/10 border-cyan/30 hover:border-cyan/60"
            : "bg-card/50 border-border hover:border-teal/60"
        }
        hover:scale-105 hover:shadow-2xl hover:shadow-cyan/20
        backdrop-blur-sm
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div
        className={`
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-gradient-to-r from-cyan/5 via-teal/5 to-dark-teal/5
      `}
      />

      <div className="relative z-10 flex items-center space-x-4">
        <div
          className={`
          flex-shrink-0 p-3 rounded-lg transition-all duration-300
          ${isHovered ? "bg-cyan/20 text-cyan" : "bg-muted/50 text-muted-foreground"}
        `}
        >
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className={`
            font-ethnocentric text-lg font-bold mb-1 transition-colors duration-300
            ${isHovered ? "text-cyan" : "text-foreground"}
          `}
          >
            {title}
          </h3>
          <p className="text-muted-foreground text-sm font-exo2 leading-relaxed">{description}</p>
        </div>

        <div
          className={`
          flex-shrink-0 transition-transform duration-300
          ${isHovered ? "translate-x-1 text-cyan" : "text-muted-foreground"}
        `}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
