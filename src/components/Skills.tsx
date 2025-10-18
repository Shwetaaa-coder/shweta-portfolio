import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Redux", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "Firebase", "MySQL", "Microsoft Azure"]
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "Visual Studio Code", "npm"]
  },
  {
    title: "Other",
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
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
