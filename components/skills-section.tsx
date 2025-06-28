import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Cloud, Terminal } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Penetration Testing",
      icon: Shield,
      skills: [
        { name: "Web Application Testing", level: 95 },
        { name: "Network Penetration Testing", level: 90 },
        { name: "Mobile Application Testing", level: 85 },
        { name: "Wireless Security Testing", level: 80 },
      ],
    },
    {
      title: "Security Tools",
      icon: Terminal,
      skills: [
        { name: "Burp Suite", level: 95 },
        { name: "Metasploit", level: 90 },
        { name: "Nmap", level: 95 },
        { name: "Wireshark", level: 85 },
      ],
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "Bash/Shell", level: 85 },
        { name: "PowerShell", level: 80 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "Cloud Security",
      icon: Cloud,
      skills: [
        { name: "AWS Security", level: 85 },
        { name: "Azure Security", level: 80 },
        { name: "Container Security", level: 75 },
        { name: "Kubernetes Security", level: 70 },
      ],
    },
  ]

  const technologies = [
    "OWASP Top 10",
    "NIST Framework",
    "ISO 27001",
    "SANS Top 25",
    "Kali Linux",
    "Parrot OS",
    "OSINT",
    "Social Engineering",
    "Incident Response",
    "Threat Modeling",
    "Risk Assessment",
    "Compliance",
  ]

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set covering all aspects of cybersecurity and penetration testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50"
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Technologies & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
