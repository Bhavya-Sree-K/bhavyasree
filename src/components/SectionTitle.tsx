import ScrollReveal from "./ScrollReveal";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <ScrollReveal className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </ScrollReveal>
);

export default SectionTitle;
