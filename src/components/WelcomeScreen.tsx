import vietnam from '../vietnam.png'
import avatar from '../avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope, faFilePdf, faImage } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'

type WelcomeScreenProps = {
  onOpenFile: (fileName: string) => void
}

const METRICS = [
  { value: '8+', label: 'Years Experience' },
  { value: '10K+', label: 'Active Users' },
  { value: '3M+', label: 'Records Indexed' },
  { value: 'AWS', label: 'SAA Certified' },
]

const QUICK_FILES = [
  { file: 'overview.md', label: 'Read overview' },
  { file: 'experience.md', label: 'View experience' },
  { file: 'ThangCao_CV.pdf', label: 'Download CV' },
]

function QuickFileIcon({ fileName }: { fileName: string }) {
  if (fileName.includes('.pdf')) {
    return <FontAwesomeIcon icon={faFilePdf} size="sm" className="inline mr-1.5 text-red-400 shrink-0" />
  }
  if (fileName.includes('.png')) {
    return <FontAwesomeIcon icon={faImage} size="sm" className="inline mr-1.5 text-purple-400 shrink-0" />
  }
  return <span className="text-10px text-vscode-accent mr-1.5 font-bold font-mono shrink-0">M↓</span>
}

const WelcomeScreen = ({ onOpenFile }: WelcomeScreenProps) => {
  return (
    <div className="content-max animate-fade-up">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14 items-start lg:items-center mb-10 sm:mb-12 lg:mb-16">
        <div className="relative shrink-0 mx-auto lg:mx-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-vscode-accent/30 to-vscode-type/20 blur-sm" />
          <img
            src={avatar}
            alt="Thang Cao"
            className="relative w-120px h-120px sm:w-150px sm:h-150px rounded-full object-cover border-2 border-cool-gray-600"
          />
          <span className="absolute bottom-2 right-2 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-vscode-green border-2 border-cool-gray-800 animate-pulse-soft" title="Open to opportunities" />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <p className="font-mono text-sm sm:text-base text-vscode-comment mb-2">// welcome.ts</p>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.625rem] font-semibold text-white mb-2 leading-tight">
            Hello, I'm <span className="text-vscode-function">Thang Cao</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-[1.625rem] text-cool-gray-500 mb-1 flex items-center justify-center lg:justify-start gap-2">
            Full Stack Developer
            <img src={vietnam} alt="Vietnam" width={28} className="inline opacity-90 sm:w-7" />
          </p>
          <p className="text-base md:text-lg lg:text-[1.0625rem] text-cool-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            8 years building scalable web products — from React dashboards to AWS serverless APIs.
            Currently open to new opportunities.
          </p>

          <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
            <a href="/ThangCao_CV.pdf" target="_blank" rel="noopener noreferrer" className="cta-primary">
              <FontAwesomeIcon icon={faDownload} size="sm" />
              Download CV
            </a>
            <a href="https://www.linkedin.com/in/thang-cao96/" target="_blank" rel="noopener noreferrer" className="cta-secondary">
              <FontAwesomeIcon icon={faLinkedin} size="sm" />
              LinkedIn
            </a>
            <a href="mailto:cvthang56th2@gmail.com" className="cta-secondary">
              <FontAwesomeIcon icon={faEnvelope} size="sm" />
              Email me
            </a>
          </div>

          <div className="flex gap-4 sm:gap-5 justify-center lg:justify-start">
            {[
              { href: 'https://github.com/cvthang56th2', icon: faGithub, hover: 'hover:text-white' },
              { href: 'https://www.facebook.com/cvthang56th2', icon: faFacebookF, hover: 'hover:text-blue-400' },
              { href: 'https://www.linkedin.com/in/thang-cao96/', icon: faLinkedin, hover: 'hover:text-blue-400' },
            ].map(({ href, icon, hover }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={`text-cool-gray-400 ${hover} transition-colors text-xl sm:text-2xl`}>
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-10 lg:mb-14">
        {METRICS.map(({ value, label }) => (
          <div key={label} className="metric-card">
            <span className="text-2xl md:text-3xl lg:text-[2rem] font-semibold font-mono text-vscode-function">{value}</span>
            <span className="text-xs sm:text-sm text-vscode-comment mt-1 sm:mt-2 text-center">{label}</span>
          </div>
        ))}
      </div>

      <div>
        <p className="section-heading mb-4 lg:mb-5">Quick open</p>
        <div className="flex flex-wrap gap-3">
          {QUICK_FILES.map(({ file, label }) => (
            <button
              key={file}
              onClick={() => onOpenFile(file)}
              className="cta-secondary font-mono"
            >
              <QuickFileIcon fileName={file} />
              {label}
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm md:text-base text-vscode-comment font-mono leading-relaxed">
          <span className="text-vscode-keyword">tip</span>: explore files in the sidebar, or start with{' '}
          <button onClick={() => onOpenFile('overview.md')} className="text-vscode-accent hover:underline">overview.md</button>
          {' · '}
          <span className="text-vscode-keyword">Ctrl+W</span> close tab · <span className="text-vscode-keyword">Ctrl+Shift+W</span> close all
          <span className="hidden md:inline text-vscode-comment/70"> (⌘W is reserved by the browser)</span>
        </p>
      </div>
    </div>
  )
}

export default WelcomeScreen
