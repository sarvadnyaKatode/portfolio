export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        <div>
          <span className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Sarvadnya Katode
          </span>
          <p className="text-text-muted text-sm mt-1">AI Engineer & Data Enthusiast — Mumbai, India</p>
        </div>
        
        <div className="flex gap-6 text-sm text-text-muted">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Resume</a>
        </div>

        <p className="text-xs text-text-muted opacity-50">
          &copy; {new Date().getFullYear()} Built with Next.js &amp; Vercel
        </p>
      </div>
    </footer>
  );
}