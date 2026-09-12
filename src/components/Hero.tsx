import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-background px-6 pt-8 pb-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Shweta Bangar
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-medium">
          Hey, I'm a Full Stack Developer.
        </p>

        <Button
          variant="outline"
          size="lg"
          className="gap-2"
          asChild
        >
          <a
            href="/Shweta_Bangar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setTimeout(() => {
                const link = document.createElement("a");
                link.href = "/Shweta_Bangar_Resume.pdf";
                link.download = "Shweta_Bangar_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }, 100);
            }}
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
