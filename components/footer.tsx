import { Linkedin, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Sibhi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional cybersecurity services and penetration testing to protect your digital assets.
            </p>
          </div>

          <div className="flex space-x-4">
            <Linkedin href="https://www.linkedin.com/in/sibhibalamurugan"className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Github href="https://www.github.com/xibhi"className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Twitter href="https://www.x.com/xibhi_" className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
