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
    "Developed a full-stack student and course management platform featuring secure authentication, an admin dashboard for managing courses and students, student course access, database integration, and payment functionality.",
  image: "/images/projects/mycodeAcademy.jpg",
  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "JWT",
  ],
  accent: "#A78BFA",
  liveUrl: "https://www.mycodeacademy.my/",
  githubUrl: "https://github.com/Joseph-AAA/My_Code_Academy",
},
  {
    id: 2,
    title: "Nova Gadget Store",
    category: "E-commerce",
   description:
     "Developed a responsive e-commerce application with product browsing, user authentication, shopping cart management, and checkout functionality. Used React Context API to manage shared application state.",    image: "/images/projects/shoppingSiteA.jpg",
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
        "Built a multi-step subscription form with input validation, interactive plan selection, optional add-ons, and a dynamic order summary using reusable React components.",  image: "/images/projects/multi_steplform.jpg",
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
       "Developed an interactive product shopping interface featuring dynamic product listings, cart management, quantity controls, and real-time order summary updates.",    image: "/images/projects/productListA.jpg",
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
            "Built an interactive flashcard application that enables users to review learning materials, test their knowledge, and reinforce concepts through digital flashcards.",   image: "/images/projects/flashCard.jpg",
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
          "Developed a Chrome extension that helps users organize frequently visited websites, manage saved links, and access their favorite resources efficiently.",   image: "/images/projects/quickLinks.jpg",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    accent: "#60A5FA",
    liveUrl: "https://quick-links-chrome-extension.vercel.app/",
    githubUrl: "https://github.com/Joseph-AAA/QuickLinks_ChromeExtension",
  },
];
