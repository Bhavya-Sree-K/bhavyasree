import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import TiltCard from "@/components/TiltCard";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const EMAIL = "bhavyasreekothareddy1602@gmail.com";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_self");
    toast.success("Opening your email client...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Get in Touch" subtitle="Let's work together!" />

        {/* CTA Banner */}
        <ScrollReveal>
          <div className="glass rounded-2xl p-8 text-center mb-12 glow-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary text-sm font-medium mb-4 border border-primary/30">
                ✨ Open for opportunities
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                Let's Build Something Together
              </h3>
              <p className="text-muted-foreground">I'm currently available for internships and entry-level roles.</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <ScrollReveal className="md:col-span-2 space-y-5">
            <TiltCard>
              <motion.a
                href={`mailto:${EMAIL}`}
                whileTap={{ scale: 0.95, rotate: -1 }}
                className="block glass rounded-xl p-5 glow-border hover:border-primary/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground font-medium">Email</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors break-all">
                  {EMAIL}
                </span>
              </motion.a>
            </TiltCard>
            <TiltCard>
              <div className="glass rounded-xl p-5 glow-border">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground font-medium">Location</span>
                </div>
                <p className="text-xs text-muted-foreground">Bengaluru, Karnataka, India</p>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="md:col-span-3" delay={0.15}>
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4 glow-border">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
              <Button type="submit" variant="glow" className="w-full gap-2">
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
