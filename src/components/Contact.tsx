import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-12 px-6 bg-background" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:shwetavanve8@gmail.com"
            className="flex items-center gap-4 p-6 rounded-lg bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="font-medium">shwetavanve8@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="tel:+917498924720"
            className="flex items-center gap-4 p-6 rounded-lg bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="font-medium">+91-7498924720</p>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/shweta-bangar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-lg bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
              <p className="font-medium">linkedin.com/in/shweta-bangar</p>
            </div>
          </a>
          
          <a 
            href="https://github.com/Shwetaaa-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-lg bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">GitHub</p>
              <p className="font-medium">github.com/Shwetaaa-coder</p>
            </div>
          </a>
        </div>
        
        <Button 
          size="lg"
          className="shadow-glow"
          asChild
        >
          <a href="mailto:shwetavanve8@gmail.com">
            <Mail className="w-5 h-5 mr-2" />
            Send me an email
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
