import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Cloud, Terminal, Database, AppWindowIcon } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Skills",
      icon: Code,
      skills: [
        { name: "C", level: 80 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
        { name: "PHP", level: 75 },
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 80 },
      ],
    },
    {
      title: "Application Security",
      icon: Shield,
      skills: [
        { name: "Secure Coding Practices", level: 60 },
        { name: "Web App Pentesting", level: 80 },
        { name: "Network Pentesting", level: 65 },
        { name: "Mobile App Pentesting", level: 60 },
        { name: "Authentication & Authorization", level: 60 },
        { name: "API Security", level: 50 },
      ],
    },
    {
      title: "Database Skills",
      icon: Database,
      skills: [
        { name: "MySQL", level: 60 },
        { name: "SQLite", level: 55 },
        { name: "Redis", level: 45 },
        { name: "MongoDB", level: 45 },
      ],
    },
    {
      title: "Application Development",
      icon: AppWindowIcon,
      skills: [
        { name: "Web Applications", level: 85 },
        { name: "Desktop Softwares (Windows and Linux)", level: 65 },
        { name: "Android", level: 50 },
        { name: "Sockets and AMQP", level: 45 },
      ],
    },
  ]



  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
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

        
      </div>
    </section>
  )
}
