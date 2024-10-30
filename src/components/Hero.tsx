import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Briefcase, GraduationCap, Terminal } from 'lucide-react';
import Typed from 'typed.js';

gsap.registerPlugin(ScrollTrigger);

// const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
//   return (
//     <div className="typewriter typewriter-animation font-mono">{text}</div>
//   );
// };

const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
    }}
    className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-purple-500/20 hover-tilt preserve-3d"
  >
    <div className="w-12 h-12 mb-4 text-purple-400">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white font-space">
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Hero: React.FC = () => {
  const typer = React.useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const typed = new Typed(typer.current, {
      strings: [
        'Programming since 2019',
        'Software Engineer',
        'Web Developer',
        'Student',
        'Tech Enthusiast',
        'Open Source Contributor',
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.5,
        rotationX: 90,
        transformOrigin: '50% 50% -50',
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="preserve-3d"
          >
            <Terminal className="w-20 h-20 text-purple-500 mb-8 animate-gradient" />
          </motion.div>

          <div className="text-center space-y-6">
            <h1 className="hero-title text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient font-syncopate">
              Samarth Sharma
            </h1>

            <div className="h-8 mt-4 overflow-hidden">
              <p className="text-lg sm:text-xl md:text-2xl text-purple-300">
                <span>&gt; </span>
                <span className="text-purple-400 font-mono typer" ref={typer} />
                <span> &lt;</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-16 w-full max-w-5xl px-4">
            <StatCard
              icon={<Code2 />}
              title="Developer"
              description="Proficient in many Programming Languages"
            />
            <StatCard
              icon={<Briefcase />}
              title="Junior Developer Intern"
              description="AI/ML @Blend Vidya Edu Tech"
            />
            <StatCard
              icon={<GraduationCap />}
              title="Studying"
              description="Bachelor of Computer Applications"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg inline-flex items-center space-x-2 hover-tilt preserve-3d"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-space">Get in touch</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </div>
  );
};

export default Hero;
