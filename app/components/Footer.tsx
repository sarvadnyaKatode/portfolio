export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold tracking-tight">
              Sarvadnya Katode
            </h3>
            <p className="text-gray-400 mt-3 max-w-md text-sm">
              Hybrid Data & Cloud Engineer focused on scalable data systems,
              distributed architecture, and production-ready AI infrastructure.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a
              href="mailto:sarvadnyakatode@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/sarvadnya-katode/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/sarvadnyaKatode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-neutral-900"></div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sarvadnya Katode. Built with Next.js & deployed on Vercel.
        </div>

      </div>
    </footer>
  );
}