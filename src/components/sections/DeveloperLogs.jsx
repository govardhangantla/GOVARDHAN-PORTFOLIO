import { motion } from "framer-motion";

const DeveloperLogs = () => {
  const logs = [
    { label: "IDENTITY", content: "Gantla Govardhan Raju – CSE student at Vignan's Institute, Andhra Pradesh" },
    { label: "EDUCATION", content: "B.Tech Computer Science Engineering | Inter 92% | 10th CBSE 89%" },
    { label: "MISSION", content: "Building real-world products: Healthcare platforms, AI tools, Community networks" },
    { label: "STACK", content: "Full Stack: Python/Flask, Firebase, HTML/CSS/JS, React" },
    { label: "HACKATHON", content: "Competed in SUSHACKS 3.0, NSRIT HackFest, and various collegiate competitions" },
    { label: "INTERESTS", content: "Futuristic UI/UX • AI-powered systems • Startup architecture • Open source" },
    { label: "GOAL", content: "High-impact Software Engineer → Product-based Startup Founder" },
    { label: "STATUS", content: "Currently open to internships, collaborations, and hackathon teams" },
  ];

  return (
    <section id="logs" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white">
            Developer <span className="text-blue-500">Logs</span>
          </h2>
          <div className="flex-grow h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto glassmorphism rounded-xl border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-500 font-mono">usr/govardhan/bio.txt</div>
          </div>

          {/* Terminal Body */}
          <div className="p-8 md:p-12 font-mono text-sm md:text-base space-y-6">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex flex-col md:flex-row gap-2 md:gap-4 group"
              >
                <span className="text-blue-400 font-bold shrink-0">{`> [${log.label}]`}</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {log.content}
                </span>
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-blue-500 font-bold"
            >
              {`> _`}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperLogs;
