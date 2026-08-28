import ContentLayout from '../components/ContentLayout'

const experiences = [
  {
    company: 'Freelance & Independent Projects',
    role: 'Full Stack Developer',
    period: 'Remote · Jul 2025 – Present',
    current: true,
    bullets: [
      'Owned direct communication with overseas clients to gather requirements, clarify scope, propose solution options, and estimate delivery plans.',
      'Led end-to-end delivery across discovery, architecture, development, testing, deployment, monitoring, and post-launch support.',
      'Built full-stack solutions with React, Next.js, Node.js, NestJS, PostgreSQL, MongoDB, AWS, and WordPress.',
      'Managed tasks and resolved production issues across application, database, and infrastructure layers.',
    ],
  },
  {
    company: 'BetaMind Inc.',
    role: 'Full Stack Developer',
    period: 'Tokyo, Japan · Remote · May 2024 – Jun 2025',
    bullets: [
      'Built and shipped web features with React and Next.js, turning product requirements into reusable UI and end-to-end functionality.',
      'Implemented AWS serverless APIs and supporting cloud services for production applications.',
      'Developed AI-powered features with OpenAI and Go, integrating them into user-facing workflows.',
      'Partnered with product, design, and engineering teammates on feature delivery and architecture decisions.',
    ],
  },
  {
    company: 'TTEK Inc.',
    role: 'Full Stack Developer',
    period: 'Ho Chi Minh City · Remote · Jul 2023 – May 2024',
    bullets: [
      'Built reusable Vue.js and Vuetify components for risk-management, monitoring, and analytics platforms.',
      'Added real-time synchronization with Socket.io to improve visibility in time-sensitive workflows.',
      'Translated business requirements and UI designs into maintainable frontend features.',
      'Contributed to frontend architecture and shared component patterns across multiple applications.',
    ],
  },
  {
    company: '9thWonder Agency',
    role: 'Full Stack Developer',
    period: 'Nha Trang, Vietnam · Onsite · Jun 2018 – Jun 2023',
    bullets: [
      'Delivered and maintained 10+ web products for US and Vietnamese clients, including marketing sites, dashboards, internal tools, and CMS-based solutions.',
      'Built across React, Vue.js, Node.js, PHP, and WordPress, covering UI, APIs, database design, testing, and deployment.',
      'Improved query performance on large datasets, cutting response times 10× — from 2s to 200ms.',
      'Took ownership of feature delivery and troubleshooting across frontend and backend.',
    ],
  },
]

const Experience = () => {
  return (
    <ContentLayout fileName="experience.md" title="Professional Experience" titleColor="text-vscode-function">
      <div className="space-y-0">
        {experiences.map(({ company, role, period, current, bullets }) => (
          <div key={company} className="timeline-item">
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h4 className="content-subheading">{company}</h4>
              {current && (
                <span className="text-xs sm:text-sm font-mono px-2 py-0.5 rounded-full bg-vscode-green/15 text-vscode-green border border-vscode-green/30">
                  current
                </span>
              )}
            </div>
            <p className="content-role mb-0.5">{role}</p>
            <p className="content-meta italic mb-3 lg:mb-4">{period}</p>
            <ul className="list-disc space-y-2 text-cool-gray-500">
              {bullets.map(b => (
                <li key={b.slice(0, 40)}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ContentLayout>
  )
}

export default Experience
