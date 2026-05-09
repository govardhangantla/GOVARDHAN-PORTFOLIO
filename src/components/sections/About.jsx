import { motion } from "framer-motion";
import { Code, Rocket, Target, Trophy } from "lucide-react";

const aboutCards = [
  {
    icon: <Code size={32} className="text-blue-500" />,
    title: "Software Engineer",
    desc: "Passionate about building clean, scalable, and efficient software solutions using modern technologies. I enjoy creating impactful digital experiences and continuously improving my skills.",
  },
  {
    icon: <Rocket size={32} className="text-[#00ff88]" />,
    title: "Problem Solver",
    desc: "I love turning complex challenges into simple and effective solutions. Whether it’s debugging or designing, I enjoy learning through challenges and building meaningful applications.",
  },
  {
    icon: <Target size={32} className="text-[#ff0055]" />,
    title: "Future Goals",
    desc: "Aspiring to become a top Software Engineer, contribute to innovative products, explore emerging technologies, and grow within impactful startup ecosystems.",
  },
  {
    icon: <Trophy size={32} className="text-purple-500" />,
    title: "Athlete & Cricket Lover",
    desc: "As a national level athlete, I’ve learned discipline, teamwork, and handling pressure—qualities that shape both my sports journey and developer mindset.",
  },
];

const About = () => {
 return (
 <section id="about" className="py-24 relative">
 <div className="container mx-auto px-6 md:px-12">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6 }}
 className="text-center mb-16"
 >
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
 <span className="text-gradient">About</span> Me
 </h2>
 <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full "></div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {aboutCards.map((card, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 whileHover={{ y: -10 }}
 className="glassmorphism p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group"
 >
 <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
 {card.icon}
 </div>
 <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
 <p className="text-gray-400 leading-relaxed text-sm">
 {card.desc}
 </p>
 </motion.div>
 ))}
 </div>

 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.4 }}
 className="mt-16 glassmorphism p-8 md:p-12 rounded-3xl border border-purple-500/20 flex flex-col md:flex-row items-center gap-8"
 >
 <div className="md:w-2/3">
 <h3 className="text-2xl font-bold mb-4">My Coding Journey</h3>
 <p className="text-gray-300 leading-relaxed">
 My journey began with a deep curiosity about how things work on the internet. 
 Since then, I've immersed myself in learning various programming languages 
 like Python, Java, C, and modern web development technologies. Every project 
 I build is an opportunity to learn something new. I believe in a hands-on 
 approach—building, breaking, and improving software to master the craft.
 </p>
 </div>
 <div className="md:w-1/3 flex justify-center">
 {/* Abstract decorative element representing coding/journey */}
 <div className="relative w-48 h-48">
 <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500 animate-[spin_10s_linear_infinite]"></div>
 <div className="absolute inset-4 rounded-full border-2 border-purple-500 opacity-50 animate-[spin_7s_linear_infinite_reverse]"></div>
 <div className="absolute inset-0 flex items-center justify-center text-4xl">
 🚀
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </section>
 );
};

export default About;
