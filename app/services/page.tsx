import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Code2,
  Server,
  Shield,
  Cog,
  Users,
  Globe,
  CheckCircle,
  Workflow,
  Database,
  TestTube,
  FileCode,
  Blocks,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Our Services</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Comprehensive blockchain development services to transform your business. From smart contracts to
              full-stack applications, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Contract Development */}
      <section id="smart-contracts" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Smart Contract Development</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We develop secure, gas-optimized smart contracts for various blockchain platforms. Our contracts undergo
                rigorous testing and security audits to ensure they're bulletproof.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>ERC-20, ERC-721, ERC-1155 token development</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>DeFi protocols and liquidity pools</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>NFT marketplaces and minting platforms</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>DAO governance systems</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Cross-chain bridges and protocols</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Discuss Your Smart Contract</Link>
              </Button>
            </div>
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Solidity</p>
                      <p className="text-sm text-muted-foreground">Ethereum, BSC, Polygon</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Rust</p>
                      <p className="text-sm text-muted-foreground">Solana, Near</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Vyper</p>
                      <p className="text-sm text-muted-foreground">Ethereum</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">Move</p>
                      <p className="text-sm text-muted-foreground">Aptos, Sui</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-3">Testing & Security</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={16} />
                        <span>Hardhat & Foundry testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={16} />
                        <span>Security audits & formal verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={16} />
                        <span>Gas optimization</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Development */}
      <section id="frontend" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <Code2 className="text-primary mb-3" size={28} />
                    <h3 className="font-semibold mb-2">React & Next.js</h3>
                    <p className="text-sm text-muted-foreground">Modern, performant web applications</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <Blocks className="text-primary mb-3" size={28} />
                    <h3 className="font-semibold mb-2">Web3 Integration</h3>
                    <p className="text-sm text-muted-foreground">Wallet connectivity & blockchain interaction</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <FileCode className="text-primary mb-3" size={28} />
                    <h3 className="font-semibold mb-2">TypeScript</h3>
                    <p className="text-sm text-muted-foreground">Type-safe, maintainable code</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <Workflow className="text-primary mb-3" size={28} />
                    <h3 className="font-semibold mb-2">State Management</h3>
                    <p className="text-sm text-muted-foreground">Redux, Zustand, Context API</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frontend Development</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Build beautiful, responsive Web3 interfaces that your users will love. We specialize in creating
                intuitive dApp frontends with seamless wallet integration.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Wallet integration (MetaMask, WalletConnect, Phantom)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Real-time blockchain data display</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Responsive design for all devices</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Performance optimization</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Start Your Frontend Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Development */}
      <section id="backend" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Server className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Backend Development</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Robust backend systems that power your blockchain applications. We build scalable APIs, indexers, and
                off-chain services to support your dApps.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>RESTful and GraphQL APIs</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Blockchain indexers and event listeners</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Database design and optimization</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Microservices architecture</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Authentication and authorization</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Build Your Backend</Link>
              </Button>
            </div>
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">Tech Stack</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">Languages & Frameworks</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">NestJS</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">FastAPI</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">Express</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Databases</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">PostgreSQL</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">MongoDB</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">Redis</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">Supabase</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Blockchain Integration</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">ethers.js</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">web3.js</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">The Graph</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-sm">Alchemy</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps */}
      <section id="devops" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">DevOps Services</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Cog className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">CI/CD Pipelines</p>
                        <p className="text-sm text-muted-foreground">
                          Automated testing, building, and deployment workflows
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Server className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Cloud Infrastructure</p>
                        <p className="text-sm text-muted-foreground">AWS, GCP, Azure deployment and management</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Workflow className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Container Orchestration</p>
                        <p className="text-sm text-muted-foreground">Docker, Kubernetes, and container management</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Shield className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Security & Monitoring</p>
                        <p className="text-sm text-muted-foreground">Real-time monitoring, logging, and alerting</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Cog className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">DevOps & Infrastructure</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Streamline your development workflow and ensure reliable deployments. We set up robust CI/CD pipelines
                and scalable cloud infrastructure for your blockchain projects.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Automated deployment pipelines</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Infrastructure as Code (Terraform, CloudFormation)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Load balancing and auto-scaling</span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span>Backup and disaster recovery</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Setup Your Infrastructure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete support for your blockchain journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 id="management" className="text-xl font-semibold mb-3 scroll-mt-20">
                  Project Management
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Dedicated project managers keep your project on track with regular updates, sprint planning, and clear
                  communication.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>Agile methodology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>Regular sprint reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>Transparent reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TestTube className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance & Testing</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive testing ensures your blockchain application works flawlessly across all scenarios and
                  edge cases.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>Unit & integration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>Smart contract audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>End-to-end testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 id="consultation" className="text-xl font-semibold mb-3 scroll-mt-20">
                  Consultation Services
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Expert guidance on blockchain strategy, technology selection, architecture design, and implementation
                  roadmaps.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>Technology assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>Architecture planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>Implementation roadmap</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss which services are right for your blockchain vision
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
