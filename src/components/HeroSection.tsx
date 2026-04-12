import TypingAnimation from "@/components/TypingAnimation";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";

const RESUME_URL = "https://drive.google.com/file/d/1lBkatn6Upyu-YDIY0QzW2N4G5HHxigEA/view?usp=sharing";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden">
    {/* Background glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 relative z-10">
      <ScrollReveal className="flex-1 text-center md:text-left">
        <p className="text-primary font-medium mb-2 tracking-wide text-sm uppercase">Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
          KOTHAREDDY<br />BHAVYA SREE
        </h1>
        <div className="text-xl sm:text-2xl mb-4 min-h-[2rem]">
          <TypingAnimation />
        </div>
        <p className="text-muted-foreground max-w-lg mb-6 leading-relaxed">
          One line of code at a time — Learning, Building, and Growing every day.
        </p>
        <div className="flex gap-3 justify-center md:justify-start flex-wrap">
          <a href="#contact">
            <Button variant="glow">Get in Touch</Button>
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-1.5 border-border/60 hover:border-primary/50 hover:glow-border transition-all">
              <Download className="w-4 h-4" /> Download Resume
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/kothareddy-bhavya-sree" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-border/60 hover:border-primary/50 hover:glow-border transition-all">
              <Linkedin className="w-4 h-4" />
            </Button>
          </a>
          <a href="https://github.com/Bhavya-Sree-K" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-border/60 hover:border-primary/50 hover:glow-border transition-all">
              <Github className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </ScrollReveal>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/30 glow-primary animate-float">
          <img
            src="https://image2url.com/r2/bucket1/images/1775972519332-627b9073-c790-4db6-91ab-6ca6e13909d2.png"
            alt="Kothareddy Bhavya Sree"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-secondary text-4xl font-heading font-bold text-primary">BK</div>';
            }}
          />
        </div>
      </motion.div>
    </div>

    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
      <ArrowDown className="w-5 h-5 text-muted-foreground" />
    </a>
  </section>
);

export default HeroSection;
