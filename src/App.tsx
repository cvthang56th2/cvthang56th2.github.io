import { useEffect, useState } from 'react'
import Overview from './files/overview'
import Skills from './files/skills'
import Hobbies from './files/hobbies'
import Experience from './files/experience'
import Education from './files/education'
import Projects from './files/projects'
import Certificates from './files/certificates'
import './App.css'
import vietnam from './vietnam.png';
import avatar from './avatar.png';
import vueCertificate from './vue-certificate.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faEnvelope, faChevronRight, faTriangleExclamation, faCheck, faRefresh, faGear, faImage, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark, faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip'

type FileIconpProps = {
  fileName: string;
};

function FileIcon ({ fileName }: FileIconpProps) {
  return (
    <>
    {
      fileName.includes('.pdf') ? 
      (<FontAwesomeIcon icon={faFilePdf} size="sm" className='inline mr-1 mt-1 text-red-500' />) :
      (
        fileName.includes('.png') ? 
        (<FontAwesomeIcon icon={faImage} size="sm" className='inline mr-1 mt-1 text-purple-500' />) :
        (<span className='text-10px text-blue-400 mr-1 mt-1 font-bold'>M&#8595;</span>)
      )
    }
    </>
  )
}

function App() {
  const [openingFiles, setOpeningFiles] = useState<string[]>([])
  const files = [
    'overview.md',
    'skills.md',
    'hobbies.md',
    'experience.md',
    'education.md',
    'projects.md',
    'certificates.md',
    'avatar.png',
    'vue-certificate.png',
    'ThangCao_CV.pdf',
  ]
  const [isShowFileToolbar, setIsShowFileToolbar] = useState(false)
  const [isExpandFiles, setIsExpandFiles] = useState(true)
  const [fileSelected, setFileSelected] = useState<string|null>(null)
  const openFile = (fileName: string) => {
    if (fileName.includes('.pdf')) {
      window.open(`/${fileName}`, '_blank')
      return
    }
    const newValues = JSON.parse(JSON.stringify(openingFiles))
    if (!openingFiles.includes(fileName)) {
      newValues.push(fileName)
    }
    setOpeningFiles(newValues)
    setFileSelected(fileName)
  }
  const closeFile = (e: React.MouseEvent<HTMLElement>, fileName: string) => {
    e.stopPropagation()
    const newValues = JSON.parse(JSON.stringify(openingFiles))
    const index = newValues.indexOf(fileName)
    if (index !== -1) {
      newValues.splice(index, 1)
      setOpeningFiles(newValues)
      if (fileName === fileSelected) { 
        setFileSelected(newValues[index] || newValues[index - 1])
      }
    }
  }

  const mapImageFileInfo = (fileName: string) => ({
    'avatar.png': {
      src: avatar,
      alt: 'Thang Cao'
    },
    'vue-certificate.png': {
      src: vueCertificate,
      alt: 'Thang Cao Vue Certification'
    }
  }[fileName] || {})

  const dynamicComponent = () => {
    switch (fileSelected) {
      case 'overview.md':
        return <Overview />
      case 'skills.md':
        return <Skills />
      case 'hobbies.md':
        return <Hobbies />
      case 'experience.md':
        return <Experience />
      case 'education.md':
        return <Education />
      case 'projects.md':
        return <Projects />
      case 'certificates.md':
        return <Certificates />
      case 'avatar.png':
      case 'vue-certificate.png':
        const fileInfo = mapImageFileInfo(fileSelected)
        return (
          <div className='flex items-center justify-center h-full'>
            <img src={fileInfo.src} alt={fileInfo?.alt} className='max-w-full max-h-full' />
          </div>
        )
    }
    return ''
  }

  const isMobile = () => {
    const screenWidth = window.innerWidth;
    return screenWidth < 768
  }

  useEffect(() => {
    setIsShowFileToolbar(!isMobile())
    window.addEventListener('resize', () => {
      if (isMobile()) {
        setIsShowFileToolbar(false)
      }
    });
    const scrollContainer = document.querySelector("#wrap-opening-files");
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", (evt: any) => {
          evt.preventDefault();
          scrollContainer.scrollLeft += evt.deltaY
      })
    }
  }, [])

  return (
    <div className="App h-screen w-screen flex flex-col text-white">
      <header className='flex-0 text-center bg-cool-gray-100 text-cool-gray-200 p-2'>
        {fileSelected ? `${fileSelected} - ` : ''} Thang Cao Portfolio - Visual Studio Code
      </header>
      <main className='flex flex-1 overflow-y-auto'>
        <div className='flex-0 w-50px bg-cool-gray-300 text-cool-gray-400 flex flex-col'>
          <div className='flex-1 overflow-y-auto'>
            <div
              className={[
                'w-full py-14px cursor-pointer flex items-center justify-center hover:text-white',
                isShowFileToolbar ? 'text-white' : 'text-cool-gray-400'
              ].join(' ')}
              onClick={() => setIsShowFileToolbar(!isShowFileToolbar)}
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="24" width="24" className='mx-auto' xmlns="http://www.w3.org/2000/svg"><path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path></svg>
            </div>
            
            <a id="project-source" href="https://github.com/cvthang56th2/cvthang56th2.github.io" target="_blank">
              <div className='w-full py-14px cursor-pointer flex items-center justify-center hover:text-white'>
                <FontAwesomeIcon icon={faCodeBranch} size="xl" className='mx-auto block' />
              </div>
            </a>
            <Tooltip
              anchorId="project-source"
              place="right"
              content="Source of this project"
            />
            <div className='w-70per mx-auto h-1px bg-cool-gray-400'></div>
            <a id="github-link" href="https://github.com/cvthang56th2" target="_blank">
              <div className='w-full py-14px cursor-pointer flex items-center justify-center hover:text-white'>
                <FontAwesomeIcon icon={faGithub} size="xl" className='mx-auto block' />
              </div>
            </a>
            <Tooltip
              anchorId="github-link"
              place="right"
              content="Find me on Github"
            />
            <a id="facebook-link" href="https://www.facebook.com/cvthang56th2" target="_blank">
              <div className='w-full py-14px cursor-pointer flex items-center justify-center hover:text-white'>
                <FontAwesomeIcon icon={faFacebookF} size="xl" className='mx-auto block' />
              </div>
            </a>
            <Tooltip
              anchorId="facebook-link"
              place="right"
              content="Find me on Facebook"
            />
            <a id="linkedin-link" href="https://www.linkedin.com/in/thang-cao96/" target="_blank">
              <div className='w-full py-14px cursor-pointer flex items-center justify-center hover:text-white'>
                <FontAwesomeIcon icon={faLinkedin} size="xl" className='mx-auto block' />
              </div>
            </a>
            <Tooltip
              anchorId="linkedin-link"
              place="right"
              content="Find me on LinkedIn"
            />
            <a id="contact-email" href="mailto:cvthang56th2@gmail.com" target="_blank">
              <div className='w-full py-14px cursor-pointer flex items-center justify-center hover:text-white'>
                <FontAwesomeIcon icon={faEnvelope} size="xl" className='mx-auto block' />
              </div>
            </a>
            <Tooltip
              anchorId="contact-email"
              place="right"
              content="Contact me via Email"
            />
          </div>
          <div className='flex-0'>
            <div id="setting" className='w-full py-10px cursor-pointer flex items-center justify-center hover:text-white'>
              <FontAwesomeIcon icon={faUserCircle} size="xl" className='mx-auto block' />
            </div>
            <div id="setting" className='w-full py-10px cursor-pointer flex items-center justify-center hover:text-white'>
              <FontAwesomeIcon icon={faGear} size="xl" className='mx-auto block' />
            </div>
            <Tooltip
              anchorId="project-source"
              place="right"
              content="Source of this project"
            />
          </div>
        </div>
        {isShowFileToolbar && (
          <div className='flex-0 w-220px bg-cool-gray-700 text-cool-gray-500 px-4px pt-10px'>
            <div className='mb-4px pl-16px text-13px font-semibold text-custom-gray-400'>EXPLORER</div>
            <div className='cursor-pointer hover:bg-cool-gray-600 font-bold' onClick={() => setIsExpandFiles(!isExpandFiles)}>
              <span
                className={[
                  'ml-2px mr-6px',
                  isExpandFiles ? 'inline-block rotate-90' : ''
                ].join(' ')}
              >
                <FontAwesomeIcon icon={faChevronRight} size="sm" />
              </span>
              Home
            </div>
            {isExpandFiles && (
              <div>
                {files.map((fileName, i) => (
                  <div
                    key={`file-${i}`}
                    className={[
                      'pl-16px cursor-pointer items-center flex',
                      fileName === fileSelected ? 'bg-custom-gray-300' : 'hover:bg-cool-gray-600'
                    ].join(' ')}
                    onClick={() => {
                      openFile(fileName)
                      if (isMobile()) {
                        setIsShowFileToolbar(false)
                      }
                    }}
                  >
                    <FileIcon fileName={fileName} />
                    <div className='truncate'>{fileName}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div className='flex-1 overflow-y-auto flex flex-col bg-cool-gray-800'>
          <div className='flex-0 pr-1'>
            <div id="wrap-opening-files" className='flex w-full overflow-x-auto bg-cool-gray-700'>
              {openingFiles.map((fileName, i) => (
                <div
                  key={`opening-file-tab-${i}`}
                  className={[
                    'min-w-160px max-w-200px flex items-center justify-between px-2 py-1 cursor-pointer',
                    isExpandFiles && fileName === fileSelected ? 'bg-cool-gray-800' : 'bg-cool-gray-900'
                  ].join(' ')}
                  onClick={() => {
                    setFileSelected(fileName)
                    setIsExpandFiles(true)
                  }}
                  onMouseDown={event => {
                    if( event.button === 1 ) {
                      closeFile(event, fileName)
                    }
                  }}
                >
                  <div className='truncate flex items-center'>
                    <FileIcon fileName={fileName} />
                    <div className='truncate'>
                      {fileName}
                    </div>
                  </div>
                  <span className='px-4px text-12px font-bold rounded-md hover:bg-cool-gray-1000' onClick={e => closeFile(e, fileName)}>&#10005;</span>
                </div>
              ))}
            </div>
          </div>
          <div className='py-5 px-4 md:px-10 flex-1 overflow-y-auto'>
            {isExpandFiles && fileSelected ? (
              <div className='max-w-1200px mx-auto h-full'>
                {dynamicComponent()}
              </div>
            ) : (
              <div className='h-3/4 flex items-center justify-center'>
                <div className='flex items-center'>
                  <img src={avatar} alt="thang-cao" className='inline rounded-full border-2 border-white p-1 mr-3 w-100px md:w-150px' />
                  <div>
                    <h1 className='text-3xl'>
                      Hello, I'm Thang Cao
                    </h1>
                    <p className='text-lg mt-2'>
                      Full Stack Developer from VietNam
                      <img src={vietnam} alt="vietnam" className='inline ml-1' width={40} />
                    </p>
                    <ul className='flex mt-2 pl-0 gap-4'>
                      <li>
                        <a href="https://github.com/cvthang56th2" className='hover:text-green-500' target="_blank">
                          <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/cvthang56th2" className='hover:text-blue-500' target="_blank">
                          <FontAwesomeIcon icon={faFacebook} size="2xl" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/thang-cao96/" className='hover:text-blue-500' target="_blank">
                          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        </a>
                      </li>
                      <li>
                        <a href="mailto:cvthang56th2@gmail.com" className='hover:text-yellow-500'>
                          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <div className='bg-teal-100 flex items-center justify-between px-4 py-1 text-14px'>
        <div className='flex items-center'>
          <span><FontAwesomeIcon icon={faCodeBranch} size="sm" /> master</span>
          <span className='ml-4'><FontAwesomeIcon icon={faRefresh} size="sm" /> 0&#8595; 2&#8593;</span>
          <span className='ml-3'><FontAwesomeIcon icon={faCircleXmark} size="sm" /> 0 <FontAwesomeIcon icon={faTriangleExclamation} size="sm" /> 0</span>
        </div>
        <div className='flex items-center'>
          <span><FontAwesomeIcon icon={faCheck} size="sm" className='mr-2' />Prettier</span>
          <span className='ml-5'>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.549 10.078c.46.182.88.424 1.258.725.378.3.701.65.97 1.046a4.829 4.829 0 0 1 .848 2.714V15H9.75v-.438a3.894 3.894 0 0 0-1.155-2.782 4.054 4.054 0 0 0-1.251-.84 3.898 3.898 0 0 0-1.532-.315A3.894 3.894 0 0 0 3.03 11.78a4.06 4.06 0 0 0-.84 1.251c-.206.474-.31.985-.315 1.531V15H1v-.438a4.724 4.724 0 0 1 .848-2.713 4.918 4.918 0 0 1 2.229-1.77 2.994 2.994 0 0 1-.555-.493 3.156 3.156 0 0 1-.417-.602 2.942 2.942 0 0 1-.26-.683 3.345 3.345 0 0 1-.095-.739c0-.423.08-.82.24-1.189a3.095 3.095 0 0 1 1.626-1.627 3.067 3.067 0 0 1 2.386-.007 3.095 3.095 0 0 1 1.627 1.627 3.067 3.067 0 0 1 .157 1.928c-.06.237-.148.465-.266.684a3.506 3.506 0 0 1-.417.608c-.16.187-.345.35-.554.492zM5.812 9.75c.301 0 .584-.057.848-.17a2.194 2.194 0 0 0 1.162-1.163c.119-.269.178-.554.178-.854a2.138 2.138 0 0 0-.643-1.538 2.383 2.383 0 0 0-.697-.472 2.048 2.048 0 0 0-.848-.178c-.3 0-.583.057-.847.17a2.218 2.218 0 0 0-1.17 1.17c-.113.264-.17.547-.17.848 0 .3.057.583.17.847.115.264.27.497.466.697a2.168 2.168 0 0 0 1.552.643zM15 1v7h-1.75l-2.625 2.625V8H9.75v-.875h1.75v1.388l1.388-1.388h1.237v-5.25h-8.75v1.572a7.255 7.255 0 0 0-.438.069 2.62 2.62 0 0 0-.437.123V1H15z"></path></svg>
          </span>
          <span className='ml-5'>
            <FontAwesomeIcon icon={faBell} size="sm" className='mr-1' />
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default App
