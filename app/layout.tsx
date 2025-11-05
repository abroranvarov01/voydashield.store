import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "VoydaShield - Smart Data Protection & Cybersecurity",
  description: "Advanced cybersecurity solutions powered by intelligent technology",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
