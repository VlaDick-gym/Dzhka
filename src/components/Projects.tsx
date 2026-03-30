"use client";

import { useEffect, useState } from "react";
import { projects } from "@/utils/data";

const projectColors = [
  "from-blue-500 to-blue-600",
  "from-sky-500 to-sky-600",
  "from-orange-500 to-orange-600",
  "from-purple-500 to-purple-600",
  "from-green-500 to-green-600",
  "from-pink-500 to-pink-600",
];

const projectEmojis = ["📋", "☁️", "📖", "👤", "💰", "🎬"];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gradient">Проекты</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-secondary rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Icon with Emoji */}
              <div className={`h-32 bg-gradient-to-br ${projectColors[index]} flex items-center justify-center flex-shrink-0`}>
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {projectEmojis[index]}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-200 group-hover:text-accent transition-colors duration-300 flex-shrink-0">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full flex-shrink-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Buttons - Always at bottom */}
                <div className="flex gap-2 flex-shrink-0 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-accent to-purple-600 hover:from-accent-hover hover:to-purple-500 text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span>🚀</span>
                      <span>Запустить</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border border-gray-600 hover:border-accent text-gray-300 hover:text-accent font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                      aria-label="View code"
                    >
                      <span>💻</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
