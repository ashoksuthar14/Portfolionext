import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "4 hackathons won, 7 problems solved, infinite curiosity",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "IIT Madras",
    description: "2022 - 2026\nB.S in Data Science",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "VIdya Jyothi Institute of Technology",
    description: "2022 - 2026\nB.Tech on Artificial Intelligence",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "2 years of freelance expertise in AI & data science",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Tech Stack",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Check my projects",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "InSure: Automatic Insurance Claim",
    des: "Built AI-powered insurance platform with 98% damage detection accuracy, automated cost estimation, and fraud prevention system for large-scale claim optimization.",
    img: "/insurance.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://automated-car-insurance-startup.netlify.app/",
    sourceCode: "https://github.com/ashoksuthar14/Automated-Car-Insurance-Startup",
  },
  {
    id: 2,
    title: "Bangalore Traffic Load Management",
    des: "Built React.js traffic visualization platform with Agentic AI agents (ADK + Mastra) achieving 95% accuracy and real-time JSON processing that reduced analysis time by 80%.",
    img: "/bangalore.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://studio--nammaroute-navigator-6xdjf.us-central1.hosted.app/",
    sourceCode: "https://github.com/ashoksuthar14/The-AI-Space---Managing-City-Data-Overload",
  },
  {
    id: 3,
    title: "TaxsMart: Taxing Solution",
    des: "Developed multimodal AI tax solution with fraud detection and intelligent chatbot for real-time calculations, budgeting, and personalized optimization, preventing millions in potential losses.",
    img: "/taxsmart.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://taxsmart-amateurcoder.netlify.app/",
    sourceCode: "https://github.com/ashoksuthar14/Amateur_Coders_AutoTax",
  },
  {
    id: 4,
    title: "UpScale",
    des: "AI-powered workplace learning platform with personalized roadmaps, adaptive quizzes, task management, and intelligent chatbot for employee skill enhancement.",
    img: "/upscale.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://upscale-amature-coder.netlify.app/",
    sourceCode: "https://github.com/ashoksuthar14/UpScale---ISTD-Hackathon",
  },
] as const;

export const testimonials = [
  {
    quote: "AWS Machine Learning Certificate",
    name: "AWS",
    title: "Machine Learning",
    image: "/certificate AWS.png",
  },
  {
    quote: "SIH Hackathon Certificate",
    name: "SIH",
    title: "Hackathon Winner",
    image: "/Certificate SIH.png",
  },
  {
    quote: "IBM - Python for Data Science Certificate",
    name: "IBM",
    title: "Python for Data Science",
    image: "/Certificate IBM.png",
  },
  {
    quote: "Street Cause Certificate",
    name: "Street Cause",
    title: "Community Service",
    image: "/Certicate Street.png",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "AI Engineer",
    desc: "Company: Relai - Real Estate Startup | Time: 04/2025 – 06/2025",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Developer",
    desc: "Company: Swecha | Time: 05/2025 – 07/2025",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "IoT & Machine Learning Researcher",
    desc: "University: Osmania University | Time: 06/2023 – 09/2023",
    className: "md:col-span-2 md:col-start-2",
    thumbnail: "/exp3.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/sanidhyy",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanidhyy",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;

export const techStackLogos = [
  // AI & ML Core
  "python", "pytorch", "huggingface", "openai",
  
  // Programming Languages
  "java",
  
  // Databases
  "mysql", "mongodb", "postgresql", "supabase",
  
  // Web & Mobile Development
  "react", "django", "html5", "css3",
  
  // Data Science & Analytics
  "streamlit", "gradio",
  
  // Cloud & AI Services
  "aws", "google", "firebase", "netlify",
  
  // Version Control
  "git", "github", "gitlab",
  
  // Tools & Platforms
  "vscode"
] as const;

export const customTechLogos = [
  {
    name: "NLP",
    path: "/Logo nlp.png"
  },
  {
    name: "Google",
    path: "/logo google.png"
  },
  {
    name: "Computer Vision",
    path: "/logo computer vision.png"
  },
  {
    name: "Agentic AI",
    path: "/logo Agentic AI.png"
  }
] as const;
