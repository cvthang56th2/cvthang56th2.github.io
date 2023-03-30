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
  const [fileSelected, setFileSelected] = useState(null)

  return (
    <div className="App h-screen w-screen flex flex-col text-white">
      <header className='flex-0 text-center bg-[#323233] text-[#8e8e8e]'>
        File Name.md - Thang Cao Portfolio - Visual Studio Code
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
          <div className='cursor-pointer font-bold'>
            <span className='mr-[4px]'>&gt;</span>
            Open Editors
          </div>
          <div>
            {openingFiles.map((fileName, i) => (
              <div key={`opening-file-${i}`} className="pl-[16px] cursor-pointer items-center flex" onClick={() => setFileSelected(fileName)}>
                <span className='text-[10px] text-blue-400 mr-1 font-bold'>MD</span>
                <div className='truncate'>{fileName}</div>
              </div>
            ))}
          </div>
          <div className='cursor-pointer font-bold'>
            <span className='mr-[4px]'>&gt;</span>
            Home
          </div>
          <div>
            {files.map((fileName, i) => (
              <div key={`file-${i}`} className="pl-[16px] cursor-pointer items-center flex" onClick={() => setFileSelected(fileName)}>
                <span className='text-[10px] text-blue-400 mr-1 font-bold'>MD</span>
                <div className='truncate'>{fileName}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 overflow-y-auto bg-[#1e1e1e]'>
          <div className='flex w-full overflow-x-auto bg-[#252526]'>
            {(new Array(2).fill('')).map((e, i) => (
              <div
                key={i}
                className={[
                  'max-w-[150px] flex items-center justify-between px-2 py-1 cursor-pointer',
                  i === 0 ? 'bg-[#1e1e1e]' : 'bg-[#2d2d2d]'
                ].join(' ')}
              >
                <span className='text-[10px] text-blue-400 mr-1 font-bold'>MD</span>
                <div className='truncate'>File Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam autem alias. Consectetur voluptatem quia culpa cumque perspiciatis? Explicabo quidem debitis sit modi, sunt tempora temporibus doloribus voluptatem fugit ullam. {i}</div>
                <span className='px-[4px] text-[12px] font-bold rounded-md hover:bg-[#4d4d4d]'>&#10005;</span>
              </div>
            ))}
          </div>
          <div className='p-5'>
            {fileSelected ? (
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
    </div>
  )
}

export default App
