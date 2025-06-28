import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Download, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Professional
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Cybersecurity Researcher & <span className="text-primary">Penetration Tester</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized in identifying vulnerabilities, conducting security assessments, and strengthening digital
              defenses for organizations worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 cursor-pointer">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 cursor-pointer">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Security Assessments</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-border transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 cursor-pointer">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Vulnerabilities Found</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
