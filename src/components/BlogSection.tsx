import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "Design decisions", category: "Process", readTime: "5 min read", image: "/images/blog1.png" },
  { title: "The future of branding", category: "Branding", readTime: "4 min read", image: "/images/blog2.png" },
  { title: "Building scalable systems", category: "Engineering", readTime: "6 min read", image: "/images/blog3.png" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Fresh insights from our recent posts.</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            View all <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-3xl bg-muted aspect-[3/2] mb-4 overflow-hidden border border-border flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-muted-foreground">{p.readTime}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">{p.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:underline">{p.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
