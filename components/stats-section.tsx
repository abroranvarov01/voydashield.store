import { TrendingUp, Users, Globe, Award } from "lucide-react"

const stats = [
  { icon: Users, value: "10,000+", label: "Protected Clients" },
  { icon: Globe, value: "150+", label: "Countries Covered" },
  { icon: TrendingUp, value: "99.99%", label: "Uptime Guarantee" },
  { icon: Award, value: "50+", label: "Industry Awards" },
]

export function StatsSection() {
  return (
    <section className="relative py-24 px-4 bg-background/50">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Trusted Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Leading the cybersecurity industry with proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm glow-border hover:scale-105 transition-transform"
            >
              <div className="inline-block p-4 rounded-full bg-secondary/20 border border-secondary/50 glow-border-purple mb-4">
                <stat.icon className="h-10 w-10 text-secondary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
