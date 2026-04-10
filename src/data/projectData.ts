export interface Project {
  slug: string;
  title: string;
  image: string;
  tagline: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "studio-nouveau",
    title: "Studio Nouveau",
    image: "/images/project1.png",
    tagline: "Brand Identity & Stationery Design",
    description:
      "A comprehensive brand identity system crafted for Studio Nouveau, an architecture and design firm based in London. The project encompassed logo design, typography selection, business card layouts, letterhead, envelopes, and a branded notebook — all unified by a refined, minimal aesthetic that embodies the firm's commitment to timeless design.",
  },
  {
    slug: "velocia-architects",
    title: "Velocia Architects",
    image: "/images/project2.png",
    tagline: "Architecture Firm Website",
    description:
      "A fully responsive website designed and developed for Velocia Architects, showcasing their portfolio of sustainable, design-driven architecture. The site features an immersive project gallery, intuitive navigation, and a clean editorial layout that lets the work speak for itself — built with performance and visual storytelling at its core.",
  },
  {
    slug: "creative-workshop",
    title: "Creative Workshop",
    image: "/images/project3.png",
    tagline: "Collaborative Design Strategy",
    description:
      "A cross-functional creative strategy engagement bringing together designers, strategists, and stakeholders in an intensive workshop format. The sessions focused on mood boarding, material exploration, and visual direction — translating abstract brand values into tangible design decisions through hands-on collaboration.",
  },
  {
    slug: "blueprint-studio",
    title: "Blueprint Studio",
    image: "/images/project4.png",
    tagline: "Architectural Planning & Modeling",
    description:
      "Detailed architectural planning and scale model creation for a residential project. The work combined traditional draftsmanship with precise 3D modeling, producing comprehensive blueprints and a handcrafted physical model that brought the client's vision to life before a single foundation was laid.",
  },
];
