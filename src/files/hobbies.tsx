import React from 'react'

const Hobbies = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">⚽ Hobbies</h2>
      <div className='flex-1 overflow-y-auto'>
        <ul className="list-disc">
          <li>🎸 Music, 🎨design, art</li>
          <li>⚽ Sports, especially football</li>
          <li>👨‍💻 Making thing by code</li>
          <li>🔧 Like to create tools, auto</li>
        </ul>
      </div>
    </div>
  )
}

export default Hobbies