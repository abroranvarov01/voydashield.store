import { Award, CheckCircle, Shield, Star } from "lucide-react"

const certifications = [
  { icon: Award, name: "ISO 27001", description: "Information Security Management" },
  { icon: Shield, name: "SOC 2 Type II", description: "Security & Availability" },
  { icon: CheckCircle, name: "GDPR Compliant", description: "Data Protection Regulation" },
  { icon: Star, name: "PCI DSS", description: "Payment Card Industry Standard" },
]

export function CertificationsSection() {
  return (
    <section className="relative py-24 px-4 bg-background/50">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Industry Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Certified and compliant with global security standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-8 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all glow-border text-center group hover:scale-105"
            >
              <div className="inline-block p-4 rounded-full bg-secondary/20 border border-secondary/50 glow-border-purple mb-4">
                <cert.icon className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
