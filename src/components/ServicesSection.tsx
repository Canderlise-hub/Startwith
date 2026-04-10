import { motion } from "framer-motion";
import { Compass, Sparkles, Layout, Globe, Palette, Rocket } from "lucide-react";

const services = [
  { icon: Compass, title: "Strategy & direction", desc: "Positioning, and clarity baked into every project." },
  { icon: Sparkles, title: "Motion & interaction", desc: "Subtle animations that elevate the user experience." },
  { icon: Layout, title: "Interface design", desc: "User-first interfaces that are functional, and intuitive." },
  { icon: Globe, title: "Web & product design", desc: "From landing pages to full products built to perform." },
  { icon: Palette, title: "Brand foundations", desc: "Everything you need to build with consistency." },
  { icon: Rocket, title: "Launch-ready delivery", desc: "All files, assets, and handoff included. Fully yours." },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">The way we bring ideas to life.</h2>
          <p className="text-muted-foreground mt-3 text-lg">These are the principles that guide our creative process and client relationships.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background rounded-3xl p-8 border border-border hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <s.icon size={24} className="text-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
