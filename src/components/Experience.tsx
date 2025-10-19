import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Full Stack Web Development",
    organization: "Masai School",
    location: "Bengaluru, India",
    period: "02/2025 – Present",
    description: "Currently pursuing comprehensive full-stack web development training"
  },
  {
    title: "Azure Cloud Training",
    organization: "Ethan's Tech",
    location: "Pune, India",
    period: "09/2022 – 10/2022",
    description: "Completed specialized training in Microsoft Azure cloud services"
  },
  {
    title: "Bachelor of Computer Engineering",
    organization: "G.H. Raisoni College of Engineering and Management",
    location: "Ahmednagar",
    period: "Graduated: June 2021",
    description: "CGPA: 7.56/10"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          My educational background and training
        </p>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {edu.organization}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-foreground/80">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
