import { Github, ExternalLink, FolderGit2 } from 'lucide-react'

const projects = [
  {
    title: 'Smart Inventory Management',
    subtitle: 'Full Stack Enterprise System',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA/Hibernate', 'React.js (Vite)', 'MySQL'],
    github: 'https://github.com/VishalPatilDev/Smart_Inventory_Management_FullStackProject',
    live: 'https://smart-inventory-manage.netlify.app/',
    points: [
      'Built a full-stack inventory system covering the complete procurement-to-sales lifecycle across multiple warehouses with 12+ JPA entities and transactional order flows.',
      'Implemented JWT authentication and role-based authorization (ADMIN/STAFF) using Spring Security with @PreAuthorize guards across 35+ REST API endpoints.',
      'Developed a 12-page React.js frontend with a live dashboard, JWT-aware Axios interceptors and protected routes.',
      'Built a stock audit trail (PURCHASE, SALE, DAMAGE, TRANSFER, RETURN) and business reports covering inventory valuation, top-sellers, and low-stock alerts.',
      'Developed a business intelligence module featuring inventory valuation reports, warehouse-wise revenue analysis, date-range sales and purchase reports, top-selling products, and low-stock alerts with CRITICAL and LOW priority levels.',

      'Created a React.js frontend with 12 pages including a live dashboard powered by Recharts, JWT-aware Axios interceptors, protected routes, role-based UI rendering, and reusable components such as Modal, Table, Badge, and StatCard.'
    ],
  },
  {
    title: 'LearnSphere',
    subtitle: 'Full Stack E-Learning Platform',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MySQL', 'Docker'],
    github: 'https://github.com/VishalPatilDev/LearnSphere_DacProj',
    live: null,
    points: [
      'Built 20+ RESTful APIs for user management, course management, quizzes, and certificate generation with JWT auth supporting Admin and User roles.',
      'Designed 8+ database entities using JPA/Hibernate following layered architecture; containerized the full application using Docker.',
      'Implemented JWT-based authentication and role-based authorization supporting 2 user roles (Admin and User).',

      'Secured 15+ API endpoints using Spring Security and JWT token validation.',

      'Integrated MySQL for persistent storage and containerized the application using Docker.',
      'Tested APIs using Postman with proper exception handling and input validation.'
    ],
  },
]

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title">Projects</h1>
      <p className="text-muted mb-8 max-w-2xl">
        Personal and academic full-stack projects showcasing end-to-end development with Spring Boot and React.
      </p>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <article key={idx} className="card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-accent/10 shrink-0">
                  <FolderGit2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark">{project.title}</h2>
                  <p className="text-muted text-sm">{project.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2 px-3"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-3"
                  >
                    <ExternalLink className="w-4 h-4" /> Live App
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="skill-tag">
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-2.5">
              {project.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-muted text-sm leading-relaxed">
                  <span className="text-accent font-bold mt-0.5 shrink-0">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
