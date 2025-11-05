import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                VoydaShield
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smart data protection and cybersecurity technologies
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  AI Protection
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Monitoring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 VoydaShield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
