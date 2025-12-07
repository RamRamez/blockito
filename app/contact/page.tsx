import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Get In Touch</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Ready to start your blockchain journey? We're here to help. Fill out the form below and our team will get
              back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're available across multiple time zones to support your global blockchain needs. Whether you're
                  just starting out or looking to scale, we're here to help.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:raminramazanpour@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          raminramazanpour@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">For general inquiries</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Email</h3>
                        <a
                          href="mailto:raminramazanpour@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          raminramazanpour@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">For partnership opportunities</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+1234567890"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (234) 567-8900
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-6pm EST</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Headquarters</h3>
                        <p className="text-muted-foreground">123 Blockchain Street</p>
                        <p className="text-muted-foreground">San Francisco, CA 94102</p>
                        <p className="text-muted-foreground">United States</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Working Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9am - 6pm EST</p>
                        <p className="text-muted-foreground">Saturday: 10am - 4pm EST</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What is your typical project timeline?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Project timelines vary based on complexity, but most projects take 2-6 months from initial
                    consultation to launch. We provide detailed timelines during our discovery phase and keep you
                    updated throughout development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Do you work with startups or only established companies?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We work with both startups and established enterprises. Whether you're launching your first dApp or
                    integrating blockchain into existing systems, we tailor our services to your needs and budget.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What blockchain platforms do you support?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We support all major blockchain platforms including Ethereum, Solana, Binance Smart Chain, Polygon,
                    Avalanche, and more. We'll help you choose the best platform based on your specific requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you provide post-launch support?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! We offer comprehensive post-launch support including maintenance, updates, monitoring, and
                    scaling assistance. Our team is available 24/7 for critical issues.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">How do you ensure security for smart contracts?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Security is our top priority. All smart contracts undergo rigorous testing, automated security
                    analysis, and manual code reviews. We can also arrange third-party security audits before
                    deployment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
