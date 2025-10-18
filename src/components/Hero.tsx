import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
          <span className="text-primary font-semibold">Available for new opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Shweta Shivam Bangar
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground/80 mb-4 font-medium">
          Full Stack Web Developer
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate about building scalable web applications with modern technologies. 
          Specialized in React, Node.js, and cloud solutions.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2 shadow-glow"
            asChild
          >
            <a href="mailto:shwetavanve8@gmail.com">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            asChild
          >
            <a href="https://www.linkedin.com/in/shweta-bangar" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            asChild
          >
            <a href="https://github.com/Shwetaaa-coder" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="mailto:shwetavanve8@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            shwetavanve8@gmail.com
          </a>
          <a href="tel:+917498924720" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +91-7498924720
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
