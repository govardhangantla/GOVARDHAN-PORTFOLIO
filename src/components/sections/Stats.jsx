import { motion } from "framer-motion";
import { Box, Code2, GitBranch, Activity } from "lucide-react";

const stats = [
  {
    icon: <Box size={24} className="text-blue-400" />,
    value: "3+",
    label: "REAL-WORLD PROJECTS",
  },
  {
    icon: <Code2 size={24} className="text-blue-400" />,
    value: "15+",
    label: "TECHNOLOGIES MASTERED",
  },
  {
    icon: <GitBranch size={24} className="text-blue-400" />,
    value: "100+",
    label: "GITHUB COMMITS",
  },
  {
    icon: <Activity size={24} className="text-blue-400" />,
    value: "99.9%",
    label: "CODE CONSISTENCY",
  },
];

const Stats = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glassmorphism p-6 rounded-2xl border border-white/5 flex items-center gap-6 group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-xs font-bold text-gray-500 tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
