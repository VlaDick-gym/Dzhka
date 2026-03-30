"use client";

import { useEffect, useState } from "react";
import { skills, experiences, personalInfo } from "@/utils/data";
import { FiCode, FiBriefcase, FiMapPin, FiMail } from "react-icons/fi";

export default function About() {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gradient">Обо мне</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <FiCode className="text-accent" />
              Обо мне
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 whitespace-pre-line">
              {personalInfo.about}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="text-accent" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-accent" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Навыки</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100 + 300}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div
          className={`mt-20 max-w-4xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 justify-center">
            <FiBriefcase className="text-accent" />
            Опыт работы
          </h3>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold text-gray-200">
                    {exp.position}
                  </h4>
                  <p className="text-accent">{exp.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-gray-400 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
