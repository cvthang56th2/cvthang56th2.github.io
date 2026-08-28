import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">👨‍🎓 Education</h2>
      <div className='flex-1 overflow-y-auto'>
        <p className='mb-2'>
          <span className='px-2 py-1 rounded-full text-sm bg-custom-gray-100 mr-1'>
          2023
          </span>
          Nha Trang University, Vietnam
        </p>
        <ul className="list-disc mb-4">
          <li>Master of Science in Information Technology</li>
        </ul>
        <p className='mb-2'>
          <span className='px-2 py-1 rounded-full text-sm bg-custom-gray-100 mr-1'>
          2018
          </span>
          Nha Trang University, Vietnam
        </p>
        <ul className="list-disc">
          <li>Bachelor of Science in Information Technology</li>
        </ul>
      </div>
    </div>
  )
}

export default Education
