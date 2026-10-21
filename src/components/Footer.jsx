import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Vishal Patil</p>
            <p className="text-slate-400 text-sm mt-1">Java Full Stack Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:vishalpatil.dev2@gmail.com"
              className="p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishalpatildevloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/VishalPatilDev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://vishal-patil-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-accent transition-colors"
              aria-label="Portfolio"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Vishal Patil. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}

export default Footer
