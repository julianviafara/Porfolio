/**
 * Central content for the portfolio.
 * Edit this file to add, remove or update projects, skills, education and links —
 * the interface reads everything from here.
 *
 * LINK RULE: never put invented URLs here. Use `null` for any link that is not
 * available yet; the UI shows a clearly marked "Link pending" placeholder instead.
 */
import mealPlannerImg from "@/assets/MealPlanner.png";
import pacificoImg from "@/assets/project-pacifico.jpg";
import bitacoraImg from "@/assets/MiPequenaBitacora.png";

export const profile = {
  firstNames: "Julian Andres",
  lastNames: "Viafara Mosquera",
  fullName: "Julian Andres Viafara Mosquera",
  initials: "JV",
  roles: ["Frontend Developer", "Computer Engineering Student"],
  intro:
    "I build responsive, accessible web interfaces with React, TypeScript, and modern frontend tools, turning product ideas into clear, engaging user experiences.",
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
    "My main focus is frontend development: creating responsive interfaces, reusable components, and clear user experiences with React, TypeScript, and modern web technologies.",
    "I also understand API integration, backend fundamentals, and software architecture, which helps me collaborate across the stack and build complete features.",
    "I also use AI-assisted development tools to improve my workflow, explore solutions, generate implementations, and accelerate software prototyping.",
  ],
  pillars: [
    { title: "Responsive Interfaces", icon: "layers" },
    { title: "React & TypeScript", icon: "boxes" },
    { title: "API Integration", icon: "database" },
    { title: "Accessible UI", icon: "building" },
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
    id: "frontend",
    title: "Frontend Development",
    icon: "layout",
    featured: true,
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    description:
      "Focused on building responsive, accessible interfaces and polished web experiences, from reusable components to API-connected features.",
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "code",
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    id: "ai",
    title: "AI-Assisted Development",
    icon: "sparkles",
    items: ["OpenAI Codex", "Claude Code", "Lovable"],
    description: "AI-assisted tools for implementation, debugging, and rapid prototyping.",
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
  imageFit?: "cover" | "contain";
  /** null = link not provided yet (shown as a "pending" placeholder). */
  repoUrl: string | null;
  /** null = no live deployment / not provided yet. */
  liveUrl: string | null;
  /** Optional visible availability label for a project without a public URL. */
  liveLabel?: string;
  /** Hide link placeholders entirely (e.g. confidential client work). */
  hideMissingLinks?: boolean;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "mealplanner",
    number: "01",
    title: "MealPlanner",
    category: "Frontend Development · Meal Planning",
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
    imageAlt: "MealPlanner landing page with a weekly meal plan and recipe image",
    repoUrl: "https://github.com/julianviafara/MealPlanner.git",
    liveUrl: "https://vmealplanner.netlify.app/",
  },
  {
    id: "pacifico-libre",
    number: "02",
    title: "Pacifico Libre",
    category: "Frontend Development · Professional Experience",
    summary:
      "Contributed to the development of internal organizational platforms for Pacifico Libre, building frontend experiences with React and supporting systems backed by Node.js.",
    details:
      "Part of the development work on internal organizational platforms. React was used for the frontend and Node.js for the backend. Project specifics and access links are confidential.",
    features: [
      "Contributed to internal organizational platforms",
      "React frontend development",
      "Node.js backend integration",
    ],
    technologies: ["React", "Node.js"],
    image: pacificoImg,
    imageAlt: "Abstract Art Deco illustration of a storefront, calendar and clock",
    repoUrl: null,
    liveUrl: null,
    hideMissingLinks: true,
    note: "Client work · confidential details omitted",
  },
  {
    id: "mi-pequena-bitacora",
    number: "03",
    title: "Mi Pequeña Bitácora",
    category: "Frontend Development · Nature Journal",
    summary:
      "A playful nature journal that encourages children to explore outdoors, record wildlife sightings, and keep track of their progress.",
    details:
      "The experience pairs a friendly guide with daily exploration missions, species observations, and progress milestones to make learning about nature engaging.",
    features: [
      "Daily nature exploration missions",
      "Record species and wildlife sightings",
      "Track streaks, points, and levels",
      "Nature facts and discovery prompts",
    ],
    technologies: [],
    image: bitacoraImg,
    imageAlt: "Mi Pequeña Bitácora app dashboard showing a nature mission and wildlife progress",
    imageFit: "contain",
    repoUrl: null,
    liveUrl: null,
    liveLabel: "Coming soon",
  },
];
