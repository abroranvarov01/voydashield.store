import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Have questions about our security solutions? Our team is here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glow-border p-8 rounded-lg bg-card/40 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-primary/30 focus:border-primary outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-primary/30 focus:border-primary outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-primary/30 focus:border-primary outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-primary/30 focus:border-primary outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-background/50 border border-primary/30 focus:border-primary outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Sales Question</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-primary/30 focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 glow-border">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-foreground/80 text-sm">contact@voydashield.com</div>
                      <div className="text-foreground/80 text-sm">support@voydashield.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 glow-border">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-foreground/80 text-sm">+1 (555) 123-4567</div>
                      <div className="text-foreground/80 text-sm">+1 (555) 987-6543</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 glow-border">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Headquarters</div>
                      <div className="text-foreground/80 text-sm">
                        123 Cyber Security Blvd
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 glow-border">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <div className="text-foreground/80 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                        <br />
                        24/7 Emergency Support Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Global Offices</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-primary">London, UK</div>
                    <div className="text-foreground/70">+44 20 7123 4567</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Singapore</div>
                    <div className="text-foreground/70">+65 6123 4567</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Tokyo, Japan</div>
                    <div className="text-foreground/70">+81 3 1234 5678</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Sydney, Australia</div>
                    <div className="text-foreground/70">+61 2 1234 5678</div>
                  </div>
                </div>
              </div>

              <div className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                <p className="text-foreground/80 text-sm mb-4">
                  For critical security incidents, our emergency response team is available 24/7/365.
                </p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white glow-border">
                  Emergency Hotline: +1 (555) 911-HELP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
