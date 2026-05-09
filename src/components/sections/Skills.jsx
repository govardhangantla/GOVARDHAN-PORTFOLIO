import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "HTML5", "CSS3"],
    progress: 80,
  },
  {
    title: "Frontend",
    skills: ["Responsive Design", "Modern UI/UX", "Animations", "Tailwind CSS", "React Basics"],
    progress: 90,
  },
  {
    title: "Backend",
    skills: ["Flask", "Firebase", "Auth", "REST APIs", "DB Integration"],
    progress: 75,
  },
  {
    title: "Tools & Soft Skills",
    skills: ["Git/GitHub", "Netlify", "Figma", "Teamwork", "Leadership", "Problem Solving"],
    progress: 85,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="flex-grow h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glassmorphism p-8 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 uppercase tracking-tight">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-12">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 text-xs font-mono tracking-tight hover:border-cyan-400/50 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden mt-auto">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${category.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
