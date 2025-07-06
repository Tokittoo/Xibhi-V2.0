import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Clock, Shield } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to strengthen your security posture? Let's discuss your cybersecurity needs and how I can help protect
            your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">security@example.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Remote / Global</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Networks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn Profile
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Portfolio
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Security Research
                </Button>
              </CardContent>
            </Card>

            
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="your.email@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input id="company" placeholder="Your company name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Needed
                      </label>
                      <Input id="service" placeholder="e.g., Penetration Testing" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your security requirements, timeline, and any specific concerns..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="nda" className="rounded" />
                    <label htmlFor="nda" className="text-sm text-muted-foreground">
                      I'm willing to sign an NDA for sensitive project discussions
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
