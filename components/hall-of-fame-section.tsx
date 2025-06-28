import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Bug, Shield, Star, Calendar, ExternalLink } from "lucide-react"

export function HallOfFameSection() {
  const achievements = [
    {
      icon: Bug,
      title: "CVE-2023-12345",
      category: "Critical Vulnerability",
      description: "Discovered critical SQL injection vulnerability in popular CMS affecting 100K+ websites",
      date: "2023",
      severity: "Critical",
      bounty: "$15,000",
      vendor: "Major Tech Corp",
    },
    {
      icon: Trophy,
      title: "Bug Bounty Hall of Fame",
      category: "Recognition",
      description: "Listed in Microsoft Security Hall of Fame for discovering authentication bypass vulnerability",
      date: "2023",
      severity: "High",
      bounty: "$8,500",
      vendor: "Microsoft",
    },
    {
      icon: Award,
      title: "DEF CON Speaker",
      category: "Conference",
      description: "Presented research on 'Advanced Web Application Attack Vectors' at DEF CON 31",
      date: "2023",
      severity: "Research",
      bounty: "Speaker",
      vendor: "DEF CON",
    },
    {
      icon: Shield,
      title: "CVE-2022-98765",
      category: "Zero-Day Discovery",
      description: "Identified remote code execution vulnerability in enterprise security software",
      date: "2022",
      severity: "Critical",
      bounty: "$25,000",
      vendor: "Security Vendor",
    },
    {
      icon: Star,
      title: "Google VRP Recognition",
      category: "Bug Bounty",
      description: "Multiple vulnerabilities found in Google services, recognized in Vulnerability Reward Program",
      date: "2022",
      severity: "High",
      bounty: "$12,000",
      vendor: "Google",
    },
    {
      icon: Bug,
      title: "OWASP Contributor",
      category: "Community",
      description: "Active contributor to OWASP Top 10 and Web Security Testing Guide documentation",
      date: "2021-2023",
      severity: "Contribution",
      bounty: "Volunteer",
      vendor: "OWASP",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "destructive"
      case "High":
        return "secondary"
      case "Research":
        return "outline"
      case "Contribution":
        return "default"
      default:
        return "outline"
    }
  }

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hall of Fame</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition, achievements, and contributions to the cybersecurity community through vulnerability research
            and responsible disclosure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant={getSeverityColor(achievement.severity) as any} className="text-xs">
                      {achievement.severity}
                    </Badge>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Vendor:</span>
                    <span className="ml-2">{achievement.vendor}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-muted-foreground">Reward:</span>
                    <span className="ml-2 font-semibold text-primary">{achievement.bounty}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <div className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Details
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">CVEs Discovered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$150K+</div>
              <div className="text-sm text-muted-foreground">Bug Bounty Earnings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Hall of Fame Entries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Conference Talks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
