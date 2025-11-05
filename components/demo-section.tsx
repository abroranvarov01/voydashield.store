"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function DemoSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Demo request submitted:", email)
    // Handle demo request
  }

  return (
    <section className="relative py-24 px-4 bg-background/50">
      <div className="container mx-auto z-10 relative max-w-4xl">
        <div className="p-12 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm glow-border text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              See VoydaShield in Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Schedule a personalized demo and discover how we can protect your organization
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/50 border-primary/30 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border px-8"
            >
              Request Demo
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            Join 10,000+ organizations protecting their digital assets with VoydaShield
          </p>
        </div>
      </div>
    </section>
  )
}
