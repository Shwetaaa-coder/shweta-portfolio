const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Shweta Shivam Bangar. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
