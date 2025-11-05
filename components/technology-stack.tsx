import { Cpu, Layers, Zap, Binary } from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    name: "Neural Networks",
    description: "Deep learning models for pattern recognition and anomaly detection",
  },
  {
    icon: Layers,
    name: "Blockchain Integration",
    description: "Immutable security logs and decentralized threat intelligence",
  },
  {
    icon: Zap,
    name: "Real-Time Processing",
    description: "Sub-millisecond threat detection and response systems",
  },
  {
    icon: Binary,
    name: "Quantum Computing",
    description: "Next-generation encryption and cryptographic algorithms",
  },
]

export function TechnologyStack() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Advanced Technology Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Built on cutting-edge technologies for unparalleled security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all glow-border group text-center"
            >
              <div className="inline-block p-4 rounded-full bg-secondary/20 border border-secondary/50 glow-border-purple mb-4">
                <tech.icon className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
