import { motion } from "framer-motion";
import { Layers, Clock, DollarSign } from "lucide-react";

const tags = [
  "Social design", "Content aesthetics", "Visual storytelling", "Feed design",
  "Motion for social", "Branded content design", "Reel & shortform design",
  "Campaign visuals", "Creative direction",
];

const valueProps = [
  { icon: Layers, title: "Brand roots", desc: "We've helped ideas grow into over 50 thriving brands." },
  { icon: Clock, title: "Built over time", desc: "Backed by 10+ years of evolving design, and strategy." },
  { icon: DollarSign, title: "Value first", desc: "More than $1.5M saved by making digital experiences." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">What sets us apart.</h2>
          <p className="text-muted-foreground mt-3 text-lg">We're not just defined by what we do — but how we do it.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Main feature card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Unlimited by design</h3>
              <p className="mt-3 text-primary-foreground/70 max-w-md">
                We craft bold, boundary-free digital experiences—where creativity, usability, and innovation come together without compromise.
              </p>
            </div>
            <div className="mt-8 rounded-2xl bg-primary-foreground/10 h-40 flex items-center justify-center overflow-hidden">
              <img src="/images/feature.png" alt="Features Dark" className="w-full h-full object-cover opacity-80" />
            </div>
          </motion.div>

          {/* Marquee card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary rounded-3xl p-8 md:p-10 flex flex-col justify-center overflow-hidden min-h-[340px]"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">What we create</h3>
            <div className="overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...tags, ...tags].map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block px-4 py-2 mr-3 rounded-full border border-border bg-background text-sm text-foreground whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Value prop cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {valueProps.map((vp, i) => (
            <motion.div
              key={vp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary rounded-3xl p-8 hover:shadow-md transition-shadow"
            >
              <vp.icon size={24} className="text-foreground mb-4" />
              <h4 className="text-lg font-semibold text-foreground">{vp.title}</h4>
              <p className="text-muted-foreground mt-2 text-sm">{vp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
