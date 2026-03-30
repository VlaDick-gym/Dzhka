"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/utils/data";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="py-8 bg-primary border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}. Все права защищены.
          </p>

          <p className="text-gray-500 text-sm">
            Создано с использованием{" "}
            <span className="text-accent">Next.js</span> и{" "}
            <span className="text-accent">Three.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
