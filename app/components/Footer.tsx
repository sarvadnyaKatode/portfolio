export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h3 className="text-2xl font-semibold mb-4">
          Sarvadnya Katode
        </h3>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Building scalable AI-powered systems with production-grade
          infrastructure and cloud-native engineering practices.
        </p>

        <div className="flex justify-center gap-8 text-sm text-gray-400 mb-10">
          <a
            href="mailto:your-email@example.com"
            className="hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Sarvadnya Katode. All rights reserved.
        </p>

      </div>
    </footer>
  );
}