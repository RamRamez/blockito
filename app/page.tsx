import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Code2, Cog, Globe, Server, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Blockito - Full-Stack Blockchain Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Transform Your Business with <span className="text-primary">Blockchain Technology</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
              We are a team of expert developers, DevOps engineers, project managers, and testers ready to onboard your
              company to the blockchain era. From consultation to full app development.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Complete blockchain development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Contract Development</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Secure, audited, and optimized smart contracts for Ethereum, Solana, and other blockchain platforms.
                </p>
                <Link
                  href="/services#smart-contracts"
                  className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Modern, responsive web3 interfaces using React, Next.js, and the latest frontend technologies.
                </p>
                <Link
                  href="/services#frontend"
                  className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Server className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Robust backend systems with Node.js, Python, and database integration for your dApps.
                </p>
                <Link
                  href="/services#backend"
                  className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Cog className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">DevOps & Infrastructure</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  CI/CD pipelines, cloud deployment, and infrastructure management for scalable blockchain applications.
                </p>
                <Link
                  href="/services#devops"
                  className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Project Management</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Dedicated project managers ensuring timely delivery and clear communication throughout development.
                </p>
                <Link
                  href="/services#management"
                  className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Consultation Services</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Expert guidance on blockchain strategy, technology selection, and implementation roadmaps.
                </p>
                <Link
                  href="/services#consultation"
                  className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We deliver end-to-end blockchain solutions with a proven track record of success across global markets.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Full-Stack Expertise</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      From smart contracts to DevOps, we handle every aspect of blockchain development
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Global Experience</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Successfully delivered projects for clients across North America, Europe, and Asia
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Security First</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Rigorous testing and security audits ensure your blockchain applications are bulletproof
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Agile Methodology</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Iterative development with regular updates keeps you in control of your project
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/blockchain-network-visualization-nodes-connected.jpg"
                alt="Blockchain Network"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Ready to Build Your Blockchain Solution?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Let's discuss your project and create a roadmap to bring your blockchain vision to life
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
