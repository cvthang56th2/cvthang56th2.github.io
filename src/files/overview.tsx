import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ContentLayout from '../components/ContentLayout'

const Overview = () => {
  return (
    <ContentLayout fileName="overview.md" title="Overview">
      <div className="mb-8 lg:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold text-white mb-1">Thang Cao</h3>
        <p className="text-vscode-function font-mono text-lg md:text-xl lg:text-[1.35rem] mb-4">Full Stack Developer</p>
        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          <a href="tel:+84368844581" className="flex items-center gap-2 text-cool-gray-500 hover:text-vscode-accent transition-colors">
            <FontAwesomeIcon icon={faPhone} size="sm" className="text-vscode-comment shrink-0" />
            +84 368 844 581
          </a>
          <a href="mailto:cvthang56th2@gmail.com" className="flex items-center gap-2 text-cool-gray-500 hover:text-vscode-accent transition-colors">
            <FontAwesomeIcon icon={faEnvelope} size="sm" className="text-vscode-comment shrink-0" />
            cvthang56th2@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/thang-cao96/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cool-gray-500 hover:text-vscode-accent transition-colors">
            <FontAwesomeIcon icon={faLinkedin} size="sm" className="text-vscode-comment shrink-0" />
            thang-cao96
          </a>
        </div>
      </div>

      <p className="section-heading">Summary</p>
      <p className="text-cool-gray-500 leading-relaxed">
        Full Stack Engineer with <strong className="text-white font-medium">8 years</strong> of experience building and shipping scalable web products across
        frontend, backend, cloud, and data. Works directly with overseas clients to clarify requirements, translate
        business needs into technical solutions, estimate scope, manage delivery, and ship production-ready
        applications end to end. Strong in TypeScript, React/Next.js, Vue, Node/NestJS, PostgreSQL, MongoDB,
        AWS, and AI/LLM integration, with a track record of serving <strong className="text-vscode-orange font-medium">10K+ users</strong>, indexing <strong className="text-vscode-orange font-medium">3M+ records</strong>, and
        improving performance by up to <strong className="text-vscode-green font-medium">10×</strong>.
      </p>
    </ContentLayout>
  )
}

export default Overview
