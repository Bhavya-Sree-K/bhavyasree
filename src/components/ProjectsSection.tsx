import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

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
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-full text-sm capitalize transition-all duration-200 border ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary glow-primary"
                    : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-6">
          {filtered.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 md:p-8 hover:glow-border transition-all duration-300 group">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-gradient transition-colors">
                    {p.title}
                  </h3>
                  <span className="px-3 py-0.5 text-xs rounded-full bg-primary/15 text-primary border border-primary/30">
                    {p.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/40">
                      {t}
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
};

export default ProjectsSection;
