import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Cloud, Lock, Network, Database, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Shield,
      title: "Enterprise Security Suite",
      description:
        "Comprehensive protection for large organizations with advanced threat detection, real-time monitoring, and automated response systems.",
      features: ["AI-Powered Threat Detection", "24/7 SOC Monitoring", "Incident Response", "Compliance Management"],
    },
    {
      icon: Cloud,
      title: "Cloud Security Platform",
      description:
        "Secure your cloud infrastructure across AWS, Azure, and GCP with unified visibility and automated security controls.",
      features: ["Multi-Cloud Protection", "Container Security", "API Security", "Cloud Compliance"],
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description:
        "Implement zero trust security model with identity verification, micro-segmentation, and least-privilege access controls.",
      features: ["Identity Management", "Network Segmentation", "Access Control", "Continuous Verification"],
    },
    {
      icon: Network,
      title: "Network Security",
      description:
        "Advanced network protection with next-gen firewall, intrusion detection, and DDoS mitigation capabilities.",
      features: ["Next-Gen Firewall", "IDS/IPS", "DDoS Protection", "Traffic Analysis"],
    },
    {
      icon: Database,
      title: "Data Protection",
      description:
        "Safeguard sensitive data with encryption, data loss prevention, and comprehensive backup solutions.",
      features: ["Data Encryption", "DLP Solutions", "Backup & Recovery", "Data Classification"],
    },
    {
      icon: Zap,
      title: "Threat Intelligence",
      description:
        "Stay ahead of threats with real-time intelligence feeds, predictive analytics, and proactive threat hunting.",
      features: ["Real-Time Intel", "Threat Hunting", "Predictive Analytics", "IOC Management"],
    },
  ]

  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Security Solutions
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity solutions tailored to protect your organization from evolving threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, i) => (
              <div
                key={i}
                className="glow-border p-8 rounded-lg bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all"
              >
                <solution.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10 bg-transparent">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center glow-border p-12 rounded-lg bg-card/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Our team can design a tailored security solution that meets your specific requirements and compliance
              needs.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
