import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="container mx-auto z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 border-2 border-primary/50 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md glow-border">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Protect Your Business?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Get a personalized consultation and discover how VoydaShield can protect your data
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-input border-primary/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-border-purple whitespace-nowrap">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">Join 10,000+ companies that trust VoydaShield</p>
          </div>
        </div>
      </div>
    </section>
  )
}
