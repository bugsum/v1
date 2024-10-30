import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const projectCards = gsap.utils.toArray('.project-card');

    projectCards.forEach((card) => {
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

  const projects = [
    {
      title: 'Ochako Discord Bot',
      description: 'First multi-purpose community maintained AI Based Discord Bot!',
      tech: ['Node.js', 'Discord.js', 'MongoDB', 'TypeScript'],
      image: 'https://i.ibb.co/z51dJQs/image.jpg',
      github: 'https://github.com/bugsum/ochako',
      link: 'https://github.com/bugsum/ochako'
    },
    // {
    //   title: 'AI Chat Assistant',
    //   description: 'Real-time chat application powered by machine learning',
    //   tech: ['Python', 'TensorFlow', 'Flask', 'React'],
    //   image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
    // },
    // {
    //   title: 'Portfolio Website',
    //   description: 'Modern portfolio with GSAP animations and React',
    //   tech: ['React', 'GSAP', 'Tailwind CSS'],
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    // }
  ];

  return (
    <section className="projects-section py-20 bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-white hover:text-purple-400 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.link} className="text-white hover:text-purple-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;