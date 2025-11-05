import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VoydaShield
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/solutions" className="text-foreground/80 hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/products" className="text-foreground/80 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/threat-intelligence" className="text-foreground/80 hover:text-primary transition-colors">
              Threat Intel
            </Link>
            <Link href="/resources" className="text-foreground/80 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/case-studies" className="text-foreground/80 hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">Get Started</Button>
        </div>
      </div>
    </nav>
  )
}
