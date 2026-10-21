import { GraduationCap, Calendar, Award } from 'lucide-react'

const education = [
  {
    degree: 'PG-DAC (Post Graduate Diploma in Advanced Computing)',
    institution: 'IACSD, Akurdi, Pune',
    period: '2025',
    score: 'Score: 87.38%',
    highlight: true,
  },
  {
    degree: 'B.E. in Electronics and Telecommunication',
    institution: 'Savitribai Phule Pune University',
    period: '2020 – 2024',
    score: 'CGPA: 8.55',
    highlight: false,
  },
]

function Education() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="section-title">Education</h1>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className={`card ${edu.highlight ? 'border-accent/30 ring-1 ring-accent/10' : ''}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className={`p-3 rounded-xl shrink-0 ${edu.highlight ? 'bg-accent text-white' : 'bg-accent/10 text-accent'}`}>
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h2 className="text-lg font-bold text-dark">{edu.degree}</h2>
                  <span className="flex items-center gap-1.5 text-sm text-muted">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                </div>
                <p className="text-accent font-medium mb-2">{edu.institution}</p>
                {edu.score && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full">
                    <Award className="w-3.5 h-3.5" />
                    {edu.score}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note about focus */}
      <div className="mt-10 p-5 rounded-xl bg-accent/5 border border-accent/10">
        <p className="text-sm text-muted leading-relaxed">
          <span className="font-semibold text-accent">Focus:</span> Specialized in Advanced Computing
          through CDAC PG-DAC with strong foundation in full-stack Java development, data structures,
          and enterprise application design.
        </p>
      </div>
    </div>
  )
}

export default Education
