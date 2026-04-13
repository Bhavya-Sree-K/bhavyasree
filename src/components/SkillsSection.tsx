import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import TiltCard from "@/components/TiltCard";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-primary/20 to-primary/5",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    title: "Backend",
    color: "from-accent/20 to-accent/5",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Databases",
    color: "from-primary/20 to-accent/10",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Tools",
    color: "from-accent/15 to-primary/10",
    skills: [
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
    ],
  },
  {
    title: "AI Tools",
    color: "from-primary/15 to-accent/15",
    skills: [
      { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      { name: "Gemini", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.1}>
            <TiltCard>
              <div className="glass rounded-xl p-6 hover:glow-border transition-all duration-300 group h-full">
                <h3 className="font-heading font-semibold text-foreground mb-4 text-lg group-hover:text-gradient transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <motion.span
                      key={s.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className={`px-3 py-1.5 text-sm rounded-full bg-gradient-to-r ${cat.color} border border-border/40 text-foreground/80 hover:text-foreground hover:border-primary/40 transition-all duration-200 flex items-center gap-2 cursor-pointer`}
                    >
                      <img src={s.icon} alt={s.name} className="w-4 h-4" />
                      {s.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
