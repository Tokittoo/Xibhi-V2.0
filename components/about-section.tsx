import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Palette, Zap } from "lucide-react";

export function AboutSection() {
  const whatIDo = [
    {
      title: "Defend",
      icon: Shield,
      description:
        "With 3 years of experience in ethical hacking and penetration testing, I identify vulnerabilities before attackers do. I build resilient systems that keep your data safe from breaches.",
    },
    {
      title: "Develop",
      icon: Code,
      description:
        "I turn complex ideas into functional, high-performance software. Whether it's mobile apps, web platforms, or scalable backend systems, I build solutions that work flawlessly under real-world demands.",
    },
    {
      title: "Design",
      icon: Palette,
      description:
        "I don't just write code - I craft systems. From intuitive user flows to scalable cloud infrastructures, I design software that's elegant under the hood and effortless to use. Your business logic gets translated into a future-proof technical blueprint.",
    },
    {
      title: "Hustle",
      icon: Zap,
      description:
        "There is no one thing. I hustle a lot to explore opportunities and learn various domains of science, technology and engineering to apply them in my work.",
    },
  ];

  return (
    <section id="About" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatIDo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission and Hustle Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience</h3>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Freelancer</span>
                </CardTitle>
                <div className="text-sm text-muted-foreground mt-2">
                  2023 - Present
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  Freelancing is one of the best ways to acquire amazing
                  knowledge and experience from the designers, developers and
                  hustlers all over the world, from sitting in my home. I always
                  freelance when I feel I reached an impasse, to get myself
                  moving.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Senior Director @SECURE WORLDZ</span>
                </CardTitle>
                <div className="text-sm text-muted-foreground mt-2">
                  2024 - Present
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  Where I was able to network, acquire experience and earn
                  knowledge. This company set the start of my professional
                  career. I dealt with various web development and security
                  technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
