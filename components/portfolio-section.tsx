import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Shield, Bug } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform Security Assessment",
      category: "Web Application Testing",
      description:
        "Comprehensive security assessment of a major e-commerce platform handling millions of transactions. Identified critical vulnerabilities including SQL injection and authentication bypasses.",
      impact: "Prevented potential data breach affecting 2M+ users",
      technologies: ["OWASP Top 10", "Burp Suite", "SQLMap", "Custom Scripts"],
      severity: "Critical",
      findings: 15,
    },
    {
      title: "Financial Institution Network Penetration Test",
      category: "Network Security",
      description:
        "Internal network penetration test for a regional bank, simulating advanced persistent threat scenarios and testing incident response capabilities.",
      impact: "Improved security posture and compliance rating",
      technologies: ["Metasploit", "Cobalt Strike", "PowerShell Empire", "Nmap"],
      severity: "High",
      findings: 8,
    },
    {
      title: "Mobile Banking App Security Review",
      category: "Mobile Security",
      description:
        "Security assessment of iOS and Android banking applications, focusing on data protection, API security, and runtime application self-protection.",
      impact: "Enhanced mobile security controls implementation",
      technologies: ["OWASP Mobile", "Frida", "MobSF", "Burp Suite"],
      severity: "Medium",
      findings: 12,
    },
    {
      title: "Cloud Infrastructure Security Audit",
      category: "Cloud Security",
      description:
        "Comprehensive security review of AWS infrastructure for a healthcare provider, ensuring HIPAA compliance and identifying misconfigurations.",
      impact: "Achieved full HIPAA compliance certification",
      technologies: ["AWS Security Hub", "CloudTrail", "Config", "Inspector"],
      severity: "High",
      findings: 6,
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "destructive"
      case "High":
        return "secondary"
      case "Medium":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <section id="portfolio" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio & Case Studies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected security assessments and research projects demonstrating expertise across various industries and
            attack vectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <Badge variant={getSeverityColor(project.severity) as any}>{project.severity}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Impact:</span>
                    <span className="text-sm text-muted-foreground">{project.impact}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Bug className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Findings:</span>
                    <span className="text-sm text-muted-foreground">{project.findings} vulnerabilities identified</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All case studies are anonymized and sanitized to protect client confidentiality.
          </p>
          <Button variant="outline" size="lg">
            <ExternalLink className="w-5 h-5 mr-2" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
