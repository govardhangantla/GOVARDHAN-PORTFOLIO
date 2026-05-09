import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
 const toggleVisibility = () => {
 if (window.scrollY > 500) {
 setIsVisible(true);
 } else {
 setIsVisible(false);
 }
 };

 window.addEventListener("scroll", toggleVisibility);
 return () => window.removeEventListener("scroll", toggleVisibility);
 }, []);

 const scrollToTop = () => {
 scroll.scrollToTop({
 duration: 800,
 smooth: "easeInOutQuart",
 });
 };

 return (
 <AnimatePresence>
 {isVisible && (
 <motion.button
 initial={{ opacity: 0, scale: 0 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0 }}
 onClick={scrollToTop}
 className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-purple-500/20 text-purple-500 border border-purple-500/50 backdrop-blur-md hover:bg-purple-500 hover:text-white transition-all shadow-md hover:shadow-md group"
 aria-label="Back to top"
 >
 <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
 </motion.button>
 )}
 </AnimatePresence>
 );
};

export default BackToTop;
