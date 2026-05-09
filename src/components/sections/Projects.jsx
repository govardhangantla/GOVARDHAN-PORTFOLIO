import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "../ui/BrandIcons";

// Using static data for now as a placeholder for actual GitHub projects
const projects = [
  {
    title: "Smart Hospital Management",
    desc: "A comprehensive hospital management dashboard with patient booking, doctor schedules, and emergency handling features.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Flask", "Python", "Firebase", "Chart.js"],
    github: "https://github.com/govardhangantla",
    demo: "#",
  },
  {
    title: "HackMate",
    desc: "A collaboration platform designed to help developers find the perfect teammates for hackathons based on skills and interests.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/govardhangantla",
    demo: "#",
  },
  {
    title: "Price Comparison",
    desc: "A smart tool that aggregates and compares prices across multiple platforms to help users find the best deals automatically.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "Selenium", "Flask"],
    github: "https://github.com/govardhangantla",
    demo: "#",
  },
  {
    title: "Clean Surroundings",
    desc: "An environmental awareness platform that helps users report and monitor local cleanliness and waste management issues.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["HTML", "CSS", "JS", "Maps API"],
    github: "https://github.com/govardhangantla",
    demo: "#",
  }
];

const Projects = () => {
 return (
 <section id="projects" className="py-24 relative">
 <div className="container mx-auto px-6 md:px-12">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-20px" }}
 transition={{ duration: 0.3 }}
 className="text-center mb-16"
 >
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
 Featured <span className="text-gradient">Projects</span>
 </h2>
 <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full "></div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
 {projects.map((project, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10px" }}
 transition={{ duration: 0.3, delay: index * 0.05 }}
 className="glassmorphism rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-blue-500/30"
 >
 <div className="relative h-48 overflow-hidden">
 <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
 <img
 src={project.image}
 alt={project.title}
 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
 />
 </div>
 <div className="p-6 flex flex-col flex-grow">
 <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-500 transition-colors">
 {project.title}
 </h3>
 <p className="text-gray-400 text-sm mb-4 flex-grow">
 {project.desc}
 </p>
 <div className="flex flex-wrap gap-2 mb-6">
 {project.tech.map((t, i) => (
 <span
 key={i}
 className="px-3 py-1 text-xs rounded-full bg-white/5 text-purple-500 border border-purple-500/20"
 >
 {t}
 </span>
 ))}
 </div>
 <div className="flex gap-4 mt-auto">
 <a
 href={project.github}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
 >
 <Github size={16} />
 Code
 </a>
 <a
 href={project.demo}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors ml-auto"
 >
 <ExternalLink size={16} />
 Live Demo
 </a>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default Projects;
