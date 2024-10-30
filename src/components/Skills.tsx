import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    const skillCards = gsap.utils.toArray('.skill-card');

    skillCards.forEach((card) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    });
  }, []);

  const skills = [
    { icon: <Code />, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { icon: <Server />, title: 'Backend', items: ['Node.js', 'Express', 'Python', 'Java'] },
    { icon: <Database />, title: 'Database', items: ['MongoDB', 'MySQL', 'MariaDB'] },
    { icon: <Terminal />, title: 'Languages', items: ['JavaScript', 'Python', 'Java', 'C++'] },
    { icon: <Globe />, title: 'Tools', items: ['Git', 'Docker', 'AWS', 'Linux'] },
    { icon: <Palette />, title: 'Design', items: ['Figma', 'Adobe XD', 'UI/UX'] }
  ];

  return (
    <section className="skills-section py-20 bg-gradient-to-r from-violet-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="text-purple-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;