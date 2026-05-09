import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 message: "",
 });

 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 // Placeholder for actual form submission logic
 alert("Thanks for your message! This is a demo form.");
 setFormData({ name: "", email: "", message: "" });
 };

 return (
 <section id="contact" className="py-24 relative overflow-hidden">
 {/* Background glow */}
 <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

 <div className="container mx-auto px-6 md:px-12">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6 }}
 className="text-center mb-16"
 >
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
 Get In <span className="text-gradient">Touch</span>
 </h2>
 <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full "></div>
 <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
 Have a project in mind or just want to say hi? Feel free to reach out!
 </p>
 </motion.div>

 <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
 {/* Contact Info */}
 <motion.div
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="lg:w-1/3 space-y-8"
 >
 <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4 border border-white/5">
 <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
 <Mail size={24} />
 </div>
 <div>
 <h4 className="text-lg font-bold text-white mb-1">Email</h4>
 <p className="text-gray-400">govardhanrajugantla@gmail.com</p>
 </div>
 </div>

 <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4 border border-white/5">
 <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
 <Phone size={24} />
 </div>
 <div>
 <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
 <p className="text-gray-400">9014139289</p>
 </div>
 </div>

 <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4 border border-white/5">
 <div className="p-3 bg-[#00ff88]/10 text-[#00ff88] rounded-xl">
 <MapPin size={24} />
 </div>
 <div>
 <h4 className="text-lg font-bold text-white mb-1">Location</h4>
 <p className="text-gray-400">SECTOR-5, STEEL PLANT, UKKUNAGARAM, VISAKHAPATNAM, ANDHRA PRADESH, INDIA</p>
 </div>
 </div>
 </motion.div>

 {/* Contact Form */}
 <motion.div
 initial={{ opacity: 0, x: 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="lg:w-2/3 glassmorphism p-8 rounded-3xl border border-white/5 relative"
 >
 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-300">Your Name</label>
 <input
 type="text"
 name="name"
 value={formData.name}
 onChange={handleChange}
 required
 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors"
 placeholder="John Doe"
 />
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-300">Your Email</label>
 <input
 type="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 required
 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-colors"
 placeholder="john@example.com"
 />
 </div>
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-gray-300">Message</label>
 <textarea
 name="message"
 value={formData.message}
 onChange={handleChange}
 required
 rows="5"
 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors resize-none"
 placeholder="How can I help you?"
 ></textarea>
 </div>
 <button
 type="submit"
 className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg hover:shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
 >
 <Send size={20} />
 Send Message
 </button>
 </form>
 </motion.div>
 </div>
 </div>
 </section>
 );
};

export default Contact;
