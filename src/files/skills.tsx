import ContentLayout from '../components/ContentLayout'

const skillGroups = [
  { label: 'Frontend', skills: ['TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Vuetify'] },
  { label: 'Backend', skills: ['Node.js', 'NestJS', 'Go', 'PHP', 'REST APIs', 'Socket.io', 'WordPress'] },
  { label: 'Data & Search', skills: ['PostgreSQL', 'MongoDB', 'Typesense'] },
  { label: 'Cloud & DevOps', skills: ['Docker', 'CI/CD', 'AWS', 'DigitalOcean', 'Supabase'] },
  { label: 'Engineering', skills: ['System Design', 'API Design', 'Performance Optimization', 'Automated Testing', 'Code Review', 'AI/LLM Integration'] },
]

const Skills = () => {
  return (
    <ContentLayout fileName="skills.md" title="Core Skills" titleColor="text-vscode-type">
      <div className="space-y-8 lg:space-y-10">
        {skillGroups.map(({ label, skills }) => (
          <div key={label}>
            <p className="section-heading">{label}</p>
            <div className="flex flex-wrap mt-3">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ContentLayout>
  )
}

export default Skills
