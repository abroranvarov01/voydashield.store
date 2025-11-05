import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AlertTriangle, TrendingUp, Globe, Activity } from "lucide-react"

export default function ThreatIntelligencePage() {
  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Threat Intelligence
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Real-time insights into the global threat landscape powered by AI and machine learning.
            </p>
          </div>

          {/* Live Threat Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm text-center">
              <AlertTriangle className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">1,247</div>
              <div className="text-sm text-foreground/70">Active Threats Today</div>
            </div>
            <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm text-center">
              <TrendingUp className="h-10 w-10 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-secondary mb-1">98.7%</div>
              <div className="text-sm text-foreground/70">Detection Rate</div>
            </div>
            <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm text-center">
              <Globe className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-1">150+</div>
              <div className="text-sm text-foreground/70">Countries Monitored</div>
            </div>
            <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm text-center">
              <Activity className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-foreground/70">Real-Time Updates</div>
            </div>
          </div>

          {/* Recent Threats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Recent Threat Alerts</h2>
            <div className="space-y-4">
              {[
                {
                  severity: "Critical",
                  type: "Ransomware",
                  name: "DarkCrypt 2.0",
                  description: "New ransomware variant targeting healthcare sector",
                  time: "2 hours ago",
                },
                {
                  severity: "High",
                  type: "Phishing",
                  name: "CredHarvest Campaign",
                  description: "Sophisticated phishing campaign impersonating major banks",
                  time: "5 hours ago",
                },
                {
                  severity: "High",
                  type: "Zero-Day",
                  name: "CVE-2024-XXXX",
                  description: "Critical vulnerability in popular web framework",
                  time: "8 hours ago",
                },
                {
                  severity: "Medium",
                  type: "Malware",
                  name: "InfoStealer.Gen",
                  description: "Information stealing malware spreading via email attachments",
                  time: "12 hours ago",
                },
              ].map((threat, i) => (
                <div
                  key={i}
                  className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          threat.severity === "Critical"
                            ? "bg-red-500/20 text-red-400"
                            : threat.severity === "High"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {threat.severity}
                      </span>
                      <span className="text-sm text-foreground/60">{threat.type}</span>
                    </div>
                    <span className="text-sm text-foreground/50">{threat.time}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{threat.name}</h3>
                  <p className="text-foreground/80">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Intelligence Sources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Intelligence Sources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Global Honeypots</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  Network of decoy systems capturing real-world attack patterns and techniques.
                </p>
                <div className="text-2xl font-bold text-primary">500+ Nodes</div>
              </div>
              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Dark Web Monitoring</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  Continuous monitoring of underground forums and marketplaces for emerging threats.
                </p>
                <div className="text-2xl font-bold text-secondary">1000+ Sources</div>
              </div>
              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Partner Network</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  Collaboration with security researchers and organizations worldwide.
                </p>
                <div className="text-2xl font-bold text-accent">200+ Partners</div>
              </div>
            </div>
          </div>

          {/* Threat Categories */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Threat Categories We Track</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Ransomware",
                "Phishing",
                "Malware",
                "Zero-Day Exploits",
                "DDoS Attacks",
                "Data Breaches",
                "Insider Threats",
                "Supply Chain Attacks",
                "APT Groups",
                "Cryptojacking",
                "IoT Threats",
                "Cloud Vulnerabilities",
              ].map((category, i) => (
                <div
                  key={i}
                  className="glow-border p-4 rounded-lg bg-card/30 backdrop-blur-sm text-center hover:bg-card/50 transition-all"
                >
                  <span className="font-semibold">{category}</span>
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
