import { Button } from "@/components/ui/button"
import { Network, Database, Cloud, Smartphone } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Network,
    title: "Network Security",
    description: "Advanced firewall and intrusion detection systems",
    features: ["DDoS Protection", "Traffic Analysis", "Threat Intelligence"],
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "End-to-end encryption and secure data storage",
    features: ["Zero-Knowledge", "Backup Systems", "Access Control"],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Comprehensive protection for cloud infrastructure",
    features: ["Multi-Cloud", "API Security", "Container Protection"],
  },
  {
    icon: Smartphone,
    title: "Mobile Security",
    description: "Secure mobile applications and device management",
    features: ["App Shielding", "MDM Solutions", "Threat Detection"],
  },
]

export function SolutionsPreview() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Complete Security Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Tailored protection for every aspect of your digital infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all glow-border group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/20 border border-secondary/50 glow-border-purple">
                  <solution.icon className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/solutions">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8"
            >
              Explore All Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
