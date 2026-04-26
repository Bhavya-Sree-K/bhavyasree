import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import TiltCard from "@/components/TiltCard";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-primary/20 to-primary/5",
    skills: [
      { name: "Core Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 75 },
      { name: "Programming", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: 70 },
    ],
  },
  {
    title: "Frontend",
    color: "from-accent/20 to-accent/5",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 85 },
    ],
  },
  {
    title: "Databases",
    color: "from-primary/20 to-accent/10",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 70 },
    ],
  },
];

// Flatten all skills for radar chart
const radarData = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ skill: s.name, level: s.level, fullMark: 100 }))
);

const CustomTick = ({ payload, x, y, textAnchor }: any) => (
  <text
    x={x}
    y={y}
    textAnchor={textAnchor}
    fill="hsl(215, 15%, 55%)"
    fontSize={11}
    fontFamily="Inter, sans-serif"
  >
    {payload.value}
  </text>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

      {/* Radar Chart */}
      <ScrollReveal>
        <TiltCard>
          <div className="glass rounded-xl p-6 md:p-8 mb-8 hover:glow-border transition-all duration-300">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-4 text-center text-gradient">
              Skill Radar
            </h3>
            <div className="w-full h-[350px] sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid
                    stroke="hsl(220, 15%, 18%)"
                    strokeDasharray="3 3"
                  />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={<CustomTick />}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="level"
                    stroke="hsl(170, 80%, 50%)"
                    fill="hsl(170, 80%, 50%)"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(220, 20%, 8%)",
                      border: "1px solid hsl(220, 15%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 40%, 95%)",
                      fontSize: "13px",
                    }}
                    formatter={(value: number) => [`${value}%`, "Proficiency"]}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TiltCard>
      </ScrollReveal>

      {/* Skill Cards */}
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
                      <span className="text-[10px] text-primary ml-1">{s.level}%</span>
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
