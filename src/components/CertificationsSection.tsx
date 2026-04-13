import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import TiltCard from "@/components/TiltCard";
import ClickRipple from "@/components/ClickRipple";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const certs = [
  {
    name: "Data Analytics with Tableau (Long-Term Internship)",
    platform: "SmartBridge in collaboration with APSCHE",
    date: "March 2026",
    skills: ["Data Analytics", "Tableau", "Data Visualization", "Business Intelligence"],
    id: "EXT-APSCHE_DA-70341",
  },
  {
    name: "Python Programming Internship",
    platform: "Aavanto & Lorven Technology Private Limited",
    date: "February 2024",
    skills: ["Python Programming", "Practical Application", "Real-Time Project Development"],
    id: "RB5Y1C10SY",
  },
  {
    name: "Introduction to Industry 4.0 and Industrial Internet of Things",
    platform: "NPTEL (IIT Kharagpur)",
    date: "October 2025",
    skills: ["Industry 4.0", "Industrial IoT", "Cyber-Physical Systems", "Smart Manufacturing"],
    id: "NPTEL25CS146S870702756",
  },
  {
    name: "The Joy of Computing using Python",
    platform: "NPTEL (IIT Madras)",
    date: "April 2024",
    skills: ["Python Programming", "Computational Thinking", "Problem Solving", "Data Structures"],
    id: "NPTEL24CS57S268801583",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="Certifications" subtitle="Professional development and learning achievements" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certs.map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <TiltCard>
              <ClickRipple className="rounded-xl h-full">
                <div className="glass rounded-xl p-6 h-full hover:glow-border transition-all duration-300 group flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      whileTap={{ rotate: -15, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5 cursor-pointer"
                    >
                      <Award className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-sm leading-snug group-hover:text-gradient transition-colors">
                        {c.name}
                      </h3>
                      <p className="text-muted-foreground text-xs mt-1">{c.platform}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{c.date} · ID: {c.id}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {c.skills.map((s) => (
                      <motion.span
                        key={s}
                        whileHover={{ scale: 1.1, y: -1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="px-2 py-0.5 text-[11px] rounded-full bg-secondary text-secondary-foreground border border-border/40 cursor-pointer"
                      >
                        {s}
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

export default CertificationsSection;
