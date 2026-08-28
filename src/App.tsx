import { useCallback, useEffect, useRef, useState } from 'react'
import Overview from './files/overview'
import Skills from './files/skills'
import Hobbies from './files/hobbies'
import Experience from './files/experience'
import Education from './files/education'
import Projects from './files/projects'
import Certificates from './files/certificates'
import WelcomeScreen from './components/WelcomeScreen'
import { PortfolioNavigationProvider } from './context/PortfolioNavigation'
import './App.css'
import avatar from './avatar.png'
import vueCertificate from './vue-certificate.png'
import awsSAACertificate from './aws-SAA-C03-certificate.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodeBranch, faEnvelope, faChevronRight, faTriangleExclamation,
  faCheck, faRefresh, faGear, faImage, faFilePdf,
} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Tooltip } from 'react-tooltip'

type FileIconProps = { fileName: string }

function FileIcon({ fileName }: FileIconProps) {
  if (fileName.includes('.pdf')) {
    return <FontAwesomeIcon icon={faFilePdf} size="sm" className="inline mr-1.5 mt-0.5 text-red-400 shrink-0" />
  }
  if (fileName.includes('.png')) {
    return <FontAwesomeIcon icon={faImage} size="sm" className="inline mr-1.5 mt-0.5 text-purple-400 shrink-0" />
  }
  return <span className="text-10px text-vscode-accent mr-1.5 mt-0.5 font-bold font-mono shrink-0">M↓</span>
}

const WELCOME_FILE = 'welcome.md'

function App() {
  const [openingFiles, setOpeningFiles] = useState<string[]>([WELCOME_FILE])
  const files = [
    WELCOME_FILE,
    'overview.md',
    'skills.md',
    'hobbies.md',
    'experience.md',
    'education.md',
    'projects.md',
    'certificates.md',
    'avatar.png',
    'vue-certificate.png',
    'aws-SAA-C03-certificate.png',
    'ThangCao_CV.pdf',
  ]
  const [isShowFileToolbar, setIsShowFileToolbar] = useState(false)
  const [isExpandFiles, setIsExpandFiles] = useState(true)
  const [fileSelected, setFileSelected] = useState<string | null>(WELCOME_FILE)

  const openFile = (fileName: string) => {
    if (fileName.includes('.pdf')) {
      window.open(`/${fileName}`, '_blank')
      return
    }
    const newValues = [...openingFiles]
    if (!openingFiles.includes(fileName)) {
      newValues.push(fileName)
    }
    setOpeningFiles(newValues)
    setFileSelected(fileName)
  }

  const closeTabByName = useCallback((fileName: string) => {
    setOpeningFiles(prev => {
      const newValues = prev.filter(f => f !== fileName)
      setFileSelected(current =>
        current === fileName ? (newValues[newValues.length - 1] ?? null) : current
      )
      return newValues
    })
  }, [])

  const closeAllTabs = useCallback(() => {
    setOpeningFiles([WELCOME_FILE])
    setFileSelected(WELCOME_FILE)
  }, [])

  const closeFile = (e: React.MouseEvent<HTMLElement>, fileName: string) => {
    e.stopPropagation()
    closeTabByName(fileName)
  }

  const mapImageFileInfo = (fileName: string) =>
    ({
      'avatar.png': { src: avatar, alt: 'Thang Cao' },
      'vue-certificate.png': { src: vueCertificate, alt: 'Thang Cao Vue Certification' },
      'aws-SAA-C03-certificate.png': { src: awsSAACertificate, alt: 'Thang Cao AWS Certified Solutions Architect Associate' },
    }[fileName] ?? {})

  const dynamicComponent = () => {
    switch (fileSelected) {
      case 'overview.md': return <Overview />
      case 'skills.md': return <Skills />
      case 'hobbies.md': return <Hobbies />
      case 'experience.md': return <Experience />
      case 'education.md': return <Education />
      case 'projects.md': return <Projects />
      case 'certificates.md': return <Certificates />
      case 'avatar.png':
      case 'vue-certificate.png':
      case 'aws-SAA-C03-certificate.png': {
        const fileInfo = mapImageFileInfo(fileSelected)
        return (
          <div className="flex items-center justify-center h-full animate-fade-up">
            <img src={fileInfo.src} alt={fileInfo.alt} className="max-w-full max-h-full rounded-lg shadow-2xl" />
          </div>
        )
      }
      default: return null
    }
  }

  const isMobile = () => window.innerWidth < 768

  const fileSelectedRef = useRef(fileSelected)
  fileSelectedRef.current = fileSelected

  useEffect(() => {
    setIsShowFileToolbar(!isMobile())
    const onResize = () => { if (isMobile()) setIsShowFileToolbar(false) }
    window.addEventListener('resize', onResize)
    const scrollContainer = document.querySelector('#wrap-opening-files')
    const onWheel = (evt: Event) => {
      evt.preventDefault()
      ;(scrollContainer as HTMLElement).scrollLeft += (evt as WheelEvent).deltaY
    }
    scrollContainer?.addEventListener('wheel', onWheel)
    return () => {
      window.removeEventListener('resize', onResize)
      scrollContainer?.removeEventListener('wheel', onWheel)
    }
  }, [])

  useEffect(() => {
    let chordPending = false
    let chordTimeout: ReturnType<typeof setTimeout> | null = null

    const clearChord = () => {
      chordPending = false
      if (chordTimeout) {
        clearTimeout(chordTimeout)
        chordTimeout = null
      }
    }

    const isTypingTarget = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false
      const tag = target.tagName
      return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) return

      const key = e.key.toLowerCase()
      const ctrl = e.ctrlKey && !e.metaKey
      const meta = e.metaKey && !e.ctrlKey

      // Ctrl+W — close active tab (works in browser; ⌘W is reserved by the browser on macOS)
      if (!chordPending && key === 'w' && ctrl && !e.shiftKey && !e.altKey) {
        e.preventDefault()
        e.stopImmediatePropagation()
        const active = fileSelectedRef.current
        if (active) closeTabByName(active)
        return
      }

      // Ctrl+Shift+W — close all tabs
      if (key === 'w' && ctrl && e.shiftKey && !e.altKey) {
        e.preventDefault()
        e.stopImmediatePropagation()
        clearChord()
        closeAllTabs()
        return
      }

      // Ctrl+K — chord leader for close all (⌘K opens browser search on macOS)
      if (ctrl && key === 'k' && !e.shiftKey && !e.altKey) {
        e.preventDefault()
        e.stopImmediatePropagation()
        chordPending = true
        if (chordTimeout) clearTimeout(chordTimeout)
        chordTimeout = setTimeout(clearChord, 1500)
        return
      }

      // W after Ctrl+K — close all tabs
      if (chordPending && key === 'w') {
        e.preventDefault()
        e.stopImmediatePropagation()
        clearChord()
        closeAllTabs()
        return
      }

      // ⌘W — only in contexts that allow override (PWA / some browsers)
      if (!chordPending && key === 'w' && meta && !e.shiftKey && !e.altKey) {
        const active = fileSelectedRef.current
        if (!active) return
        e.preventDefault()
        e.stopImmediatePropagation()
        closeTabByName(active)
        return
      }

      if (chordPending && key !== 'control' && key !== 'meta' && key !== 'alt') {
        clearChord()
      }
    }

    // Capture phase runs before the browser handles the shortcut
    window.addEventListener('keydown', onKeyDown, true)
    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      window.removeEventListener('keydown', onKeyDown, true)
      document.removeEventListener('keydown', onKeyDown, true)
      clearChord()
    }
  }, [closeTabByName, closeAllTabs])

  const isHomeView = fileSelected === null || fileSelected === WELCOME_FILE

  const goHome = useCallback(() => {
    setFileSelected(WELCOME_FILE)
  }, [])

  const navigationValue = { openFile, goHome }

  return (
    <div className="App h-screen w-screen flex flex-col text-white font-sans">
      {/* Title bar */}
      <header className="flex-0 flex items-center justify-center bg-cool-gray-100 text-cool-gray-400 px-4 py-1.5 text-sm font-mono select-none">
        <span className="truncate">
          {fileSelected ? (
            <>
              <span className="text-vscode-string">{fileSelected}</span>
              <span className="text-cool-gray-400 mx-2">—</span>
            </>
          ) : null}
          Thang Cao Portfolio
          <span className="text-cool-gray-400 mx-2">—</span>
          <span className="text-vscode-comment hidden sm:inline">Visual Studio Code</span>
        </span>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Activity bar */}
        <div className="flex-0 w-50px bg-cool-gray-300 text-cool-gray-400 flex flex-col shrink-0">
          <div className="flex-1 overflow-y-auto">
            <div
              className={[
                'w-full py-14px cursor-pointer flex items-center justify-center transition-colors',
                isShowFileToolbar ? 'text-white border-l-2 border-l-white' : 'hover:text-white',
              ].join(' ')}
              onClick={() => setIsShowFileToolbar(!isShowFileToolbar)}
              title="Explorer"
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" />
              </svg>
            </div>

            {[
              { id: 'project-source', href: 'https://github.com/cvthang56th2/cvthang56th2.github.io', icon: faCodeBranch, tip: 'Source of this project' },
              { id: 'github-link', href: 'https://github.com/cvthang56th2', icon: faGithub, tip: 'Find me on GitHub' },
              { id: 'facebook-link', href: 'https://www.facebook.com/cvthang56th2', icon: faFacebookF, tip: 'Find me on Facebook' },
              { id: 'linkedin-link', href: 'https://www.linkedin.com/in/thang-cao96/', icon: faLinkedin, tip: 'Find me on LinkedIn' },
              { id: 'contact-email', href: 'mailto:cvthang56th2@gmail.com', icon: faEnvelope, tip: 'Contact me via Email' },
            ].map(({ id, href, icon, tip }, i) => (
              <div key={id}>
                {i === 1 && <div className="w-70per mx-auto h-1px bg-cool-gray-400 my-1" />}
                <a id={id} href={href} target="_blank" rel="noopener noreferrer">
                  <div className="w-full py-14px cursor-pointer flex items-center justify-center hover:text-white transition-colors">
                    <FontAwesomeIcon icon={icon} size="xl" />
                  </div>
                </a>
                <Tooltip anchorId={id} place="right" content={tip} />
              </div>
            ))}
          </div>
          <div className="flex-0 pb-1">
            <div className="w-full py-10px cursor-pointer flex items-center justify-center hover:text-white">
              <FontAwesomeIcon icon={faUserCircle} size="xl" />
            </div>
            <div className="w-full py-10px cursor-pointer flex items-center justify-center hover:text-white">
              <FontAwesomeIcon icon={faGear} size="xl" />
            </div>
          </div>
        </div>

        {/* Explorer sidebar */}
        {isShowFileToolbar && (
          <div className="flex-0 w-220px bg-cool-gray-700 text-cool-gray-500 px-4px pt-10px shrink-0 overflow-y-auto">
            <div className="mb-4px pl-16px text-11px font-semibold tracking-widest text-custom-gray-400 uppercase">Explorer</div>
            <div className="cursor-pointer hover:bg-cool-gray-600 font-bold text-sm py-0.5" onClick={() => setIsExpandFiles(!isExpandFiles)}>
              <span className={['ml-2px mr-6px inline-block transition-transform', isExpandFiles ? 'rotate-90' : ''].join(' ')}>
                <FontAwesomeIcon icon={faChevronRight} size="sm" />
              </span>
              portfolio
            </div>
            {isExpandFiles && (
              <div className="mt-1">
                {files.map((fileName, i) => (
                  <div
                    key={`file-${i}`}
                    className={[
                      'pl-16px py-0.5 cursor-pointer items-center flex text-sm transition-colors',
                      fileName === fileSelected ? 'bg-custom-gray-300 text-white' : 'hover:bg-cool-gray-600',
                    ].join(' ')}
                    onClick={() => {
                      openFile(fileName)
                      if (isMobile()) setIsShowFileToolbar(false)
                    }}
                  >
                    <FileIcon fileName={fileName} />
                    <div className="truncate font-mono text-xs">{fileName}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Editor area */}
        <div className="flex-1 overflow-hidden flex flex-col bg-cool-gray-800 min-w-0">
          {/* Tabs */}
          <div className="flex-0 pr-1 shrink-0">
            <div id="wrap-opening-files" className="flex w-full overflow-x-auto bg-cool-gray-700">
              {openingFiles.map((fileName, i) => (
                <div
                  key={`opening-file-tab-${i}`}
                  className={[
                    'min-w-160px max-w-200px flex items-center justify-between px-3 py-1.5 cursor-pointer text-sm transition-colors shrink-0',
                    fileName === fileSelected ? 'file-tab-active text-white' : 'bg-cool-gray-900 text-cool-gray-400 hover:text-cool-gray-500',
                  ].join(' ')}
                  onClick={() => { setFileSelected(fileName); setIsExpandFiles(true) }}
                  onMouseDown={event => { if (event.button === 1) closeFile(event, fileName) }}
                >
                  <div className="truncate flex items-center min-w-0">
                    <FileIcon fileName={fileName} />
                    <div className="truncate font-mono text-xs">{fileName}</div>
                  </div>
                  <span
                    className="px-1 text-12px rounded hover:bg-cool-gray-1000 ml-1 shrink-0 opacity-60 hover:opacity-100"
                    onClick={e => closeFile(e, fileName)}
                  >×</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="content-shell flex-1 overflow-y-auto">
            <PortfolioNavigationProvider value={navigationValue}>
              {isHomeView ? (
                <WelcomeScreen onOpenFile={openFile} />
              ) : (
                <div className="content-max h-full">
                  {dynamicComponent()}
                </div>
              )}
            </PortfolioNavigationProvider>
          </div>
        </div>
      </main>

      {/* Status bar */}
      <div className="bg-teal-100 flex items-center justify-between px-4 py-1 text-14px shrink-0 select-none">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-vscode-green animate-pulse-soft" />
            <span className="hidden sm:inline text-white/90">Open to opportunities</span>
          </span>
          <span><FontAwesomeIcon icon={faCodeBranch} size="sm" /> master</span>
          <span className="hidden md:inline"><FontAwesomeIcon icon={faRefresh} size="sm" /> 0↓ 2↑</span>
          <span className="hidden md:inline"><FontAwesomeIcon icon={faCircleXmark} size="sm" /> 0 <FontAwesomeIcon icon={faTriangleExclamation} size="sm" /> 0</span>
        </div>
        <div className="flex items-center gap-5">
          <span><FontAwesomeIcon icon={faCheck} size="sm" className="mr-1" />Prettier</span>
          <span className="hidden sm:inline font-mono text-xs">TypeScript React</span>
          <FontAwesomeIcon icon={faBell} size="sm" />
        </div>
      </div>
    </div>
  )
}

export default App
