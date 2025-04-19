import React from 'react'

const Hobbies = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">⚽ Hobbies</h2>
      <div className='flex-1 overflow-y-auto'>
        <ul className="list-disc">
          <li>I'm passionate about enhancing my coding skills during my spare time, focusing on areas such as clean code, SOLID principles, best practices when programming, and exploring emerging technologies like Web3, AI.</li>
          <li>As an active and positive individual, I enjoy bringing joy to others. My hobbies include playing musical instruments, singing, and engaging in sports like football, badminton, and running. I've also completed several races, including trail runs, half marathons, and full marathons.</li>
          <li>Additionally, I dedicate time to personal projects, which I share on my GitHub profile.</li>
        </ul>
      </div>
    </div>
  )
}

export default Hobbies