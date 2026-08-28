import { ReactNode } from 'react'
import { usePortfolioNavigation } from '../context/PortfolioNavigation'

type ContentLayoutProps = {
  fileName: string
  title: string
  titleColor?: string
  children: ReactNode
}

const breadcrumbBtn =
  'rounded px-0.5 -mx-0.5 transition-colors hover:text-vscode-accent hover:underline hover:bg-cool-gray-700/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vscode-accent'

const ContentLayout = ({ fileName, title, titleColor = 'text-vscode-keyword', children }: ContentLayoutProps) => {
  const { openFile, goHome } = usePortfolioNavigation()

  return (
    <div className="flex flex-col h-full animate-fade-up font-sans">
      <div className="flex-0 mb-5 sm:mb-6 lg:mb-8 pb-4 lg:pb-6 border-b border-custom-gray-200/40">
        <nav aria-label="Breadcrumb" className="font-mono text-xs sm:text-sm text-vscode-comment mb-2">
          <button type="button" onClick={goHome} className={`text-vscode-type ${breadcrumbBtn}`}>
            portfolio
          </button>
          <span className="text-cool-gray-400"> / </span>
          <button type="button" onClick={() => openFile(fileName)} className={`text-vscode-string ${breadcrumbBtn}`}>
            {fileName}
          </button>
        </nav>
        <h2 className={`text-2xl md:text-3xl lg:text-[2rem] font-semibold leading-tight ${titleColor}`}>
          {title}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto prose-content">
        {children}
      </div>
    </div>
  )
}

export default ContentLayout
