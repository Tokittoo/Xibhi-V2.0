import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Award, Target, Download, ExternalLink, MapPin, Calendar, Shield } from "lucide-react"

export function AboutSection() {
  const certifications = [
    { name: "OSCP", year: "2023", issuer: "Offensive Security" },
    { name: "CEH", year: "2022", issuer: "EC-Council" },
    { name: "CISSP", year: "2021", issuer: "ISC²" },
    { name: "GCIH", year: "2022", issuer: "SANS" },
    { name: "GPEN", year: "2023", issuer: "SANS" },
  ]

  const experience = [
    {
      title: "Senior Penetration Tester",
      company: "CyberSec Solutions",
      period: "2021 - Present",
      description: "Lead penetration testing engagements for Fortune 500 companies",
    },
    {
      title: "Security Researcher",
      company: "Independent",
      period: "2020 - Present",
      description: "Vulnerability research and responsible disclosure programs",
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureNet Corp",
      period: "2019 - 2021",
      description: "Security monitoring, incident response, and threat hunting",
    },
  ]

  return (
    <section id="about" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate cybersecurity professional with extensive experience in penetration testing, vulnerability
            research, and security consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Professional Image and Quick Info */}
          <div className="lg:col-span-1">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="p-6 text-center space-y-6">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Professional headshot"
                    className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Alex Rodriguez</h3>
                  <p className="text-muted-foreground">Senior Penetration Tester</p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    Remote / Global
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View LinkedIn
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-xs text-muted-foreground">Years Exp.</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-xs text-muted-foreground">Assessments</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Background */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Professional Background</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 years of experience in cybersecurity, I specialize in identifying and exploiting security
                  vulnerabilities across web applications, networks, and infrastructure. My expertise spans from OWASP
                  Top 10 vulnerabilities to advanced persistent threat (APT) simulation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I hold multiple industry certifications and have successfully conducted security assessments for
                  Fortune 500 companies, helping them strengthen their security posture and protect against cyber
                  threats. My research has led to the discovery of multiple CVEs and recognition in various bug bounty
                  programs.
                </p>
              </CardContent>
            </Card>

            {/* Experience Timeline */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Professional Experience</h3>
                </div>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4 last:pb-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <Badge variant="outline" className="text-xs w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="text-sm text-primary font-medium mb-1">{exp.company}</div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Certifications & Credentials</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-semibold">{cert.name}</div>
                        <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                      </div>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">Mission</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    To help organizations build robust security defenses through comprehensive testing, research, and
                    strategic security guidance.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">Approach</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Methodical, thorough, and client-focused security assessments with actionable recommendations and
                    clear remediation guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
