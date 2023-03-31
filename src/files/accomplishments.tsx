import React from 'react'

const Accomplishments = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">🏆 Accomplishments</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4'>Summary</h4>
        <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4'>Experience</h4>
      </div>
    </div>
  )
}

export default Accomplishments