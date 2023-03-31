import { useState } from 'react'
import './App.css'
import vietnam from './vietnam.png';
import avatar from './avatar.png';

function App() {
  const [openingFiles, setOpeningFiles] = useState<string[]>([])
  const files = [
    'overview.md',
    'skills.md',
    'experience.md',
    'education.md',
    'projects.md',
    'certificates.md',
    'accomplishments.md',
  ]
  const [isShowFileToolbar, setIsShowFileToolbar] = useState(true)
  const [isExpandFiles, setIsExpandFiles] = useState(true)
  const [fileSelected, setFileSelected] = useState<string|null>(null)
  const openFile = (fileName: string) => {
    const newValues = JSON.parse(JSON.stringify(openingFiles))
    if (!openingFiles.includes(fileName)) {
      newValues.push(fileName)
    }
    setOpeningFiles(newValues)
    setFileSelected(fileName)
  }
  const closeFile = (e: Event, fileName: string) => {
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

  return (
    <div className="App h-screen w-screen flex flex-col text-white">
      <header className='flex-0 text-center bg-[#323233] text-[#8e8e8e] p-2'>
        {fileSelected ? `${fileSelected} - ` : ''} Thang Cao Portfolio - Visual Studio Code
      </header>
      <main className='flex flex-1 overflow-y-auto'>
        <div className='flex-0 w-[50px] bg-[#333333] text-[#828182]'>
          <div
            className={[
              'w-[50px] h-[50px] cursor-pointer',
              isShowFileToolbar ? 'text-white' : 'text-[#828182]'
            ].join(' ')}
            onClick={() => setIsShowFileToolbar(!isShowFileToolbar)}
          >
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="24" width="24" className='mx-auto' xmlns="http://www.w3.org/2000/svg"><path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path></svg>
          </div>
          <div className='w-[50px] h-[50px] cursor-pointer'>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="24" width="24" className='mx-auto' xmlns="http://www.w3.org/2000/svg"><path d="M17.5 4C15.57 4 14 5.57 14 7.5c0 1.554 1.025 2.859 2.43 3.315-.146.932-.547 1.7-1.23 2.323-1.946 1.773-5.527 1.935-7.2 1.907V8.837c1.44-.434 2.5-1.757 2.5-3.337C10.5 3.57 8.93 2 7 2S3.5 3.57 3.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337C3.5 20.43 5.07 22 7 22s3.5-1.57 3.5-3.5c0-.551-.14-1.065-.367-1.529 2.06-.186 4.657-.757 6.409-2.35 1.097-.997 1.731-2.264 1.904-3.768C19.915 10.438 21 9.1 21 7.5 21 5.57 19.43 4 17.5 4zm-12 1.5C5.5 4.673 6.173 4 7 4s1.5.673 1.5 1.5S7.827 7 7 7s-1.5-.673-1.5-1.5zM7 20c-.827 0-1.5-.673-1.5-1.5a1.5 1.5 0 0 1 1.482-1.498l.13.01A1.495 1.495 0 0 1 7 20zM17.5 9c-.827 0-1.5-.673-1.5-1.5S16.673 6 17.5 6s1.5.673 1.5 1.5S18.327 9 17.5 9z"></path></svg>
          </div>
          <div className='w-[50px] h-[50px] cursor-pointer'>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 496 512" height="24" width="24" className='mx-auto' xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          </div>
          <div className='w-[50px] h-[50px] cursor-pointer'>
          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="24" width="24" className='mx-auto' xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
          </div>
        </div>
        {isShowFileToolbar && (
          <div className='flex-0 w-[220px] bg-[#252526] text-[#cccccc] px-[4px] pt-[10px]'>
            <div className='mb-[4px] pl-[16px] text-[13px] font-semibold'>EXPLORER</div>
            <div className='cursor-pointer font-bold' onClick={() => setIsExpandFiles(!isExpandFiles)}>
              <span
                className={[
                  'mr-[4px]',
                  isExpandFiles ? 'inline-block rotate-90' : ''
                ].join(' ')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block bi bi-chevron-right" viewBox="0 0 16 16">
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </span>
              Home
            </div>
            {isExpandFiles && (
              <div>
                {files.map((fileName, i) => (
                  <div
                    key={`file-${i}`}
                    className={[
                      'pl-[16px] cursor-pointer items-center flex',
                      fileName === fileSelected ? 'bg-[#37373d]' : ''
                    ].join(' ')}
                    onClick={() => openFile(fileName)}
                  >
                    <span className='text-[10px] text-blue-400 mr-1 font-bold'>M&#8595;</span>
                    <div className='truncate'>{fileName}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div className='flex-1 overflow-y-auto flex flex-col bg-[#1e1e1e]'>
          <div className='flex-0 flex w-full overflow-x-auto bg-[#252526]'>
            {openingFiles.map((fileName, i) => (
              <div
                key={`opening-file-tab-${i}`}
                className={[
                  'w-[150px] flex items-center justify-between px-2 py-1 cursor-pointer',
                  isExpandFiles && fileName === fileSelected ? 'bg-[#1e1e1e]' : 'bg-[#2d2d2d]'
                ].join(' ')}
                onClick={() => {
                  setFileSelected(fileName)
                  setIsExpandFiles(true)
                }}
              >
                <div className='truncate flex items-center'>
                  <span className='text-[10px] text-blue-400 mr-1 font-bold'>M&#8595;</span>
                  <div className='truncate'>
                    {fileName}
                  </div>
                </div>
                <span className='px-[4px] text-[12px] font-bold rounded-md hover:bg-[#4d4d4d]' onClick={e => closeFile(e, fileName)}>&#10005;</span>
              </div>
            ))}
          </div>
          <div className='p-5 flex-1 overflow-y-auto'>
            {isExpandFiles && fileSelected ? (
              <div>
                Selecting <span className='font-bold'>{fileSelected}</span>
              </div>
            ) : (
              <div className='h-full flex items-center justify-center'>
                <div className='flex items-center'>
                  <img src={avatar} alt="thang-cao" className='inline rounded-full border-2 border-white p-1 mr-3 w-[100px] md:w-[150px]' />
                  <div>
                    <h1 className='text-4xl'>
                      Hello, I'm Thang Cao
                    </h1>
                    <p className='text-lg mt-2'>
                      Web Developer from VietNam
                      <img src={vietnam} alt="vietnam" className='inline ml-1' width={40} />
                    </p>
                    <ul className='flex'>
                      <li><a href="#" className='mr-2'>Facebook</a></li>
                      <li><a href="#" className='mr-2'>Git</a></li>
                      <li><a href="#" className='mr'>Email</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <div className='text-center bg-[#323233]'>lorem</div>
    </div>
  )
}

export default App
