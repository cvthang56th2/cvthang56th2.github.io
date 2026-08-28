import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">💻 Core Skills</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Frontend</h4>
        <p>TypeScript, React, Next.js, Vue.js, Tailwind CSS, Vuetify</p>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Backend</h4>
        <p>Node.js, NestJS, Go, PHP, REST APIs, Socket.io, WordPress, WordPress Plugin Development</p>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Data & Search</h4>
        <p>PostgreSQL, MongoDB, Typesense</p>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Cloud & DevOps</h4>
        <p>Docker, CI/CD, AWS, DigitalOcean, Supabase</p>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Engineering</h4>
        <p>System Design, API Design, Performance Optimization, Automated Testing, Code Review, AI/LLM Integration</p>
      </div>
    </div>
  )
}

export default Skills
