import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">💼 Professional Experience</h2>
      <div className='flex-1 overflow-y-auto'>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Freelance & Independent Projects - Full Stack Developer</h4>
          <p className='italic mb-2'>Remote | Jul 2025 - Present</p>
          <ul className='list-disc'>
            <li>Owned direct communication with overseas clients to gather requirements, clarify scope, propose solution options, and estimate delivery plans.</li>
            <li>Led end-to-end delivery across discovery, architecture, development, testing, deployment, monitoring, and post-launch support.</li>
            <li>Built full-stack solutions with React, Next.js, Node.js, NestJS, PostgreSQL, MongoDB, AWS, and WordPress, with a focus on maintainability and scalability.</li>
            <li>Managed tasks and resolved production issues across application, database, and infrastructure layers to keep releases stable and reliable.</li>
          </ul>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>BetaMind Inc. - Full Stack Developer</h4>
          <p className='italic mb-2'>Tokyo, Japan | Remote | May 2024 - Jun 2025</p>
          <ul className='list-disc'>
            <li>Built and shipped web features with React and Next.js, turning product requirements and designs into reusable UI and end-to-end functionality.</li>
            <li>Implemented AWS serverless APIs and supporting cloud services for production applications.</li>
            <li>Developed AI-powered features with OpenAI and Go, integrating them into user-facing workflows.</li>
            <li>Partnered with product, design, and engineering teammates on feature delivery, code reviews, and architecture decisions.</li>
          </ul>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>TTEK Inc. - Full Stack Developer</h4>
          <p className='italic mb-2'>Ho Chi Minh City, Vietnam | Remote | Jul 2023 - May 2024</p>
          <ul className='list-disc'>
            <li>Built reusable Vue.js and Vuetify components for risk-management, monitoring, and analytics platforms.</li>
            <li>Added real-time synchronization with Socket.io to improve visibility in time-sensitive workflows.</li>
            <li>Translated business requirements and UI designs into maintainable frontend features.</li>
            <li>Contributed to frontend architecture and shared component patterns across multiple applications.</li>
          </ul>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>9thWonder Agency - Full Stack Developer</h4>
          <p className='italic mb-2'>Nha Trang, Vietnam | Onsite | Jun 2018 - Jun 2023</p>
          <ul className='list-disc'>
            <li>Delivered and maintained 10+ web products for US and Vietnamese clients, including marketing sites, dashboards, internal tools, browser extensions, and CMS-based solutions.</li>
            <li>Built across React, Vue.js, Node.js, PHP, and WordPress, covering UI work, APIs, database design, testing, deployment, and production support.</li>
            <li>Improved query performance on large datasets, cutting response times 10x faster, from 2s to 200ms in some cases.</li>
            <li>Took ownership of feature delivery and troubleshooting across frontend and backend.</li>
            <li>Worked closely with designers, developers, and stakeholders on multiple concurrent projects.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
