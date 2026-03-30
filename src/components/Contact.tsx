"use client";

import { useEffect, useState } from "react";
import { socialLinks, personalInfo } from "@/utils/data";
import {
  FiGithub,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { FaTelegram, FaLinkedin } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FiGithub,
  telegram: FaTelegram,
  linkedin: FaLinkedin,
  email: FiMail,
};

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gradient">Контакты</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Давайте работать вместе
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Я всегда открыт для обсуждения новых проектов, творческих идей или
              возможностей стать частью ваших визионерских проектов. Не
              стесняйтесь обращаться!
            </p>

            <div className="space-y-6">
              {socialLinks.map((link, index) => {
                const IconComponent = iconMap[link.icon] || FiMail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center gap-4 text-gray-300 hover:text-accent transition-all duration-300 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-lg">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Ваше имя
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200 text-gray-200"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200 text-gray-200"
                    placeholder="ivan@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Сообщение
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-4 text-gray-500" />
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3 bg-primary border border-gray-700 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200 text-gray-200 resize-none"
                    rows={5}
                    placeholder="Расскажите о вашем проекте..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent hover:bg-accent-hover disabled:bg-gray-600 text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Отправка...</span>
                ) : (
                  <>
                    <FiSend />
                    <span>Отправить сообщение</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center animate-fade-in">
                  Сообщение успешно отправлено!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
