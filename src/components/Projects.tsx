"use client";

import { useEffect, useState } from "react";
import { projects } from "@/utils/data";
import { FiGithub, FiExternalLink, FiPlay, FiCheckSquare, FiCloud, FiBook, FiUser, FiDollarSign, FiFilm } from "react-icons/fi";

const projectIcons: Record<number, React.ComponentType<{ size?: number }>> = {
  1: FiCheckSquare,  // To-Do List
  2: FiCloud,        // Weather
  3: FiBook,         // Recipe
  4: FiUser,         // GitHub Profile
  5: FiDollarSign,   // Expense Tracker
  6: FiFilm,         // Movie Database
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.id] || FiExternalLink;
            
            return (
              <div
                key={project.id}
                className={`group bg-secondary rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 transform hover:-translate-y-2 flex flex-col ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Icon - Fixed Height */}
                <div className="relative h-40 bg-gradient-to-br from-accent/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={40} className="text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent hover:bg-accent-hover text-primary rounded-full transition-colors duration-200 transform hover:scale-110"
                        aria-label="View code"
                        title="Исходный код"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent hover:bg-accent-hover text-primary rounded-full transition-colors duration-200 transform hover:scale-110"
                        aria-label="View demo"
                        title="Демо версия"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info - Flex Grow */}
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
                  
                  {/* Launch Buttons - Fixed at bottom */}
                  <div className="flex gap-2 flex-shrink-0 mt-auto">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-accent to-purple-600 hover:from-accent-hover hover:to-purple-500 text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <FiPlay size={18} />
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
                        <FiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
