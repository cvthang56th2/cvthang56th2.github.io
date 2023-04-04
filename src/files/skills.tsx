import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">💻 Skills</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4'>Summary</h4>
        <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4'>Experience</h4>
        <div>
          <h2>General Tech Stacks</h2>
          <hr />
          <ul>
            <li>Architecture Design</li>
            <li>Desktop App Development</li>
            <li>Web Development (Frontend &amp; Backend)</li>
          </ul>
          <h2>Programming languages</h2>
          <hr />
          <ul>
            <li>C# .NET</li>
            <li>Python</li>
            <li>
              JavaScript/TypeScript
              <ul>
                <li>React.js</li>
              </ul>
            </li>
            <li>T-SQL</li>
            <li>Go</li>
            <li>C++</li>
            <li>Java</li>
            <li>VB.NET/VBA</li>
          </ul>
          <h2>Databases</h2>
          <hr />
          <ul>
            <li>MSSQL</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLite</li>
          </ul>
          <h2>Cloud</h2>
          <hr />
          <ul>
            <li>Azure</li>
            <li>GCP</li>
            <li>Heroku</li>
            <li>Render</li>
          </ul>
          <h2>Vcs</h2>
          <hr />
          <ul>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills