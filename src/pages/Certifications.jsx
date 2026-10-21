import { Award, CheckCircle2 } from 'lucide-react'

const certifications = [
  {
    title: 'CDAC PG-DAC',
    detail: 'Achieved 87.38% in CDAC PG-DAC and secured 79% in the CDAC Common Campus Exam (CCE).',
    year: '2025',
  },
  {
    title: 'Full Stack Java Development',
    detail: 'Firstbit Solutions',
    year: '2024',
  },
  {
    title: 'Employability Skill Development Program',
    detail: 'RPG Foundation (Zensar)',
    year: '2023',
  },
]

function Certifications() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title">Certifications & Achievements</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div key={idx} className="card flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xs font-medium text-muted bg-slate-100 px-2.5 py-1 rounded-full">
                {cert.year}
              </span>
            </div>

            <h2 className="font-bold text-dark mb-2">{cert.title}</h2>
            <p className="text-sm text-muted leading-relaxed flex-1">{cert.detail}</p>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-green-600 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Completed
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
