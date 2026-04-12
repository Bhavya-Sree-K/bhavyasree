import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import { GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Education" />
      <ScrollReveal>
        <div className="glass rounded-xl p-6 md:p-8 glow-border group hover:border-primary/30 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg group-hover:text-gradient transition-colors">
                B.E. in Artificial Intelligence and Data Science
              </h3>
              <p className="text-foreground/80 font-medium mt-1">Siddharth Institute of Engineering & Technology</p>
              <p className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                <MapPin className="w-3.5 h-3.5" /> Puttur, Andhra Pradesh, India · Expected 2026
              </p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                Pursuing B.E. in Artificial Intelligence and Data Science with focus on programming, Java, SQL, and machine learning. Actively developing practical skills through projects and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EducationSection;
