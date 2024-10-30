import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.fromTo('.contact-content',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-content',
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  }, []);

  return (
    <section className="contact-section py-20 bg-gradient-to-b from-violet-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="contact-content max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Let's Connect
          </h2>
          <p className="text-gray-300 mb-12 text-lg">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:samarthsharma9377@gmail.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com/bugsum" className="text-white hover:text-purple-400 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            {/* <a href="#" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a> */}
            {/* <a href="#" className="text-white hover:text-purple-400 transition-colors">
              <Twitter className="w-8 h-8" />
            </a> */}
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 rounded-lg border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;