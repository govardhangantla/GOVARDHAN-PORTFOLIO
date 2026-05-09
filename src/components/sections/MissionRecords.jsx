import { motion } from "framer-motion";
import { Star, Clock, Layers, CheckCircle, Trophy } from "lucide-react";

const records = [
  {
    icon: <Star size={24} className="text-blue-400" />,
    title: "CodeAlpha Internship",
    desc: "Frontend Development Intern Certificate of Completion",
    type: "hex",
  },
  {
    icon: <Star size={24} className="text-blue-400" />,
    title: "SUSHACKS 3.0",
    desc: "Hackathon Competitor – Full Stack Track",
    type: "hex",
  },
  {
    icon: <Trophy size={24} className="text-blue-400" />,
    title: "200M Sprint - 1st Place",
    desc: "Yuvtarang National Level Youth Festival Winner",
    type: "hex",
  },
  {
    icon: <Trophy size={24} className="text-blue-400" />,
    title: "400M Sprint - 1st Place",
    desc: "DAV National Sports South Cluster Winner",
    type: "hex",
  },
  {
    icon: <Clock size={24} className="text-blue-400" />,
    title: "App Hackathon — Vignan",
    desc: "Internal Hackathon Competitor, Vignan College",
    type: "circle",
  },
  {
    icon: <Clock size={24} className="text-blue-400" />,
    title: "HackFest — NSRIT",
    desc: "External Hackathon Competitor at NSRIT",
    type: "circle",
  },
  {
    icon: <CheckCircle size={24} className="text-blue-400" />,
    title: "JNTUGV Athletics",
    desc: "Inter Collegiate Athletics Championship Participation",
    type: "circle",
  },
  {
    icon: <Trophy size={24} className="text-blue-400" />,
    title: "DAV National Athletics",
    desc: "National Level Winner – 3rd Place Finish",
    type: "hex",
  },
  {
    icon: <CheckCircle size={24} className="text-blue-400" />,
    title: "CBSE Nationals",
    desc: "National Level Athletics Championship Participation",
    type: "circle",
  },
];

const MissionRecords = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-4 mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white">
            Mission <span className="text-blue-500">Records</span>
          </h2>
          <div className="flex-grow h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-6xl mx-auto">
          {records.map((record, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shape Wrapper */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  {record.type === "hex" ? (
                    <div className="absolute inset-0 border-2 border-blue-500/30 rotate-45 transform flex items-center justify-center">
                       <div className="w-full h-full border-2 border-blue-500/30 -rotate-45 transform flex items-center justify-center bg-blue-500/5">
                          {/* Inner hex look */}
                       </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 bg-blue-500/5 shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]">
                    </div>
                  )}
                  <div className="relative z-10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {record.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                {record.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] font-mono uppercase">
                {record.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionRecords;
