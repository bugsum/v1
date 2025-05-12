import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const projectCards = gsap.utils.toArray(".project-card");

    projectCards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
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
            once: true,
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "Ochako Discord Bot",
      description:
        "First multi-purpose community maintained AI Based Discord Bot!",
      tech: ["Node.js", "Discord.js", "MongoDB", "TypeScript"],
      image: "https://i.ibb.co/z51dJQs/image.jpg",
      github: "https://github.com/bugsum/ochako",
      link: "https://github.com/bugsum/ochako",
    },
    {
      title: "Avlanc Cloud",
      description: "High Perfomance Cloud solution services by Avlanc Cloud!",
      tech: ["NextJS", "Framer Motion", "TailwindCSS", "TypeScript"],
      image: "https://i.ibb.co/cS2yqrks/avlanc-banner.png",
      // github: "",
      link: "https://avlanc.com",
    },
    {
      title: "Builders Wand",
      description:
        "A Fun Minecraft Plugin for Paper servers that takes worldedit to next level!",
      tech: ["Java", "PaperMC", "Bukkit API", "Coming Soon"],
      image: "https://i.ibb.co/MyQPXqCH/image.jpg",
      // github: "",
      // link: "https://avlanc.com",
    },
    {
      title: "Vedic Shastra API",
      description:
        "A Detailed API about various hindu scriptures, probably the biggest virtual library with the data of various hindu scriptures available in various readable languages.",
      tech: ["Typescript", "Express", "MySQL"],
      image: "https://i.ibb.co/mC2T93wz/Vedic-Shastra-API.png",
      github: "https://github.com/bugsum/vedic-shastra-api",
      link: "https://github.com/bugsum/vedic-shastra-api",
    },
    {
      title: "India's WC Journey",
      description:
        "A fun project made in the free time, it shows a brief history of Indias contribution and journey in the world cup.",
      tech: ["Typescript", "TailwindCSS", "NextJS", "Coming Soon"],
      image:
        "https://i.ibb.co/ymcvwfws/deccanherald-2024-06-22ff20c5-2f7a-4f5f-8c6f-e6283579333f-file7w31s5g9b5wk1hec8mm.webp",
      // github: "https://github.com/bugsum/vedic-shastra-api",
      // link: "https://github.com/bugsum/vedic-shastra-api",
    },
  ];

  return (
    <section className="projects-section py-20 bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-500/20 rounded-full text-sm text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github ? (
                      <a
                        href={project.github}
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    ) : null}
                    {project.link ? (
                      <a
                        href={project.link}
                        className="text-white hover:text-purple-400 transition-colors"
                        target="_blank"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    ) : null}
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
