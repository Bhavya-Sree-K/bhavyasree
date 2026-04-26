import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const RESUME_URL = "https://drive.google.com/file/d/1lBkatn6Upyu-YDIY0QzW2N4G5HHxigEA/view?usp=sharing";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ["hero", ...navLinks.map((l) => l.id)];
      const offset = window.innerHeight * 0.35;
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) current = id;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape and return focus to toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Arrow-key navigation between desktop links
  const handleLinkKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    const links = desktopLinksRef.current?.querySelectorAll<HTMLAnchorElement>(
      "a[data-nav-link]"
    );
    if (!links || links.length === 0) return;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      links[(index + 1) % links.length].focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      links[(index - 1 + links.length) % links.length].focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      links[0].focus();
    } else if (e.key === "End") {
      e.preventDefault();
      links[links.length - 1].focus();
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong border-b border-border/50 shadow-[0_4px_30px_hsl(var(--primary)/0.08)] py-1"
          : "glass py-2"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <a href="#hero" className="shrink-0">
          <img
            src="https://tapportfolio.lovable.app/assets/logo-CxDGoOCE.png"
            alt="TAP Academy"
            className="h-9"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative text-sm px-3 py-2 rounded-md transition-colors duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-primary/10 border border-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="ml-3">
            <Button variant="glow" size="sm" className="gap-1.5">
              <Download className="w-4 h-4" /> Resume
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-border/50 px-4 pb-4 animate-fade-in">
          {navLinks.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-2 text-sm transition-colors border-l-2 pl-3 my-1",
                  isActive
                    ? "text-foreground border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                )}
              >
                {l.label}
              </a>
            );
          })}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="mt-2 block">
            <Button variant="glow" size="sm" className="w-full gap-1.5">
              <Download className="w-4 h-4" /> Resume
            </Button>
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
