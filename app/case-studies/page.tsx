import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Building2, TrendingUp, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "Global Financial Services Corp",
      industry: "Financial Services",
      challenge: "Preventing sophisticated cyber attacks targeting customer financial data",
      solution: "Implemented VoydaShield Core with AI-powered threat detection and zero trust architecture",
      results: [
        "99.9% reduction in successful phishing attacks",
        "$10M+ in prevented breach costs",
        "Achieved SOC 2 Type II compliance",
        "50% reduction in security incident response time",
      ],
      metrics: {
        threats: "10K+ threats blocked monthly",
        uptime: "99.99% system uptime",
        roi: "340% ROI in first year",
      },
    },
    {
      company: "MedTech Healthcare Network",
      industry: "Healthcare",
      challenge: "Securing patient data across 50+ hospitals while maintaining HIPAA compliance",
      solution: "Deployed comprehensive security suite with continuous monitoring and data encryption",
      results: [
        "Zero data breaches in 2 years",
        "Full HIPAA compliance achieved",
        "Protected 5M+ patient records",
        "Reduced compliance audit time by 60%",
      ],
      metrics: {
        threats: "15K+ threats detected monthly",
        uptime: "100% compliance score",
        roi: "280% ROI in 18 months",
      },
    },
    {
      company: "TechVenture Startup",
      industry: "Technology",
      challenge: "Building security infrastructure from scratch for rapid growth",
      solution: "Scalable cloud security platform with automated threat response",
      results: [
        "Secured infrastructure for 10x growth",
        "Passed enterprise security audits",
        "Zero security incidents during scaling",
        "Enabled SOC 2 certification",
      ],
      metrics: {
        threats: "5K+ threats blocked monthly",
        uptime: "99.95% availability",
        roi: "450% ROI in first year",
      },
    },
    {
      company: "RetailMax E-commerce",
      industry: "Retail",
      challenge: "Protecting customer payment data and preventing fraud during peak seasons",
      solution: "Real-time fraud detection with AI-powered transaction monitoring",
      results: [
        "95% reduction in fraudulent transactions",
        "PCI DSS compliance maintained",
        "Protected 2M+ customer accounts",
        "Improved customer trust scores by 40%",
      ],
      metrics: {
        threats: "20K+ fraud attempts blocked monthly",
        uptime: "99.98% transaction security",
        roi: "520% ROI in first year",
      },
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
              Case Studies
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Real-world success stories from organizations that trust VoydaShield to protect their critical assets.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, i) => (
              <div key={i} className="glow-border p-8 rounded-lg bg-card/40 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold">{study.company}</h2>
                    </div>
                    <p className="text-secondary">{study.industry}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(study.metrics).map(([key, value], j) => (
                      <div key={j} className="glow-border p-3 rounded-lg bg-card/30 backdrop-blur-sm">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-foreground/60 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Challenge
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                      Solution
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Results
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {study.results.map((result, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 rounded-lg bg-card/20">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-primary/20">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                    Read Full Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center glow-border p-12 rounded-lg bg-card/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Join hundreds of organizations that have transformed their security posture with VoydaShield.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
