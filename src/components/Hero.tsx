"use client";

import { useEffect, useState } from "react";
import Hero3D from "./Hero3D";
import { personalInfo } from "@/utils/data";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Hero3D />

      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-gray-300 mb-2">Привет, меня зовут</span>
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-400 mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {personalInfo.title}
          </p>

          <p
            className={`text-lg text-gray-500 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Создаю современные веб-приложения с фокусом на производительность,
            доступность и пользовательский опыт
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Смотреть проекты
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-gray-600 hover:border-accent text-gray-300 hover:text-accent font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Связаться со мной
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
