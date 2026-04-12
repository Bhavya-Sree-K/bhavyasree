import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

const skillCategories = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"], color: "from-primary/20 to-primary/5" },
  { title: "Backend", skills: ["Node.js", "Python"], color: "from-accent/20 to-accent/5" },
  { title: "Databases", skills: ["MySQL"], color: "from-primary/20 to-accent/10" },
  { title: "Tools", skills: ["Eclipse"], color: "from-accent/15 to-primary/10" },
  { title: "AI Tools", skills: ["ChatGPT", "Gemini"], color: "from-primary/15 to-accent/15" },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.1}>
            <div className="glass rounded-xl p-6 hover:glow-border transition-all duration-300 group h-full">
              <h3 className="font-heading font-semibold text-foreground mb-4 text-lg group-hover:text-gradient transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={`px-3 py-1.5 text-sm rounded-full bg-gradient-to-r ${cat.color} border border-border/40 text-foreground/80 hover:text-foreground hover:border-primary/40 transition-all duration-200`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
