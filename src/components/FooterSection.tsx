import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PrivacyPolicyDialog } from "./PrivacyPolicyDialog";
import { TermsOfServiceDialog } from "./TermsOfServiceDialog";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const FooterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Manual validation for toast feedback
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent!", {
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <footer id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 mb-16 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Let's work together.</h2>
          <p className="text-primary-foreground/70 mt-3 mb-8">
            Tell us about your project and we'll be in touch.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-primary-foreground/90 ml-1" htmlFor="name">Name</label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-primary-foreground/90 ml-1" htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-primary-foreground/90 ml-1" htmlFor="message">Message</label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                rows={4}
                className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="rounded-xl mt-2 w-full sm:w-auto self-end"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center text-center gap-12 md:gap-32 text-sm">
          <div className="flex flex-col items-center">
            <a href="#" className="flex items-center justify-center gap-2 font-bold text-foreground text-base mb-4 hover:opacity-80 transition-opacity">
              <img src="/favicon.png" alt="Startwith Logo" className="w-5 h-5 dark:invert" />
              Startwith
            </a>
            <p className="text-muted-foreground text-xs max-w-[200px]">Blending strategy, design, and execution.</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-foreground mb-4">Agency</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-foreground transition-colors">Work</a></li>
              <li><a href="#blog" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-foreground mb-4">Information</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <PrivacyPolicyDialog>
                  <button className="hover:text-foreground transition-colors">Privacy policy</button>
                </PrivacyPolicyDialog>
              </li>
              <li>
                <TermsOfServiceDialog>
                  <button className="hover:text-foreground transition-colors">Terms</button>
                </TermsOfServiceDialog>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Startwith Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
