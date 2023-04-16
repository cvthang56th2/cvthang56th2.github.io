import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">👨‍🎓 Education</h2>
      <div className='flex-1 overflow-y-auto'>
        <p className='mb-4'>
          <span className='px-2 py-1 rounded-full text-sm bg-[#3a3939] mr-1'>
          2011-2014
          </span>
          Luong The Vinh high-school
        </p>
        <p className='mb-2'>
          <span className='px-2 py-1 rounded-full text-sm bg-[#3a3939] mr-1'>
          2014-2018
          </span>
          Nha Trang University
        </p>
        <ul className="list-disc mb-4">
          <li>University degree major: Information Technology.</li>
        </ul>
        <p className='mb-2'>
          <span className='px-2 py-1 rounded-full text-sm bg-[#3a3939] mr-1'>
          2021-2023
          </span>
          Nha Trang University
        </p>
        <ul className="list-disc">
          <li>Master's degree major: Information Technology.</li>
        </ul>
      </div>
    </div>
  )
}

export default Education