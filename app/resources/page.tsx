import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookOpen, FileText, Video, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  const resources = [
    {
      category: "Whitepapers",
      icon: FileText,
      items: [
        { title: "The Future of AI in Cybersecurity", date: "March 2024", downloads: "2.3K" },
        { title: "Zero Trust Architecture Implementation Guide", date: "February 2024", downloads: "1.8K" },
        { title: "Cloud Security Best Practices 2024", date: "January 2024", downloads: "3.1K" },
      ],
    },
    {
      category: "Case Studies",
      icon: BookOpen,
      items: [
        { title: "How Fortune 500 Company Prevented $10M Breach", date: "March 2024", downloads: "1.5K" },
        { title: "Healthcare Provider Achieves HIPAA Compliance", date: "February 2024", downloads: "1.2K" },
        { title: "Financial Institution Modernizes Security Stack", date: "January 2024", downloads: "980" },
      ],
    },
    {
      category: "Webinars",
      icon: Video,
      items: [
        { title: "Threat Hunting in Modern Environments", date: "April 2024", downloads: "Live" },
        { title: "Building a Security Operations Center", date: "March 2024", downloads: "850" },
        { title: "Incident Response Best Practices", date: "February 2024", downloads: "1.1K" },
      ],
    },
  ]

  const blogPosts = [
    {
      title: "Understanding the Latest Ransomware Trends",
      excerpt: "An in-depth analysis of emerging ransomware tactics and how to protect your organization.",
      date: "April 15, 2024",
      readTime: "8 min read",
      category: "Threat Analysis",
    },
    {
      title: "5 Steps to Implement Zero Trust Security",
      excerpt: "A practical guide to transitioning your organization to a zero trust security model.",
      date: "April 10, 2024",
      readTime: "6 min read",
      category: "Best Practices",
    },
    {
      title: "AI-Powered Threat Detection Explained",
      excerpt: "How machine learning is revolutionizing cybersecurity threat detection and response.",
      date: "April 5, 2024",
      readTime: "10 min read",
      category: "Technology",
    },
    {
      title: "Cloud Security Compliance Checklist",
      excerpt: "Essential compliance requirements for securing cloud infrastructure across major platforms.",
      date: "March 28, 2024",
      readTime: "7 min read",
      category: "Compliance",
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
              Resources & Insights
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Expert knowledge, research, and insights to help you stay ahead of cyber threats.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, i) => (
              <div key={i} className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <resource.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">{resource.category}</h2>
                </div>
                <div className="space-y-4">
                  {resource.items.map((item, j) => (
                    <div key={j} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
                      <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                      <div className="flex items-center justify-between text-xs text-foreground/60">
                        <span>{item.date}</span>
                        <span className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {item.downloads}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6 border-primary/50 hover:bg-primary/10 bg-transparent">
                  View All {resource.category}
                </Button>
              </div>
            ))}
          </div>

          {/* Blog Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Latest from Our Blog</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, i) => (
                <div
                  key={i}
                  className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/60">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/60">{post.date}</span>
                    <Button variant="link" className="text-primary p-0 h-auto">
                      Read More →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center glow-border p-12 rounded-lg bg-card/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest threat intelligence, security insights, and product updates.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-primary/30 focus:border-primary outline-none"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
