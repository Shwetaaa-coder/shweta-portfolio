import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    type: "Certificate"
  },
  {
    title: "Xto10X Hackathon – Edition 4.0",
    issuer: "Xto10X",
    type: "Hackathon"
  },
  {
    title: "ICITC Conference 2021",
    issuer: "Masai School",
    type: "Conference"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle" id="certifications">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Professional certifications and recognized achievements
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">
                {cert.issuer}
              </p>
              <p className="text-xs text-muted-foreground">
                {cert.type}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
