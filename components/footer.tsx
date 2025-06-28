import { Shield, Linkedin, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">SecureOps</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional cybersecurity services and penetration testing to protect your digital assets.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Penetration Testing</li>
              <li>Vulnerability Assessment</li>
              <li>Security Consulting</li>
              <li>Incident Response</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Application Security</li>
              <li>Network Security</li>
              <li>Cloud Security</li>
              <li>Mobile Security</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>security@example.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Remote / Global</li>
              <li>24/7 Emergency Response</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SecureOps. All rights reserved. |
            <span className="ml-1">Ethical hacking and responsible disclosure practices.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
