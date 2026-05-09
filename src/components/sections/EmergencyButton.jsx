import { motion } from "framer-motion";

const EmergencyButton = () => {
  const handleClick = () => {
    // Open email or contact form
    window.location.href = "mailto:govardhanrajugantla@gmail.com";
  };

  return (
    <section className="py-24 flex flex-col items-center justify-center relative overflow-hidden bg-black/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative group cursor-pointer"
        onClick={handleClick}
      >
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full group-hover:bg-red-600/40 transition-all duration-500 scale-150"></div>
        
        {/* The Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-48 h-48 rounded-full bg-gradient-to-b from-red-500 to-red-800 shadow-[0_0_50px_rgba(220,38,38,0.5),inset_0_4px_10px_rgba(255,255,255,0.3)] flex items-center justify-center text-center p-6 border-4 border-red-900"
        >
          <span className="text-white font-black text-xl leading-tight tracking-tighter drop-shadow-md">
            CALL<br />EMERGENCY<br />MEETING
          </span>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-gray-500 font-mono text-xs tracking-[0.2em] uppercase"
      >
        Press to establish secure communications
      </motion.p>
    </section>
  );
};

export default EmergencyButton;
