import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projectData";

const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Highlights from our most recent work.</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            View all <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/project/${p.slug}`} className="group cursor-pointer block">
                <div className="rounded-3xl bg-muted aspect-[4/3] mb-4 overflow-hidden border border-border flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:underline">{p.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
