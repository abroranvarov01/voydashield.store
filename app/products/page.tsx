import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Eye, Brain, Radar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const products = [
    {
      icon: Shield,
      name: "VoydaShield Core",
      tagline: "Enterprise-Grade Protection",
      description:
        "Our flagship security platform combining AI-powered threat detection, real-time monitoring, and automated incident response.",
      price: "Custom Pricing",
      features: [
        "AI Threat Detection Engine",
        "Real-Time Security Monitoring",
        "Automated Incident Response",
        "Advanced Analytics Dashboard",
        "Integration with 100+ Tools",
        "24/7 Expert Support",
      ],
    },
    {
      icon: Eye,
      name: "VoydaWatch",
      tagline: "Continuous Monitoring",
      description:
        "24/7 security monitoring solution with intelligent alerting and comprehensive visibility across your entire infrastructure.",
      price: "Starting at $499/mo",
      features: [
        "Continuous Network Monitoring",
        "Intelligent Alert System",
        "Asset Discovery & Tracking",
        "Vulnerability Scanning",
        "Compliance Reporting",
        "Custom Dashboards",
      ],
    },
    {
      icon: Brain,
      name: "VoydaAI",
      tagline: "Predictive Security",
      description:
        "Machine learning-powered security that predicts and prevents threats before they impact your organization.",
      price: "Starting at $799/mo",
      features: [
        "Predictive Threat Analytics",
        "Behavioral Analysis",
        "Anomaly Detection",
        "Automated Threat Hunting",
        "Risk Scoring",
        "Threat Intelligence Integration",
      ],
    },
    {
      icon: Radar,
      name: "VoydaRadar",
      tagline: "Threat Intelligence",
      description:
        "Real-time threat intelligence platform providing actionable insights from global security data and research.",
      price: "Starting at $299/mo",
      features: [
        "Global Threat Intelligence",
        "IOC Database Access",
        "Threat Actor Profiles",
        "Vulnerability Intelligence",
        "Dark Web Monitoring",
        "API Access",
      ],
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
              Our Products
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Powerful security products designed to protect your organization at every level.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <div
                key={i}
                className="glow-border p-8 rounded-lg bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 glow-border">
                      <product.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <p className="text-secondary text-sm">{product.tagline}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{product.price}</div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">{product.description}</p>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
                    Get Started
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center glow-border p-12 rounded-lg bg-card/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Enterprise Bundle</h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Get all VoydaShield products in one comprehensive package with priority support and custom integrations.
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 glow-border">
              Contact Sales for Enterprise Pricing
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
