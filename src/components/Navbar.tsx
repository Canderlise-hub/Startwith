import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
          <img src="/favicon.png" alt="Startwith Logo" className="w-6 h-6 dark:invert" />
          Startwith
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a>
          <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <Button size="sm" className="rounded-full px-6" asChild>
            <a href="#contact">Let's talk</a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 flex flex-col gap-3">
          <a href="#about" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#work" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Work</a>
          <a href="#blog" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Blog</a>
          <a href="#contact" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Contact</a>
          <Button size="sm" className="rounded-full w-fit px-6 mt-2" onClick={() => setMobileOpen(false)} asChild>
            <a href="#contact">Let's talk</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
