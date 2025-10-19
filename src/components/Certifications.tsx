import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import azureCertificate from "@/assets/azure-certificate.jpg";
import masaiCertificate from "@/assets/masai-certificate.jpg";
import icictCertificate from "@/assets/icict-certificate.jpg";
import ethansCertificate from "@/assets/ethans-certificate.jpg";
import a2zCertificate from "@/assets/a2z-certificate.jpg";

const certifications = [
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    type: "Certificate",
    link: "/azure-certificate.pdf",
    image: azureCertificate
  },
  {
    title: "Azure Cloud Training",
    issuer: "Ethan's Tech",
    type: "Training Certificate",
    link: null,
    image: ethansCertificate
  },
  {
    title: "A2Z Infotech Internship",
    issuer: "A2Z Infotech",
    type: "Internship Certificate",
    link: null,
    image: a2zCertificate
  },
  {
    title: "Xto10X Hackathon – Edition 4.0",
    issuer: "Masai School",
    type: "Hackathon",
    link: null,
    image: masaiCertificate
  },
  {
    title: "ICITC Conference 2021",
    issuer: "MET Bhujbal Knowledge City",
    type: "Conference",
    link: null,
    image: icictCertificate
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center overflow-hidden"
            >
              <div className="mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
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
