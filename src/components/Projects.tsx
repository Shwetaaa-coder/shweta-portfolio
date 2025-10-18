import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Healthy Habits Tracker",
    description: "Solo-built web app using HTML/CSS/JavaScript & Firebase Auth + Realtime DB to let users securely track daily habits with live syncing.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Realtime Database"],
    link: "https://healthy-habits-tracker-byshweta.netlify.app",
    featured: true
  },
  {
    title: "MemeHub",
    description: "Built meme-sharing platform with real-time updates (Firebase DB) and Cloudinary-powered uploads, deployed in a tight hackathon build. Masai School Hackathon Project.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Cloudinary"],
    link: "https://memeshubbyshweta.netlify.app",
    featured: true
  },
  {
    title: "Plantiful",
    description: "A web application designed to help users manage, track, and care for their indoor and outdoor plants effectively. The app allows users to add plants, set watering and fertilizing schedules, receive reminders, and get plant care tips.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Public APIs"],
    link: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-background" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recent projects showcasing my skills in full-stack development
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-gradient-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {project.link !== "#" && (
                  <Button 
                    variant="outline" 
                    className="w-fit gap-2"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
