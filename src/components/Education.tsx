import { Card } from "@/components/ui/card";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "Full Stack Web Development",
    institution: "Masai School",
    location: "Bengaluru, India",
    period: "02/2025 – Present",
    type: "Immersive Program"
  },
  {
    degree: "Azure Cloud Training",
    institution: "Ethan's Tech",
    location: "Pune, India",
    period: "09/2022 – 10/2022",
    type: "Cloud Training"
  },
  {
    degree: "Bachelor of Computer Engineering",
    institution: "G.H. Raisoni College of Engineering and Management",
    location: "Ahmednagar, India",
    period: "06/2021",
    type: "Graduation",
    details: "Graduated: June 2021 | CGPA: 7.56/10"
  }
];

const Education = () => {
  return (
    <section className="py-12 px-6 bg-background" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Academic background and continuous learning milestones
        </p>

        <div className="space-y-6">
          {education.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary/60"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit">
                      {item.type}
                    </span>
                  </div>

                  <p className="text-lg font-medium text-foreground/90 mb-3">{item.institution}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {item.details && (
                    <p className="mt-3 text-sm text-muted-foreground">{item.details}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
