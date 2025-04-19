import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">👨‍🎓 Education</h2>
      <div className='flex-1 overflow-y-auto'>
        <p className='mb-2'>
          <span className='px-2 py-1 rounded-full text-sm bg-custom-gray-100 mr-1'>
          2014-2018
          </span>
          Nha Trang University
        </p>
        <ul className="list-disc mb-4">
          <li>University Degree major: Information Technology</li>
          <li>Degree grade: Good – GPA 3.35/4</li>
        </ul>
        <p className='mb-2'>
          <span className='px-2 py-1 rounded-full text-sm bg-custom-gray-100 mr-1'>
          2020-2023
          </span>
          Nha Trang University
        </p>
        <ul className="list-disc">
          <li>Master's Degree major: Information Technology</li>
          <li>Graduation thesis: Certificate Management based on Blockchain</li>
          <li>Source code: <a href="https://github.com/cvthang56th2/CertsChain" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500">https://github.com/cvthang56th2/CertsChain</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Education