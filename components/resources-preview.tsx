import { Button } from "@/components/ui/button"
import { FileText, Video, BookOpen } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    icon: FileText,
    title: "2024 Cybersecurity Report",
    type: "Whitepaper",
    description: "Comprehensive analysis of emerging threats and defense strategies",
    date: "March 2024",
  },
  {
    icon: Video,
    title: "AI in Cybersecurity",
    type: "Webinar",
    description: "Learn how artificial intelligence is revolutionizing threat detection",
    date: "February 2024",
  },
  {
    icon: BookOpen,
    title: "Zero Trust Architecture Guide",
    type: "E-Book",
    description: "Complete guide to implementing zero trust security model",
    date: "January 2024",
  },
]

export function ResourcesPreview() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Latest Resources
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Stay informed with our latest insights and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="p-8 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all glow-border group"
            >
              <div className="inline-block p-3 rounded-lg bg-secondary/20 border border-secondary/50 glow-border-purple mb-4">
                <resource.icon className="h-8 w-8 text-secondary" />
              </div>
              <span className="text-xs text-secondary font-mono mb-2 block">{resource.type}</span>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{resource.description}</p>
              <p className="text-xs text-muted-foreground">{resource.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/resources">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8"
            >
              Explore All Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
