import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";

const resumeUrl = "/Shweta_Bangar_Resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeLink = (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = resumeUrl;
          link.download = "Shweta_Bangar_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 100);
      }}
    >
      <FileText className="w-4 h-4" />
      Resume
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            SB
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="outline" size="sm" className="gap-2" asChild>
              {resumeLink}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="py-2">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                {resumeLink}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
