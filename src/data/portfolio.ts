/**
 * Central content for the portfolio.
 * Edit this file to add, remove or update projects, skills, education and links —
 * the interface reads everything from here.
 *
 * LINK RULE: never put invented URLs here. Use `null` for any link that is not
 * available yet; the UI shows a clearly marked "Link pending" placeholder instead.
 */
import mealPlannerImg from "@/assets/project-mealplanner.jpg";
import pacificoImg from "@/assets/project-pacifico.jpg";
import bitacoraImg from "@/assets/project-bitacora.jpg";
import utilitiesImg from "@/assets/project-utilities.jpg";
import gastronomyImg from "@/assets/project-gastronomy.jpg";

export const profile = {
  firstNames: "Julian Andres",
  lastNames: "Viafara Mosquera",
  fullName: "Julian Andres Viafara Mosquera",
  initials: "JV",
  roles: ["Junior Software Developer", "Computer Engineering Student"],
  intro:
    "Building thoughtful digital experiences through software engineering, creative problem-solving, and modern development tools.",
} as const;

export const contact = {
  email: "viafarajulian10@gmail.com",
  github: "https://github.com/julianviafara",
  linkedin: "https://www.linkedin.com/in/julian-andres-viafara-mosquera/",
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];

export const about = {
  paragraphs: [
    "I am a Computer Engineering student at Universidad Autónoma de Occidente (UAO), Colombia, with a Technical Degree in Software Programming from SENA.",
    "I have a solid foundation in object-oriented programming, full-stack web development, database management, API development, and software architecture.",
    "I am interested in building reliable, scalable, and visually engaging software solutions.",
    "I also use AI-assisted development tools to improve my workflow, explore solutions, generate implementations, and accelerate software prototyping.",
  ],
  pillars: [
    { title: "Object-Oriented Programming", icon: "boxes" },
    { title: "Full-Stack Web Development", icon: "layers" },
    { title: "Databases & APIs", icon: "database" },
    { title: "Software Architecture", icon: "building" },
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2 · Cambridge certification" },
  ],
} as const;

export type EducationItem = {
  title: string;
  institution: string;
  period?: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    title: "B.S. in Computer Engineering",
    institution: "Universidad Autónoma de Occidente (UAO)",
    period: "2023 – Present",
    detail: "Expected graduation: 2027",
  },
  {
    title: "Technical Degree in Software Programming",
    institution: "Servicio Nacional de Aprendizaje (SENA)",
    period: "2021 – 2023",
    detail: "Status: Completed",
  },
  {
    title: "English Certification",
    institution: "Cambridge College",
    detail: "Level B2",
  },
];

export type SkillCategory = {
  id: string;
  title: string;
  icon:
    | "code"
    | "layout"
    | "server"
    | "database"
    | "wrench"
    | "sparkles"
    | "palette"
    | "check";
  items: string[];
  description?: string;
  featured?: boolean;
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "AI-Assisted Development",
    icon: "sparkles",
    featured: true,
    items: ["OpenAI Codex", "Claude Code", "Lovable"],
    description:
      "Experienced in integrating AI-assisted development tools into the software development workflow, including code generation, implementation, debugging, refactoring, architectural exploration, and rapid prototyping.",
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "code",
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "layout",
    items: ["React", "Angular", "HTML5", "CSS3", "GSAP"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "server",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "RESTful APIs",
      "Microservices",
      "Object-Oriented Programming",
      "Hexagonal Architecture",
    ],
  },
  {
    id: "databases",
    title: "Databases & Backend Services",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Firestore", "Neo4j"],
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    icon: "wrench",
    items: ["Git", "GitHub", "Docker", "Netlify", "Cloudflare Pages", "Postman", "Vite"],
  },
  {
    id: "practices",
    title: "Software Engineering Practices",
    icon: "check",
    items: [
      "Unit Testing (JUnit/Jest)",
      "Agile Development",
      "SCRUM",
      "Software Architecture",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    id: "design",
    title: "Design & Creative Software",
    icon: "palette",
    items: ["Adobe Photoshop", "Adobe Creative Cloud", "CorelDRAW"],
    description:
      "A complementary creative skill set in graphic design and visual communication.",
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  /** Short text for the card front. Empty string shows an "add description" placeholder. */
  summary: string;
  /** Longer text for the card back. */
  details: string;
  features: string[];
  technologies: string[];
  /** Replace with your own screenshot import to swap the visual. */
  image: string;
  imageAlt: string;
  /** null = link not provided yet (shown as a "pending" placeholder). */
  repoUrl: string | null;
  /** null = no live deployment / not provided yet. */
  liveUrl: string | null;
  /** Hide link placeholders entirely (e.g. confidential client work). */
  hideMissingLinks?: boolean;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "mealplanner",
    number: "01",
    title: "MealPlanner",
    category: "Frontend Development · Full-Stack Web App",
    summary:
      "A responsive meal-planning app to organize weekly meals, discover recipes and manage grocery shopping.",
    details:
      "Recipe discovery through TheMealDB API, Firebase authentication with email/password and Google, flexible daily meal organization, weekly ingredient aggregation, profile management and light/dark themes.",
    features: [
      "Recipe search via TheMealDB API",
      "Email/password & Google sign-in",
      "Flexible daily meal planning",
      "Weekly grocery aggregation",
      "Profile management",
      "Light & dark themes",
    ],
    technologies: ["React", "TypeScript", "Firebase Auth", "Firestore", "TheMealDB API", "Vite"],
    image: mealPlannerImg,
    imageAlt: "Illustration of a meal-planning app on a laptop and phone",
    repoUrl: null, // TODO: add MealPlanner repository URL
    liveUrl: null, // TODO: add MealPlanner live URL
  },
  {
    id: "pacifico-libre",
    number: "02",
    title: "Pacifico Libre",
    category: "Business Software · Digital Solutions",
    summary:
      "Digital solutions for Pacifico Libre, connecting software development with practical business needs.",
    details:
      "A digital storefront (Vitrina Digital) and automated appointment scheduling, including a dynamic 15% discount that becomes available depending on the selected booking slot. Shown at a high level to respect client confidentiality.",
    features: [
      "Vitrina Digital storefront",
      "Automated appointment scheduling",
      "Dynamic 15% discount by booking slot",
    ],
    technologies: ["Web Development", "Workflow Automation", "Scheduling"],
    image: pacificoImg,
    imageAlt: "Abstract Art Deco illustration of a storefront, calendar and clock",
    repoUrl: null, // Confidential — add only if a public link exists
    liveUrl: null, // TODO: add public storefront URL if shareable
    hideMissingLinks: true,
    note: "Client work · confidential details omitted",
  },
  {
    id: "mi-pequena-bitacora",
    number: "03",
    title: "Mi Pequeña Bitácora",
    category: "University Project",
    summary: "", // TODO: add a short description
    details: "", // TODO: add a detailed description
    features: [],
    technologies: ["Ionic", "React"],
    image: bitacoraImg,
    imageAlt: "Art Deco illustration of an open journal with a fountain pen",
    repoUrl: null, // TODO: add repository URL
    liveUrl: null, // TODO: add live URL
  },
  {
    id: "public-utility-system",
    number: "04",
    title: "Public Utility Management System",
    category: "University Project · Distributed Systems",
    summary:
      "A full-stack distributed solution to manage public utility services through a microservices architecture.",
    details:
      "Built with Hexagonal Architecture and RESTful APIs, integrating legacy systems behind an Angular frontend. Includes canary deployment strategies, unit testing and SCRUM collaboration.",
    features: [
      "Hexagonal Architecture",
      "RESTful API integration",
      "Legacy system integration",
      "Canary deployments",
      "Unit testing",
      "SCRUM collaboration",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
    image: utilitiesImg,
    imageAlt: "Art Deco illustration of connected utility network nodes",
    repoUrl: null, // TODO: add repository URL
    liveUrl: null, // TODO: add live URL if available
  },
  {
    id: "gastronomy-landing",
    number: "05",
    title: "Interactive Gastronomy Landing Page",
    category: "Frontend Development · UI Animation",
    summary:
      "An interactive landing page for the gastronomy sector focused on modern user experience and visual engagement.",
    details:
      "A responsive interface with advanced animations, fluid transitions and GSAP-powered interactions designed to make the dining experience feel alive on screen.",
    features: [
      "Responsive interface",
      "Advanced animations",
      "Fluid transitions",
      "GSAP-powered interactions",
    ],
    technologies: ["React", "GSAP", "CSS3"],
    image: gastronomyImg,
    imageAlt: "Art Deco illustration of a gourmet plated dish with golden steam",
    repoUrl: null, // TODO: add repository URL
    liveUrl: null, // TODO: add live URL
  },
];
