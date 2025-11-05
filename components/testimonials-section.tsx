import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp Global",
    content:
      "VoydaShield has transformed our security infrastructure. The AI-powered threat detection caught vulnerabilities we didn't even know existed.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Security Director, FinanceHub",
    content:
      "The best investment we've made in cybersecurity. Their 24/7 monitoring and instant response have prevented multiple attacks.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "CEO, DataSecure Inc",
    content:
      "Outstanding service and cutting-edge technology. VoydaShield's quantum encryption gives us peace of mind for our sensitive data.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 bg-background/50">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            See what our clients say about protecting their digital assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all glow-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t border-primary/20 pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-secondary font-mono">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
