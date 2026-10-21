import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Code2,
  Database,
  Layout,
  Server,
} from 'lucide-react'

const skills = {
  Languages: ['Java', 'JavaScript', 'C', 'C++', 'C#'],
  Backend: [
    'Spring Boot',
    'Spring Security (JWT)',
    'REST APIs',
    'JPA/Hibernate',
    'Spring Data JPA',
    'Maven',
    'JUnit',
    'Mockito',
  ],
  Frontend: [
    'React.js (Vite)',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Axios',
    'React Router',
    'Recharts',
    'Shadcn',
  ],
  Databases: ['MySQL', 'MongoDB', 'SQL', 'Database Design'],
  'DevOps & Tools': ['Git', 'GitHub', 'Docker', 'Postman', 'Render', 'Railway', 'Netlify', 'CI/CD'],
  Concepts: ['OOP', 'Multithreading', 'DSA', 'Exception Handling', 'Agile', 'SDLC'],
}

const skillIcons = {
  Languages: Code2,
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  'DevOps & Tools': Server,
  Concepts: Code2,
}

function Profile() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent to-accent-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <p className="text-blue-200 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Vishal Patil</h1>
              <p className="text-xl text-blue-100 mb-6">Java Full Stack Developer</p>
              <p className="text-blue-100/90 max-w-xl leading-relaxed mb-8">
                Building secure, scalable web applications with Spring Boot and React.js.
                Passionate about clean, maintainable code and modern architecture.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                <a href="mailto:vishalpatil.dev2@gmail.com" className="btn-primary bg-white text-accent hover:bg-blue-50">
                  <Mail className="w-4 h-4" /> Contact Me
                </a>
                <Link to="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-accent">
                  View Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-blue-100">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> Pune, Maharashtra
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" /> +91 9850363353
                </span>
              </div>
            </div>

            {/* Avatar / Quick links card */}
            <div className="w-full max-w-xs bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                {/* <span className="text-3xl font-bold">VP</span> */}
                <img className='rounded-full' src="/Vishal_Photo.png" alt="Profile Photo" />
                
              </div>
               
              
              <div className="space-y-3">
                <a
                  href="https://github.com/VishalPatilDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vishalpatildevloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a
                  href="mailto:vishalpatil.dev2@gmail.com"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="section-title">Professional Summary</h2>
        <div className="card">
          <p className="text-muted leading-relaxed">
            Java Full Stack Developer with hands-on internship and project experience building secure,
            scalable web applications using Spring Boot and React.js. Proficient in REST API development,
            JWT-based authentication, role-based authorization, JPA/Hibernate, and layered MVC architecture.
            Experienced with Docker, MySQL, and Agile practices. Passionate about clean, maintainable code.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = skillIcons[category] || Code2
            return (
              <div key={category} className="card">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-dark">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Profile
