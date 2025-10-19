import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import masaiCertificate from "@/assets/masai-certificate.jpg";

const certifications = [
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    type: "Certificate",
    link: "/azure-certificate.pdf",
    image: null
  },
  {
    title: "Xto10X Hackathon – Edition 4.0",
    issuer: "Xto10X",
    type: "Hackathon",
    link: null,
    image: masaiCertificate
  },
  {
    title: "ICITC Conference 2021",
    issuer: "Masai School",
    type: "Conference",
    link: null,
    image: null
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
              className="p-6 bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center overflow-hidden"
            >
              {cert.image ? (
                <div className="mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">
                {cert.issuer}
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                {cert.type}
              </p>
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  View Certificate <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
