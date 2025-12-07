import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/blockito-logo.svg" alt="Blockito Logo" className="w-8 h-8" />
              <span className="font-bold text-lg">Blockito</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for blockchain development and consultation worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#smart-contracts"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Smart Contracts
                </Link>
              </li>
              <li>
                <Link
                  href="/services#frontend"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#backend"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Backend Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#devops"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <a
              href="mailto:raminramazanpour@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              raminramazanpour@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Blockito. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
