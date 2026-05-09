import { Heart } from "lucide-react";
import { Github, Linkedin, CodeChef } from "./BrandIcons";
import { Link } from "react-scroll";

const Footer = () => {
 return (
 <footer className="relative border-t border-white/10 glassmorphism pt-16 pb-8 mt-24">
 <div className="container mx-auto px-6 md:px-12">
 <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
 <div className="text-center md:text-left">
 <Link
 to="home"
 smooth={true}
 duration={500}
 className="text-3xl font-bold cursor-pointer text-gradient mb-4 inline-block"
 >
 &lt;GR /&gt;
 </Link>
 <p className="text-gray-400 max-w-sm mt-4">
 Building impactful products and innovative tech solutions with modern technologies.
 </p>
 </div>

 <div className="flex gap-6">
 <a
 href="https://github.com/govardhangantla"
 target="_blank"
 rel="noopener noreferrer"
 className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/50 hover:shadow-md transition-all"
 >
 <Github size={20} />
 </a>
 <a
 href="https://www.linkedin.com/in/govardhanraju-gantla-4879b738a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
 target="_blank"
 rel="noopener noreferrer"
 className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-gray-400 hover:text-purple-500 hover:border-purple-500/50 hover:shadow-md transition-all"
 >
 <Linkedin size={20} />
 </a>
 <a
 href="https://www.codechef.com/users/govardhan_code"
 target="_blank"
 rel="noopener noreferrer"
 className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 hover:shadow-md transition-all"
 >
 <CodeChef size={20} />
 </a>
 </div>
 </div>

 <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
 <p>© {new Date().getFullYear()} GOVARDHAN.SYSTEMS // ALL RIGHTS RESERVED</p>
 <p className="flex items-center gap-2">
 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
 <span className="text-green-500/80">SYSTEM ONLINE</span>
 </p>
 </div>
 </div>
 </footer>
 );
};

export default Footer;
