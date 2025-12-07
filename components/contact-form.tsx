"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <Card className="border-2">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" placeholder="john@company.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Your Company" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+1 (234) 567-8900" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interested In *</Label>
            <select
              id="service"
              name="service"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select a service</option>
              <option value="smart-contracts">Smart Contract Development</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="devops">DevOps & Infrastructure</option>
              <option value="full-stack">Full-Stack Development</option>
              <option value="consultation">Consultation Services</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Estimated Budget</Label>
            <select
              id="budget"
              name="budget"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select budget range</option>
              <option value="10k-25k">$10k - $25k</option>
              <option value="25k-50k">$25k - $50k</option>
              <option value="50k-100k">$50k - $100k</option>
              <option value="100k+">$100k+</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project, timeline, and any specific requirements..."
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
