import { Shield, Zap, Brain, Lock, Eye, Server } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Threat Analysis",
    description: "Machine learning to predict and prevent cyber attacks in real-time",
  },
  {
    icon: Shield,
    title: "Multi-Layer Protection",
    description: "Comprehensive defense system against all types of digital threats",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Automatic threat detection and neutralization in milliseconds",
  },
  {
    icon: Lock,
    title: "Quantum Encryption",
    description: "Data protection using quantum encryption algorithms",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "24/7 surveillance of your infrastructure security",
  },
  {
    icon: Server,
    title: "Cloud Security",
    description: "Protection for cloud services and distributed systems",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Future Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Innovative solutions to protect your business in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 glow-border hover:scale-105"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-secondary/20 border border-secondary/50 glow-border-purple">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
