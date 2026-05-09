import { motion } from "framer-motion";

const Loader = () => {
 return (
 <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-bg">
 <div className="relative flex flex-col items-center">
 <motion.div
 className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
 animate={{ rotate: 360 }}
 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
 />
 <motion.div
 className="absolute top-0 w-20 h-20 border-4 border-purple-500/20 border-b-purple-500 rounded-full"
 animate={{ rotate: -360 }}
 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
 />
 <motion.h2
 initial={{ opacity: 0 }}
 animate={{ opacity: [0, 1, 0] }}
 transition={{ duration: 2, repeat: Infinity }}
 className="mt-8 text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
 >
 INITIALIZING...
 </motion.h2>
 </div>
 </div>
 );
};

export default Loader;
