import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Essential design and strategy tailored for early-stage startups.",
    features: ["Design discipline", "Creative sync", "Signal clarity"],
    highlight: false,
    extra: "Design only",
  },
  {
    name: "Startwith",
    price: "$5,500",
    originalPrice: "$6,500",
    description: "Positioning, clarity, and creative thinking baked into every project.",
    features: ["Design discipline", "Trusted backbone", "Creative sync", "Speed matters", "Signal clarity"],
    highlight: true,
    extra: "+$1,000 for development",
  },
  {
    name: "Enterprise",
    price: "$9,500",
    description: "Comprehensive product design and full development for scaling teams.",
    features: ["Everything in Startwith", "Dedicated development", "Priority support", "Custom integrations", "Unlimited revisions"],
    highlight: false,
    extra: "Full suite included",
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Simple & transparent pricing.</h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">Flexible pricing models that scale with your needs, no hidden fees just clear value.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl border p-8 md:p-10 flex flex-col ${tier.highlight
                ? "bg-primary text-primary-foreground border-primary shadow-lg scale-100 md:scale-105 z-10"
                : "bg-background border-border"
                }`}
            >
              <h3 className={`text-xl font-bold ${tier.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                {tier.name}
              </h3>
              <div className="mt-4">
                {tier.originalPrice && (
                  <span className={`text-sm line-through ${tier.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {tier.originalPrice}
                  </span>
                )}
                <div className={`text-4xl md:text-5xl font-bold ${tier.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {tier.price}<span className={`text-base font-normal ${tier.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/month</span>
                </div>
              </div>
              <p className={`text-sm mt-3 ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {tier.description}
              </p>
              <p className={`text-xs mt-2 font-medium ${tier.highlight ? "text-secondary" : "text-muted-foreground"}`}>
                {tier.extra}
              </p>

              <div className="mt-8 space-y-3 flex-1">
                <p className={`text-sm font-medium ${tier.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  What's included
                </p>
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Check size={16} className={`shrink-0 ${tier.highlight ? "text-secondary" : "text-foreground"}`} />
                    <span className={`text-sm ${tier.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full mt-8 rounded-full"
                size="lg"
                variant={tier.highlight ? "secondary" : "default"}
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
