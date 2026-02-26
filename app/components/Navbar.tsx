"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-semibold text-white tracking-wide">
          SK
        </span>

        <div className="hidden sm:flex gap-8 text-sm text-gray-400">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="/resume.pdf" className="hover:text-white transition">
            Resume
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
        </div>
      </div>
    </nav>
  );
}