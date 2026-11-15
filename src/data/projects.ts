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
      "A full-stack student and course management platform featuring secure authentication, course management, student dashboards, and payment functionality.",
    image: "/images/projects/mycodeAcademy.jpg",
    technologies: ["React", "Javascript", "Node.js", "Express.js", "Prisma", "Postman", "JWT"],
    accent: "#A78BFA",
    liveUrl: "https://www.mycodeacademy.my/",
    githubUrl: "https://github.com/Joseph-AAA/My_Code_Academy",
  },
  {
    id: 2,
    title: "Nova Gadget Store",
    category: "E-commerce",
    description:
      "A responsive e-commerce application that allows users to browse products, manage shopping carts, authenticate accounts, and complete checkout workflows.",
    image: "/images/projects/shoppingSiteA.jpg",
    technologies: ["React", "JavaScript", "React Router","Context API", "CSS"],
    accent: "#22D3EE",
    liveUrl: "https://shopping-site-jet.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/Shopping_Site",
  },
  {
    id: 3,
    title: "Multi-Step Form",
    category: "Frontend Application",
    description:
      "An interactive multi-step form featuring input validation, subscription plan selection, optional add-ons, and a dynamic order summary.",
    image: "/images/projects/multi_steplform.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    accent: "#34D399",
    liveUrl: "https://multi-step-form-sooty-one.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/multi_step_form",
  },
  {
    id: 4,
    title: "Product List with Cart",
    category: "Shopping Application",
    description:
      "A product shopping application featuring dynamic product listings, cart management, quantity controls, and an interactive order summary.",
    image: "/images/projects/productListA.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    accent: "#FB923C",
    liveUrl: "https://product-list-with-cart-liard.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/Product-List-With-Cart",
  },
  {
    id: 5,
    title: "Flashcard App",
    category: "Learning Application",
    description:
      "An interactive learning application that helps users review and reinforce their knowledge through digital flashcards.",
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
      "A Chrome extension that enables users to organize, manage, and quickly access their frequently visited websites.",
    image: "/images/projects/quickLinks.jpg",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    accent: "#60A5FA",
    liveUrl: "https://quick-links-chrome-extension.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/QuickLinks_ChromeExtension",
  },
];
