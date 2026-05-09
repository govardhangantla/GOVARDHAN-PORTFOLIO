import { motion } from "framer-motion";
import { Award, Briefcase, BookOpen, Star, Trophy } from "lucide-react";

const timelineData = [
  {
    type: "Sports - Gold Medal",
    icon: <Trophy size={24} className="text-yellow-500" />,
    title: "1st Place - 200M Sprint",
    org: "Yuvtarang National Level Youth Festival",
    date: "Jan 2026",
    desc: "Won the 1st prize in the 200M Men's sprint event at the National Level Youth Festival organized by VIGNAN.",
  },
  {
    type: "Sports - Participation",
    icon: <Award size={24} className="text-blue-400" />,
    title: "Inter Collegiate Athletics Championship",
    org: "JNTU-GV Vizianagaram",
    date: "Dec 2025",
    desc: "Represented Vignan's Institute in the Inter Collegiate Athletics Championship (Men) held at JNTU-GV.",
  },
  {
    type: "Internship",
    icon: <Briefcase size={24} className="text-blue-500" />,
    title: "Frontend Development Intern",
    org: "CodeAlpha",
    date: "April 2026",
    desc: "Successfully completed a one-month virtual internship program focusing on modern frontend technologies.",
  },
  {
    type: "Hackathon",
    icon: <Award size={24} className="text-purple-500" />,
    title: "SUSHACKS 3.0",
    org: "VIGNAN's Institute",
    date: "April 2026",
    desc: "Participated in a nationwide innovation hackathon, developing innovative solutions as part of a team.",
  },
  {
    type: "Hackathon",
    icon: <Award size={24} className="text-blue-400" />,
    title: "NSRIT HackFest",
    org: "NSRIT",
    date: "2025",
    desc: "Competed in a multi-day hackathon focused on rapid prototyping and problem solving.",
  },
  {
    type: "Sports - Gold Medal",
    icon: <Trophy size={24} className="text-yellow-500" />,
    title: "1st Place - 400M Sprint",
    org: "DAV National Sports",
    date: "Sep 2022",
    desc: "Adjudged 1st in the 400 mts individual event at the Inter School Sports & Games Competition (South Cluster-1).",
  },
  {
    type: "Sports - Participation",
    icon: <Award size={24} className="text-orange-400" />,
    title: "CBSE Cluster VII Athletics Meet",
    org: "CBSE / Oasis School of Excellence",
    date: "Dec 2022",
    desc: "Participated in the Inter School Sports and Games Competition held in Telangana in the under 17 category.",
  }
];

const Certificates = () => {
 return (
 <section id="certificates" className="py-24 relative">
 <div className="container mx-auto px-6 md:px-12">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6 }}
 className="text-center mb-16"
 >
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
 Achievements & <span className="text-gradient">Experience</span>
 </h2>
 <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full "></div>
 </motion.div>

 <div className="max-w-4xl mx-auto relative">
 {/* Timeline central line */}
 <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30"></div>

 <div className="space-y-12">
 {timelineData.map((item, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.5, delay: index * 0.2 }}
 className={`flex flex-col md:flex-row items-center justify-between w-full ${
 index % 2 === 0 ? "md:flex-row-reverse" : ""
 }`}
 >
 {/* Empty space for the other side of the timeline */}
 <div className="hidden md:block w-5/12"></div>

 {/* Timeline Icon */}
 <div className="relative z-10 w-12 h-12 rounded-full glassmorphism flex items-center justify-center border-2 border-blue-500/50 mb-6 md:mb-0">
 {item.icon}
 </div>

 {/* Content Card */}
 <div className="w-full md:w-5/12 glassmorphism p-6 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-colors">
 <span className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-2 block">
 {item.type}
 </span>
 <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
 <div className="flex justify-between items-center mb-3">
 <span className="text-sm font-medium text-gray-300">{item.org}</span>
 <span className="text-xs text-gray-500">{item.date}</span>
 </div>
 <p className="text-sm text-gray-400">{item.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
};

export default Certificates;
