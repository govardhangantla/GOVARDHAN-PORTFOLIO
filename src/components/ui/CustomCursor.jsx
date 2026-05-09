import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 const [isHovering, setIsHovering] = useState(false);

 useEffect(() => {
 const updateMousePosition = (e) => {
 setMousePosition({ x: e.clientX, y: e.clientY });
 };

 const handleMouseOver = (e) => {
 if (
 e.target.tagName.toLowerCase() === "a" ||
 e.target.tagName.toLowerCase() === "button" ||
 e.target.closest("a") ||
 e.target.closest("button")
 ) {
 setIsHovering(true);
 } else {
 setIsHovering(false);
 }
 };

 window.addEventListener("mousemove", updateMousePosition);
 window.addEventListener("mouseover", handleMouseOver);

 return () => {
 window.removeEventListener("mousemove", updateMousePosition);
 window.removeEventListener("mouseover", handleMouseOver);
 };
 }, []);

 return (
 <>
 {/* Main cursor dot */}
 <motion.div
 className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-[999] mix-blend-screen"
 animate={{
 x: mousePosition.x - 8,
 y: mousePosition.y - 8,
 scale: isHovering ? 0 : 1,
 }}
 transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
 />
 {/* Trailing cursor ring */}
 <motion.div
 className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500 rounded-full pointer-events-none z-[998]"
 animate={{
 x: mousePosition.x - 20,
 y: mousePosition.y - 20,
 scale: isHovering ? 1.5 : 1,
 backgroundColor: isHovering ? "rgba(157, 0, 255, 0.1)" : "transparent",
 }}
 transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
 />
 </>
 );
};

export default CustomCursor;
