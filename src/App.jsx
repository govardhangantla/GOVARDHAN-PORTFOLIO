import { useState, useEffect } from "react";
import Loader from "./components/ui/Loader";
import MovingBackground from "./components/ui/MovingBackground";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import DeveloperLogs from "./components/sections/DeveloperLogs";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import MissionRecords from "./components/sections/MissionRecords";
import EmergencyButton from "./components/sections/EmergencyButton";
import Contact from "./components/sections/Contact";
import Footer from "./components/ui/Footer";
import BackToTop from "./components/ui/BackToTop";

function App() {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
 // Simulate initial loading time for the cool animation
 const timer = setTimeout(() => {
 setLoading(false);
 }, 1000);

 return () => clearTimeout(timer);
 }, []);

 return (
 <>
 <CustomCursor />
 
 {loading ? (
 <Loader />
 ) : (
 <div className="min-h-screen relative overflow-hidden bg-dark-bg selection:bg-purple-500 selection:text-white">
 <MovingBackground />
 {/* Global animated background grid/lines could go here if desired */}
 
 <Navbar />
 
 <main>
 <Hero />
 <Stats />
 <About />
 <DeveloperLogs />
 <Skills />
 <Projects />
 <MissionRecords />
 <Contact />
 <EmergencyButton />
 </main>

 <Footer />
 <BackToTop />
 </div>
 )}
 </>
 );
}

export default App;
