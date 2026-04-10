import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <blockquote className="text-2xl md:text-4xl lg:text-[2.75rem] font-medium leading-snug tracking-tight text-foreground">
          "We believe smart software should be as intuitive as it is powerful. That's why we craft experiences with clean design, thoughtful features, and a focus on performance—everything you need to launch faster and grow with confidence."
        </blockquote>
      </motion.div>
    </section>
  );
};

export default AboutSection;
