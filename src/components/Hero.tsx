import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin, Github, Phone, FileText } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6 py-20 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <div className="flex justify-center md:justify-start">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 ring-4 ring-primary/20">
              <AvatarImage src={profileImage} alt="Shweta Bangar" />
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
          </div>

          {/* Right Side - Info */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Available for new opportunities</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Shweta Bangar
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-medium">
              Full Stack Web Developer
            </p>
            
            <p className="text-base text-muted-foreground mb-8">
              Passionate about building scalable web applications with modern technologies. 
              Specialized in React, Node.js, and cloud solutions.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
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
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                asChild
              >
                <a href="https://www.linkedin.com/in/shweta-bangar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                asChild
              >
                <a href="https://github.com/Shwetaaa-coder" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:shwetavanve8@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                shwetavanve8@gmail.com
              </a>
              <a href="tel:+917498924720" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91-7498924720
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
