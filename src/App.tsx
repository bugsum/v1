import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;