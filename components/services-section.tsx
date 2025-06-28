import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Search, Users, Cloud, Smartphone, Network, AlertTriangle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Web Application Penetration Testing",
      description:
        "Comprehensive security assessment of web applications including OWASP Top 10 vulnerabilities, authentication bypasses, and business logic flaws.",
      features: ["Manual Testing", "Automated Scanning", "Source Code Review", "Detailed Reporting"],
    },
    {
      icon: Network,
      title: "Network Penetration Testing",
      description:
        "Internal and external network security assessments to identify vulnerabilities in network infrastructure and services.",
      features: ["Port Scanning", "Service Enumeration", "Privilege Escalation", "Lateral Movement"],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Security",
      description: "Security testing for iOS and Android applications including static and dynamic analysis.",
      features: ["OWASP Mobile Top 10", "API Security", "Data Storage Analysis", "Runtime Protection"],
    },
    {
      icon: Cloud,
      title: "Cloud Security Assessment",
      description:
        "Comprehensive security review of cloud infrastructure and configurations across AWS, Azure, and GCP.",
      features: ["Configuration Review", "IAM Assessment", "Container Security", "Compliance Check"],
    },
    {
      icon: Search,
      title: "Vulnerability Research",
      description: "In-depth research to discover zero-day vulnerabilities and develop proof-of-concept exploits.",
      features: ["0-day Discovery", "Exploit Development", "CVE Coordination", "Security Advisories"],
    },
    {
      icon: Users,
      title: "Security Training & Consulting",
      description:
        "Customized security training programs and consulting services for development teams and organizations.",
      features: ["Secure Coding", "Security Awareness", "Threat Modeling", "Security Architecture"],
    },
  ]

  return (
    <section id="services" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive cybersecurity services tailored to protect your organization from evolving threats and
            vulnerabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 group cursor-pointer"
            >
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Request Security Assessment
          </Button>
        </div>
      </div>
    </section>
  )
}
