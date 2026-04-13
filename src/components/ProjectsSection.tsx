import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import TiltCard from "@/components/TiltCard";
import ClickRipple from "@/components/ClickRipple";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Automated Parkinson's Disease Detection from Biomedical Data Using CNN Models",
    status: "Completed",
    category: "web app",
    description: "Developed a machine learning-based system to detect Parkinson's Disease using voice data. Built a CNN model to analyze acoustic features and predict the presence of the disease with high accuracy. Implemented a Flask API for real-time prediction and tested the model on biomedical datasets.",
    tech: ["Python", "Deep Learning (CNN)", "Flask REST API", "Machine Learning", "Data Analysis", "NumPy", "Pandas", "Scikit-learn"],
  },
];

const categories = ["All", "web app"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Projects" subtitle="What I've been building" />
        <ScrollReveal>
          <div className="flex gap-3 justify-center mb-10">
            {categories.map((c) => (
              <motion.button
                key={c}
                onClick={() => setFilter(c)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`px-4 py-1.5 rounded-full text-sm capitalize transition-all duration-200 border ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary glow-primary"
                    : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-6">
          {filtered.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TiltCard>
                <ClickRipple className="rounded-xl">
                  <div className="glass rounded-xl p-6 md:p-8 hover:glow-border transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-gradient transition-colors">
                        {p.title}
                      </h3>
                      <motion.span
                        whileTap={{ scale: 0.85 }}
                        className="px-3 py-0.5 text-xs rounded-full bg-primary/15 text-primary border border-primary/30"
                      >
                        {p.status}
                      </motion.span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9, rotate: 3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/40 cursor-pointer"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </ClickRipple>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
