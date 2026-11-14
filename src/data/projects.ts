export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  accent: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "My Code Academy",
    category: "Full-Stack Application",
    description:
      "A student and course management platform with authentication, course management, dashboards and payment features.",
    image: "/images/projects/mycodeAcademy.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Prisma"],
    accent: "#A78BFA",
    liveUrl: "https://www.mycodeacademy.my/",
    githubUrl: "https://github.com/Joseph-AAA/My_Code_Academy",
  },
  {
    id: 2,
    title: "Nova Gadget Store",
    category: "E-commerce",
    description:
      "An online shopping application featuring product browsing, authentication, shopping cart and checkout functionality.",
    image: "/images/projects/shoppingSite.jpg",
    technologies: ["React", "JavaScript", "CSS", "React Router"],
    accent: "#22D3EE",
    liveUrl: "https://shopping-site-jet.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/Shopping_Site",
  },
  {
    id: 3,
    title: "Multi-Step Form",
    category: "Frontend Application",
    description:
      "An interactive multi-step form with input validation, plan selection, add-ons and order summary.",
    image: "/images/projects/multi_steplform.jpg",
    technologies: ["React", "TypeScript", "CSS"],
    accent: "#34D399",
    liveUrl: "https://multi-step-form-sooty-one.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/multi_step_form",
  },
  {
    id: 4,
    title: "Product List with Cart",
    category: "Shopping Application",
    description:
      "A product listing application with cart functionality and interactive shopping experience.",
    image: "/images/projects/productList.jpg",
    technologies: ["React", "JavaScript", "CSS"],
    accent: "#FB923C",
    liveUrl: "https://product-list-with-cart-liard.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/Product-List-With-Cart",
  },
  {
    id: 5,
    title: "Flashcard App",
    category: "Learning Application",
    description:
      "An interactive flashcard application designed to help users review and practise learning materials.",
    image: "/images/projects/flashCard.jpg",
    technologies: ["React", "JavaScript", "CSS"],
    accent: "#F472B6",
    liveUrl: "https://flashcard-jade-three.vercel.app/",
     githubUrl: "https://github.com/Joseph-AAA/flashcard",
  },
  {
    id: 6,
    title: "QuickLinks",
    category: "Chrome Extension",
    description:
      "A browser extension that helps users organize and access frequently used website links quickly.",
    image: "/images/projects/quickLinks.jpg",
    technologies: ["React", "JavaScript", "CSS"],
    accent: "#60A5FA",
    liveUrl: "https://quick-links-chrome-extension.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/QuickLinks_ChromeExtension",
  },
];