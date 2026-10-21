import {
    Download,
    FileText,
    MapPin,
    Mail,
    Briefcase,
    Code2,
    GraduationCap,
    Award,
    Layers,
    Server,
} from 'lucide-react'

const highlights = [
    { icon: Layers, label: 'Full Stack Projects', value: '4+' },
    { icon: Server, label: 'REST APIs Built', value: '40+' },
    { icon: Code2, label: 'Technologies', value: '15+' },
    { icon: Award, label: 'Certifications', value: '4' },
]

const sections = [
    {
        icon: FileText,
        title: 'Professional Summary',
        description: 'Overview of experience building secure, scalable apps with Spring Boot & React.',
    },
    {
        icon: Code2,
        title: 'Technical Skills',
        description: 'Java, Spring Boot, React.js, MySQL, Docker, JWT, and more.',
    },
    {
        icon: Briefcase,
        title: 'Experience & Projects',
        description: 'Internship work and full-stack projects with live demos.',
    },
    {
        icon: GraduationCap,
        title: 'Education',
        description: 'PG-DAC (87.38%) and B.E. in E&TC (CGPA 8.55).',
    },
    {
        icon: Award,
        title: 'Certifications',
        description: 'CDAC, Full Stack Java Development, and employability programs.',
    },
]

function Resume() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Download button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                    href="/Vishal_Resume.pdf"
                    download="Vishal_Patil_Resume.pdf"
                    className="btn-primary text-base shadow-md shadow-accent/20"
                >
                    <Download className="w-5 h-5" />

                </a>
                {/* <p className="text-xs text-muted">
                        Download Resume
                    </p> */}
            </div>
            {/* Header */}
            <div className="text-center mb-12 mt-2">
                {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-5">
                    <FileText className="w-8 h-8 text-accent" />
                </div> */}
                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">Resume</h1>
                <p className="text-xl font-semibold text-accent mb-1">Vishal Patil</p>
                <p className="text-muted mb-4">Java Full Stack Developer</p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> Pune, Maharashtra
                    </span>
                    <a
                        href="mailto:vishalpatil.dev2@gmail.com"
                        className="flex items-center gap-1.5 hover:text-accent transition-colors"
                    >
                        <Mail className="w-4 h-4" /> vishalpatil.dev2@gmail.com
                    </a>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {highlights.map((item) => {
                    const Icon = item.icon
                    return (
                        <div key={item.label} className="card text-center py-6">
                            <div className="inline-flex p-2.5 rounded-lg bg-accent/10 mb-3">
                                <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <p className="text-2xl font-bold text-dark">{item.value}</p>
                            <p className="text-sm text-muted mt-1">{item.label}</p>
                        </div>
                    )
                })}
            </div>

            {/* What's inside */}
            <div className="card mb-10">
                <h2 className="text-lg font-bold text-dark mb-2">Download my resume</h2>
                <p className="text-muted text-sm leading-relaxed mb-6">
                    Get a complete overview of my skills, projects, education, and experience as a Java Full
                    Stack Developer.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {sections.map((sec) => {
                        const Icon = sec.icon
                        return (
                            <div
                                key={sec.title}
                                className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
                            >
                                <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                                    <Icon className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <p className="font-medium text-dark text-sm">{sec.title}</p>
                                    <p className="text-xs text-muted mt-0.5">{sec.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Download button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/Vishal_Resume.pdf"
                        download="Vishal_Patil_Resume.pdf"
                        className="btn-primary text-base px-6 py-3 shadow-md shadow-accent/20"
                    >
                        <Download className="w-5 h-5" />
                        Download Resume (PDF)
                    </a>
                    <p className="text-xs text-muted">
                        ATS-friendly one-page resume · Updated 2026
                    </p>
                </div>
            </div>

            {/* Quick preview note */}
            <div className="rounded-xl bg-accent/5 border border-accent/10 p-5 text-center">
                <p className="text-sm text-muted">
                    Prefer to explore online? Check the{' '}
                    <a href="/" className="text-accent font-medium hover:underline">
                        Profile
                    </a>
                    ,{' '}
                    <a href="/projects" className="text-accent font-medium hover:underline">
                        Projects
                    </a>
                    , and{' '}
                    <a href="/experience" className="text-accent font-medium hover:underline">
                        Experience
                    </a>{' '}
                    pages for interactive details.
                </p>
            </div>
        </div>
    )
}

export default Resume
