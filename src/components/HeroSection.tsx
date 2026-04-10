import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const metrics = [
  { num: 120, suffix: "+", label: "Projects completed" },
  { num: 95, suffix: "%", label: "Satisfaction rate" },
  { num: 1, prefix: "$", suffix: "M+", label: "In generated revenue" },
  { num: 80, suffix: "%", label: "Client retention rate" },
];

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Animated Grid Lines Container */}
        <div className="relative pb-16 z-0">
          <style>{`
            .hero-hline, .hero-vline {
              position: absolute;
              background: hsl(var(--foreground));
              opacity: 0.2;
              animation: hero-draw 1.2s cubic-bezier(.22,.61,.36,1) forwards;
              pointer-events: none;
              z-index: 0;
            }
            .hero-hline { height: 1px; left: 0; right: 0; transform: scaleX(0); }
            .hero-vline { width: 1px; top: 0; bottom: 0; transform: scaleY(0); }
            @keyframes hero-draw {
              to { transform: scale(1); opacity: 0.2; }
            }
          `}</style>

          <div className="hero-hline hidden md:block" style={{ top: '25%', animationDelay: '150ms' }} />
          <div className="hero-hline hidden md:block" style={{ top: '65%', animationDelay: '280ms' }} />
          <div className="hero-vline hidden md:block" style={{ left: '20%', animationDelay: '520ms' }} />
          <div className="hero-vline hidden md:block" style={{ left: '80%', animationDelay: '760ms' }} />

          <div className="relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground overflow-hidden"
                  >
                    <img src={`/images/avatar${i}.png`} alt={`User ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground bg-secondary px-4 py-1.5 rounded-full">
                2000+ users trust us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05]"
            >
              Built for those who
              <br />
              want <span className="font-serif-italic font-normal">better.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
            >
              Blending strategy, design, and execution to create thoughtful work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Button size="lg" className="rounded-full px-8 gap-2 text-base" asChild>
                <a href="#about">
                  Learn more <ArrowRight size={16} />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    <AnimatedCounter value={m.num} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-3xl bg-muted aspect-video max-w-5xl mx-auto flex items-center justify-center border border-border overflow-hidden"
        >
          <img src="/images/hero.png" alt="Startwith Showcase Hero" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
