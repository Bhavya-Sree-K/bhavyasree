import { Linkedin, Github, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} KOTHAREDDY BHAVYA SREE. Built with <Heart className="w-3.5 h-3.5 inline text-primary" /> 
      </p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/kothareddy-bhavya-sree" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="https://github.com/Bhavya-Sree-K" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
