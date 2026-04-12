import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = "https://drive.google.com/file/d/1lBkatn6Upyu-YDIY0QzW2N4G5HHxigEA/view?usp=sharing";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero" className="shrink-0">
          <img
            src="https://tapportfolio.lovable.app/assets/logo-CxDGoOCE.png"
            alt="TAP Academy"
            className="h-9"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="glow" size="sm" className="gap-1.5">
              <Download className="w-4 h-4" /> Resume
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-border/50 px-4 pb-4 animate-fade-in">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="mt-2 block">
            <Button variant="glow" size="sm" className="w-full gap-1.5">
              <Download className="w-4 h-4" /> Resume
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
