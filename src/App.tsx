import { useState } from 'react'
import './App.css'

function App() {
  const [openingFiles, setOpeningFiles] = useState([])
  const files = [
    'overview.md',
    'skills.md',
    'experience.md',
    'education.md',
    'projects.md',
    'certificates.md',
    'accomplishments.md',
  ]
  const [isExpandOpening, setIsExpandOpening] = useState(true)
  const [isExpandFiles, setIsExpandFiles] = useState(true)
  const [fileSelected, setFileSelected] = useState(null)
  const openFile = (fileName: string) => {
    const newValues = JSON.parse(JSON.stringify(openingFiles))
    if (!openingFiles.includes(fileName)) {
      newValues.push(fileName)
    }
    setOpeningFiles(newValues)
    setFileSelected(fileName)
  }
  const closeFile = (e, fileName: string) => {
    e.stopPropagation()
    const newValues = JSON.parse(JSON.stringify(openingFiles))
    const index = newValues.indexOf(fileName)
    if (index !== -1) {
      newValues.splice(index, 1)
      setOpeningFiles(newValues)
      if (fileName === fileSelected) { 
        setFileSelected(null)
      }
    }
  }

  return (
    <div className="App h-screen w-screen flex flex-col text-white">
      <header className='flex-0 text-center bg-[#323233] text-[#8e8e8e] p-2'>
        {fileSelected ? `${fileSelected} - ` : ''} Thang Cao Portfolio - Visual Studio Code
      </header>
      <main className='flex flex-1 overflow-y-auto'>
        <div className='flex-0 w-[60px] bg-[#333333] text-[#828182]'>
          {[1,2].map((e, i) => (
            <div key={i} className='w-[60px] h-[60px] p-2'>
              Icon {i}
            </div>
          ))}
          <hr />
          {[1,2, 3, 4].map((e, i) => (
            <div key={i} className='w-[60px] h-[60px] p-2'>
              Social {i}
            </div>
          ))}
        </div>
        <div className='flex-0 w-[200px] bg-[#252526] text-[#cccccc] px-[4px]'>
          <div className='mb-2'>EXPLORER</div>
          <div className='cursor-pointer font-bold' onClick={() => setIsExpandOpening(!isExpandOpening)}>
            <span
              className={[
                'mr-[4px]',
                isExpandFiles && isExpandOpening ? 'inline-block rotate-90' : ''
              ].join(' ')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </span>
            Open Editors
          </div>
          {isExpandFiles && isExpandOpening && (
            <div>
              {openingFiles.map((fileName, i) => (
                <div
                  key={`opening-file-${i}`}
                  className={[
                    'pl-[16px] cursor-pointer items-center flex',
                    fileName === fileSelected ? 'bg-[#37373d]' : ''
                  ].join(' ')}
                  onClick={() => setFileSelected(fileName)}
                >
                  <span className='text-[10px] text-blue-400 mr-1 font-bold'>MD</span>
                  <div className='truncate'>{fileName}</div>
                </div>
              ))}
            </div>
          )}
          <div className='cursor-pointer font-bold' onClick={() => setIsExpandFiles(!isExpandFiles)}>
            <span
              className={[
                'mr-[4px]',
                isExpandFiles ? 'inline-block rotate-90' : ''
              ].join(' ')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
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
                  <span className='text-[10px] text-blue-400 mr-1 font-bold'>MD</span>
                  <div className='truncate'>{fileName}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='flex-1 overflow-y-auto bg-[#1e1e1e]'>
          <div className='flex w-full overflow-x-auto bg-[#252526]'>
            {openingFiles.map((fileName, i) => (
              <div
                key={`opening-file-tab-${i}`}
                className={[
                  'w-[150px] flex items-center justify-between px-2 py-1 cursor-pointer',
                  fileName === fileSelected ? 'bg-[#1e1e1e]' : 'bg-[#2d2d2d]'
                ].join(' ')}
                onClick={() => setFileSelected(fileName)}
              >
                <div className='flex items-center'>
                  <span className='text-[10px] text-blue-400 mr-1 font-bold'>MD</span>
                  <div className='truncate'>
                    {fileName}
                  </div>
                </div>
                <span className='px-[4px] text-[12px] font-bold rounded-md hover:bg-[#4d4d4d]' onClick={e => closeFile(e, fileName)}>&#10005;</span>
              </div>
            ))}
          </div>
          <div className='p-5'>
            {isExpandFiles && fileSelected ? (
              <div>
                Selecting <span className='font-bold'>{fileSelected}</span>
              </div>
            ) : (
              <div className='text-center'>
                Hello, I am Thang Cao
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
