import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is your design process?", a: "Our design process starts with a deep-dive discovery phase, followed by strategy, wireframing, visual design, and iterative feedback loops until we reach a polished final product." },
  { q: "How long does a design take?", a: "Timelines vary by scope, but most projects take 4–12 weeks from kickoff to delivery. We'll provide a clear timeline during our initial consultation." },
  { q: "What tools do you use in your design workflow?", a: "We primarily use Figma for design, Framer and React for development, and tools like Notion and Slack for collaboration and project management." },
  { q: "What kind of projects do you specialize in?", a: "We specialize in brand identity, web design, product design, and creative campaigns for startups and scaling companies." },
  { q: "How many requests can I make?", a: "With our monthly plan, you can submit unlimited design requests. We work through them one at a time, ensuring top-quality output for each." },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Got questions? we got answers.</h2>
          <p className="text-muted-foreground mt-3 text-lg">Everything you need to know — find quick answers to the most common questions.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-secondary rounded-2xl border-none px-6">
                <AccordionTrigger className="text-foreground font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
