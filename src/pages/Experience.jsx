import { Briefcase, ExternalLink, Github, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Java Full Stack Developer Intern',
    company: 'PJSofttech, Pune',
    period: '2025 – Present',
    projects: [
      {
        title: 'Expense Tracker — Full Stack Financial Management Application',
        tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MySQL'],
        github: 'https://github.com/VishalPatilDev/ExpenseTracker_FullStack',
        live: 'https://expense-tracker-full-stack-dusky.vercel.app',
        points: [
          'Developed a full-stack financial management application with transaction CRUD, income/expense categorization, and interactive monthly analytics, secured via Spring Security + JWT with a responsive React dashboard (Recharts).',
        ],
      },
      {
        title: 'Library Management System — Full Stack Library Operations Platform',
        tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MySQL', 'Razorpay'],
        github: 'https://github.com/VishalPatilDev/NewLibraryManagementSystem_FullStack',
        live: null,
        points: [
          'Developed a full-stack library platform supporting book management, member registration, academic year activation, loans, reservations, and fine management with role-based access control (ADMIN, LIBRARIAN, MEMBER) and Razorpay-based fine payments.',
        ],
      },
    ],
  },
]

function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title">Experience</h1>

      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            {/* Role header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-accent/10 mt-0.5">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark">{exp.role}</h2>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-muted text-sm sm:ml-auto">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
            </div>

            {/* Projects under this role */}
            <div className="space-y-6 ml-0 sm:ml-12">
              {exp.projects.map((project, pIdx) => (
                <div key={pIdx} className="card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-dark text-lg">{project.title}</h3>
                    <div className="flex items-center gap-3 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                        >
                          <Github className="w-4 h-4" /> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" /> Live App
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-tag text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-muted text-sm leading-relaxed">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
