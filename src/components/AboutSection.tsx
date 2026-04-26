import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="About Me" subtitle="Full Stack Developer (Fresher) | Java, Python, MySQL, REST APIs" />
      <ScrollReveal>
        <div className="glass rounded-2xl p-6 md:p-10 glow-border space-y-4 text-muted-foreground leading-relaxed">
          <p>I'm building my foundation in software development one project, one concept, and one line of code at a time.</p>
          <p>My journey started in college with curiosity about how applications work behind the scenes. That curiosity led me to explore programming on my own, build academic projects, and eventually step into a structured learning path. Currently, I'm working as a <span className="text-foreground font-medium">Full Stack Java Developer Trainee at TAP Academy</span>, where I'm gaining hands-on experience in developing real-world applications.</p>
          <p>I'm learning and working with <span className="text-foreground font-medium">Core Java, MySQL, Programming, and HTML</span>, focusing on understanding how frontend and backend systems connect and function together. From building basic full stack applications to understanding APIs and database design, I'm steadily improving my skills and confidence as a developer.</p>
          <p>Right now, my focus is on strengthening fundamentals — writing clean code, understanding core concepts, and building projects that reflect my growth. I believe consistency and practical learning are key, and I'm committed to becoming a strong, reliable developer over time.</p>
          <p>I'm actively looking for opportunities where I can learn, contribute, and grow in a real-world development environment. <span className="text-primary">If you're open to giving a motivated learner a chance to prove their skills, let's connect.</span></p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
