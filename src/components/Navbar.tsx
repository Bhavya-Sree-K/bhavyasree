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

import resumeAsset from "@/assets/resume.pdf.asset.json";

const RESUME_URL = resumeAsset.url;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState<string>("hero");
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? Math.min(1, Math.max(0, window.scrollY / docH)) : 0);

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

  // Focus trap + Escape handling for mobile menu
  useEffect(() => {
    if (!open) return;

    const getFocusable = () => {
      const root = mobileMenuRef.current;
      if (!root) return [] as HTMLElement[];
      return Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("aria-hidden"));
    };

    // Focus the first item when menu opens
    const first = getFocusable()[0];
    first?.focus();

    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = [toggleBtnRef.current, ...getFocusable()].filter(
        Boolean
      ) as HTMLElement[];
      if (focusables.length === 0) return;
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;
      if (e.shiftKey && activeEl === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && activeEl === lastEl) {
        e.preventDefault();
        firstEl.focus();
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
      {/* Skip to main content for keyboard users */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.92, rotate: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="shrink-0 relative group rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="KB — back to top"
          tabIndex={0}
          style={{
            // dynamic glow reacts to scroll
            ["--kb-glow" as any]: `${0.35 + scrollProgress * 0.65}`,
          }}
        >
          <span
            aria-hidden="true"
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-md transition-opacity animate-glow-pulse"
            style={{ opacity: `var(--kb-glow)` }}
          />
          <span
            className="relative flex items-center justify-center h-10 w-10 rounded-lg glass border border-primary/40 glow-border overflow-hidden"
            style={{ boxShadow: `0 0 ${10 + scrollProgress * 30}px hsl(var(--primary) / ${0.2 + scrollProgress * 0.5})` }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
            />
            {/* animated highlight sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-kb-sweep"
            />
            <span className="relative font-heading font-extrabold text-base tracking-tight text-gradient drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]">
              KB
            </span>
          </span>
        </motion.a>

        {/* Desktop links */}
        <div
          ref={desktopLinksRef}
          className="hidden md:flex items-center gap-1"
          role="menubar"
          aria-label="Primary"
        >
          {navLinks.map((l, i) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                data-nav-link
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
                onKeyDown={(e) => handleLinkKeyDown(e, i)}
                className={cn(
                  "relative text-sm px-3 py-2 rounded-md transition-colors duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
                    aria-hidden="true"
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
          <a
            href={RESUME_URL}
            download="Kothareddy_Bhavyasree_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button variant="glow" size="sm" className="gap-1.5">
              <Download className="w-4 h-4" aria-hidden="true" /> Resume
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleBtnRef}
          className="md:hidden text-foreground p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-secondary/50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav-menu"
          ref={mobileMenuRef}
          role="menu"
          aria-label="Primary"
          className="md:hidden glass-strong border-t border-border/50 px-4 pb-4 animate-fade-in"
        >
          {navLinks.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-2 text-sm transition-colors border-l-2 pl-3 my-1 rounded-r-md",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                  isActive
                    ? "text-foreground border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                )}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={RESUME_URL}
            download="Kothareddy_Bhavyasree_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button variant="glow" size="sm" className="w-full gap-1.5">
              <Download className="w-4 h-4" aria-hidden="true" /> Resume
            </Button>
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
