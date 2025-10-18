import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Server, Cloud, Wrench, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Redux", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Databases & Cloud",
    icon: Cloud,
    skills: ["MongoDB", "Firebase", "MySQL", "Microsoft Azure"]
  },
  {
    title: "Tools & Version Control",
    icon: Wrench,
    skills: ["Git", "GitHub", "Visual Studio Code", "npm"]
  },
  {
    title: "Other",
    icon: Lightbulb,
    skills: ["Data Structures & Algorithms", "OOPs", "Analytical Skills"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-background" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Proficient in modern web technologies and cloud platforms
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
