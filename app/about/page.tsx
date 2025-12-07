import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Chen",
      role: "Lead Smart Contract Developer",
      expertise: "Solidity, Rust, Security Audits",
      image: "/professional-developer.png",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      expertise: "React, Next.js, Web3 Integration",
      image: "/professional-developer.png",
    },
    {
      name: "Michael Rodriguez",
      role: "Backend Architect",
      expertise: "Node.js, Python, Microservices",
      image: "/professional-developer.png",
    },
    {
      name: "Emily Wang",
      role: "DevOps Engineer",
      expertise: "AWS, Docker, Kubernetes",
      image: "/professional-developer.png",
    },
    {
      name: "David Park",
      role: "Project Manager",
      expertise: "Agile, Scrum, Team Leadership",
      image: "/professional-developer.png",
    },
    {
      name: "Jessica Martinez",
      role: "QA Lead",
      expertise: "Testing, Automation, Quality Assurance",
      image: "/professional-developer.png",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">About Us</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              We're a passionate team of blockchain experts dedicated to bringing innovative Web3 solutions to life.
              With years of combined experience, we transform complex blockchain concepts into successful applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To democratize blockchain technology by making it accessible, secure, and practical for businesses
                worldwide. We believe blockchain has the power to transform industries, and we're here to guide
                companies through that transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our founding, we've helped dozens of companies successfully launch blockchain projects, from DeFi
                platforms to NFT marketplaces, and everything in between.
              </p>
            </div>
            <div>
              <img src="/blockchain-team-collaboration.jpg" alt="Team Collaboration" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We strive for excellence in every project, delivering high-quality code and exceptional results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We work closely with our clients as partners, ensuring transparency and alignment throughout.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We stay at the forefront of blockchain technology, constantly learning and adopting new solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Security is non-negotiable. Every line of code undergoes rigorous testing and security audits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Expertise</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Blockchain Platforms</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Ethereum & EVM-compatible chains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Solana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Binance Smart Chain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Polygon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Avalanche</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Near Protocol</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Industries We Serve</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Decentralized Finance (DeFi)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>NFTs & Digital Art</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Supply Chain & Logistics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Gaming & Metaverse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Real Estate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Healthcare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">30+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Team Members</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">5+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
