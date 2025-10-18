import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Web Development Intern",
    organization: "A2Z Infotech",
    location: "Ahmednagar",
    period: "02/2021 – 07/2021",
    description: "Developed and maintained responsive web applications using HTML, CSS, JavaScript & basic backend under senior guidance, gaining real-world full-stack and problem-solving experience."
  },
  {
    type: "education",
    title: "Full Stack Web Development",
    organization: "Masai School",
    location: "Bengaluru, India",
    period: "02/2025 – Present",
    description: "Currently pursuing comprehensive full-stack web development training"
  },
  {
    type: "education",
    title: "Azure Cloud Training",
    organization: "Ethan's Tech",
    location: "Pune, India",
    period: "09/2022 – 10/2022",
    description: "Completed specialized training in Microsoft Azure cloud services"
  },
  {
    type: "education",
    title: "Bachelor of Computer Engineering",
    organization: "G.H. Raisoni College of Engineering and Management",
    location: "Ahmednagar",
    period: "Graduated: June 2021",
    description: "CGPA: 7.56/10"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          My professional journey and educational background
        </p>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {exp.organization}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-foreground/80">
                    {exp.description}
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
