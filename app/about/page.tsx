import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About VoydaShield
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Leading the future of cybersecurity with AI-powered protection and innovative threat detection
              technologies.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="glow-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                To protect organizations worldwide from evolving cyber threats through cutting-edge AI technology,
                real-time threat intelligence, and proactive security solutions. We believe in making enterprise-grade
                cybersecurity accessible to businesses of all sizes.
              </p>
            </div>
            <div className="glow-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                A world where every organization can operate securely in the digital realm, free from the fear of cyber
                attacks. We envision a future where AI-driven security is the standard, not the exception, protecting
                critical infrastructure and sensitive data globally.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="text-center glow-border p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Enterprise Clients</div>
            </div>
            <div className="text-center glow-border p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
              <div className="text-foreground/70">Threat Detection</div>
            </div>
            <div className="text-center glow-border p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-foreground/70">Monitoring</div>
            </div>
            <div className="text-center glow-border p-6 rounded-lg bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-foreground/70">Countries</div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Security First</h3>
                <p className="text-foreground/70 text-sm">
                  Every decision prioritizes the protection of our clients' data and infrastructure.
                </p>
              </div>
              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-foreground/70 text-sm">
                  Constantly evolving our technology to stay ahead of emerging threats.
                </p>
              </div>
              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Precision</h3>
                <p className="text-foreground/70 text-sm">
                  Accurate threat detection with minimal false positives for optimal efficiency.
                </p>
              </div>
              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-foreground/70 text-sm">
                  Committed to delivering world-class cybersecurity solutions and support.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">Leadership Team</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-12">
              Our team combines decades of experience in cybersecurity, artificial intelligence, and enterprise
              software.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Sarah Chen", role: "CEO & Founder", specialty: "AI Security" },
                { name: "Michael Rodriguez", role: "CTO", specialty: "Threat Intelligence" },
                { name: "Emily Watson", role: "VP of Engineering", specialty: "Cloud Security" },
              ].map((member, i) => (
                <div key={i} className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
