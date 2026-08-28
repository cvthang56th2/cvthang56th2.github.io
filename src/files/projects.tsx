import ContentLayout from '../components/ContentLayout'

const projects = [
  {
    name: 'wcif.cc',
    url: 'https://wcif.cc',
    subtitle: 'Search & Data Platform',
    period: 'Independent Project · 2025 – Present',
    highlight: true,
    bullets: [
      'Built and operate a high-traffic search platform serving 10K+ users and indexing 3M+ records for The Sims 4 custom content.',
      'Designed the data pipeline end to end: scraping, ingestion, normalization, and sync workflows.',
      'Integrated Typesense with Next.js + NestJS for fast, relevant search across millions of records.',
      'Owned architecture, database design, deployment, monitoring, and production support.',
    ],
  },
  {
    name: 'Saypien',
    subtitle: 'AI Survey Platform',
    period: 'Product Delivery · 2025',
    bullets: [
      'Built AI-powered survey generation and editing features with React and Next.js.',
      'Connected AI workflows to review and refinement screens for faster survey publishing.',
      'Improved UI/UX, accessibility, and frontend performance while shipping product updates.',
    ],
  },
  {
    name: 'Spice',
    url: 'https://resume.zcareer.com/',
    subtitle: 'Smart Rirekisho',
    period: 'Product Delivery · 2024',
    bullets: [
      'Built features for an AI-powered resume platform using React and Next.js.',
      'Integrated OpenAI-powered workflows into the resume creation flow.',
      'Supported delivery through implementation, code reviews, and cross-functional coordination.',
    ],
  },
  {
    name: 'Internal Engineering Tools',
    period: '2020 – 2023',
    bullets: [
      'Built internal tools that reduced repetitive development, testing, and deployment work.',
      'Created reusable testing templates and CI/CD pipelines to standardize project setup.',
      'Developed WordPress plugins and automation utilities that improved team efficiency.',
    ],
  },
]

const Projects = () => {
  return (
    <ContentLayout fileName="projects.md" title="Selected Projects" titleColor="text-vscode-string">
      <div className="space-y-6 lg:space-y-8">
        {projects.map(({ name, url, subtitle, period, highlight, bullets }) => (
          <div
            key={name}
            className={`p-4 sm:p-5 lg:p-6 rounded-lg border transition-colors ${
              highlight
                ? 'border-vscode-accent/30 bg-vscode-accent/5 hover:border-vscode-accent/50'
                : 'border-custom-gray-200/30 bg-cool-gray-900/40 hover:border-custom-gray-200/50'
            }`}
          >
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="content-subheading text-vscode-accent hover:underline">
                  {name}
                </a>
              ) : (
                <h4 className="content-subheading">{name}</h4>
              )}
              {subtitle && <span className="content-meta font-mono">— {subtitle}</span>}
            </div>
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

export default Projects
