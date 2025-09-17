import type React from "react"
import type { Metadata } from "next"
import { Exo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Meu Hub de Links",
  description: "Todos os meus links em um só lugar",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ethnocentric:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-exo2 ${exo2.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
