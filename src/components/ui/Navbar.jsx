import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
 { name: "Home", to: "home" },
 { name: "About", to: "about" },
 { name: "Logs", to: "logs" },
 { name: "Skills", to: "skills" },
 { name: "Projects", to: "projects" },
 { name: "Records", to: "certificates" },
 { name: "Contact", to: "contact" },
];

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false);
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 50);
 };
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
 <nav
 className={`fixed top-0 w-full z-50 transition-all duration-300 ${
 isScrolled ? "glassmorphism py-4" : "bg-transparent py-6"
 }`}
 >
 <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
 {/* Logo */}
 <Link
 to="home"
 smooth={true}
 duration={500}
 className="text-2xl font-bold cursor-pointer text-gradient"
 >
 &lt;GR /&gt;
 </Link>

 {/* Desktop Nav */}
 <div className="hidden md:flex space-x-8">
 {navLinks.map((link) => (
 <Link
 key={link.name}
 to={link.to}
 smooth={true}
 duration={500}
 spy={true}
 activeClass="text-blue-500 "
 className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer text-sm tracking-wider uppercase font-medium"
 >
 {link.name}
 </Link>
 ))}
 </div>

 {/* Mobile Toggle */}
 <button
 className="md:hidden text-white hover:text-blue-500 focus:outline-none"
 onClick={() => setIsOpen(!isOpen)}
 >
 {isOpen ? <X size={28} /> : <Menu size={28} />}
 </button>
 </div>

 {/* Mobile Nav */}
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 className="md:hidden absolute top-full left-0 w-full glassmorphism flex flex-col items-center py-6 space-y-6"
 >
 {navLinks.map((link) => (
 <Link
 key={link.name}
 to={link.to}
 smooth={true}
 duration={500}
 spy={true}
 activeClass="text-blue-500"
 onClick={() => setIsOpen(false)}
 className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer text-lg tracking-wider uppercase font-medium"
 >
 {link.name}
 </Link>
 ))}
 </motion.div>
 )}
 </AnimatePresence>
 </nav>
 );
};

export default Navbar;
