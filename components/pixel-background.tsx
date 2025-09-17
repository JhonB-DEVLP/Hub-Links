"use client"

import { useEffect, useState } from "react"

interface Pixel {
  id: number
  x: number
  y: number
  size: number
  color: string
  animationType: "float" | "pulse"
  delay: number
}

export function PixelBackground() {
  const [pixels, setPixels] = useState<Pixel[]>([])

  useEffect(() => {
    const colors = ["#00F6FF", "#00D1B6", "#008B94"]
    const newPixels: Pixel[] = []

    // Generate random pixels
    for (let i = 0; i < 50; i++) {
      newPixels.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationType: Math.random() > 0.5 ? "float" : "pulse",
        delay: Math.random() * 5,
      })
    }

    setPixels(newPixels)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className={`absolute rounded-sm ${pixel.animationType === "float" ? "pixel-float" : "pixel-pulse"}`}
          style={{
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: `${pixel.size}px`,
            height: `${pixel.size}px`,
            backgroundColor: pixel.color,
            animationDelay: `${pixel.delay}s`,
          }}
        />
      ))}

      {/* Additional geometric shapes */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-cyan rotate-45 pixel-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 right-20 w-2 h-2 bg-teal pixel-float" style={{ animationDelay: "2s" }} />
      <div
        className="absolute bottom-32 left-1/4 w-4 h-4 bg-dark-teal rotate-12 pixel-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-cyan pixel-float" style={{ animationDelay: "0.5s" }} />
      <div
        className="absolute top-1/3 left-3/4 w-2 h-2 bg-teal rotate-45 pixel-pulse"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
