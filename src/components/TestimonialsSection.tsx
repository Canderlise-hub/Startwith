import { motion } from "framer-motion";

const testimonials = [
  { name: "Ryan Carter", quote: "The process was incredibly smooth from start to finish. Every detail was handled with precision and care." },
  { name: "Ethan Walker", quote: "Professional, creative, and on time. They exceeded our expectations on every front." },
  { name: "Sophia Mitchell", quote: "Their design work completely transformed our brand. We've seen a 3x increase in engagement." },
  { name: "Liam Chen", quote: "Working with Startwith felt like having an in-house team. Truly collaborative and invested in our success." },
  { name: "Ava Rodriguez", quote: "The attention to detail is unmatched. Every pixel was purposeful and beautiful." },
  { name: "Noah Kim", quote: "From concept to launch in record time. The quality never suffered despite the speed." },
];

const TestimonialsSection = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">What our clients say.</h2>
          <p className="text-muted-foreground mt-3 text-lg">Real stories from people we've had the pleasure of working with.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid bg-background rounded-3xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <span className="font-medium text-foreground text-sm">{t.name}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
