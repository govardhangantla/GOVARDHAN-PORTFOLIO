import { motion } from "framer-motion";
import { Github, Linkedin, CodeChef } from "../ui/BrandIcons";
import { Link } from "react-scroll";

const Hero = () => {
 return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-cyan-500/50 bg-cyan-500/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              Status: Online - System Stable
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-4 text-white tracking-tighter">
            Hi, I'm <br className="md:hidden" />
            <span className="text-cyan-400">G. GOVARDHAN RAJU</span>
            <span className="inline-block animate-bounce ml-4">👋</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white/90 tracking-tight">Full Stack Developer</h2>
            <span className="hidden md:block w-2 h-2 rounded-full bg-cyan-500"></span>
            <h2 className="text-2xl md:text-4xl font-bold text-white/90 tracking-tight">AI Builder</h2>
          </div>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-mono">
            Building scalable futuristic products powered by code and creativity — from hospital systems to AI-driven platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://github.com/govardhangantla"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:scale-105 uppercase text-xs tracking-widest"
          >
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/govardhanraju-gantla-4879b738a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-black border-2 border-cyan-900 text-cyan-400 font-bold rounded-full transition-all hover:bg-cyan-900/10 hover:scale-105 uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            LinkedIn
          </a>
          <a
            href="https://www.codechef.com/users/govardhan_code"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-black border-2 border-orange-900 text-orange-500 font-bold rounded-full transition-all hover:bg-orange-900/10 hover:scale-105 uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.1)]"
          >
            CodeChef
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="w-full sm:w-auto px-8 py-4 bg-black border-2 border-red-900 text-red-500 font-bold rounded-full cursor-pointer transition-all hover:bg-red-900/10 hover:scale-105 uppercase text-xs tracking-widest"
          >
            Emergency Contact
          </Link>
        </motion.div>
      </div>
    </section>
 );
};

export default Hero;
