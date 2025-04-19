import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">💼 PROFESSIONAL EXPERIENCE</h2>
      <div className='flex-1 overflow-y-auto'>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>BetaMind Inc. – Full Stack Developer</h4>
          <p className='italic mb-2'>Remote | Jun 2024 – Apr 2025</p>
          <ul className='list-disc'>
            <li>Developed and maintained key components for Milogos, focusing on UI/UX and AWS Serverless integration.</li>
            <li>Led team for <a href="https://resume.zcareer.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">"Spice – Smart Resume Platform"</a> implementing OpenAI features and conducting code reviews.</li>
          </ul>
          <p className='mt-2'><span className='font-semibold'>Tech:</span> React.js, AWS Lambda, CDK, API Gateway, DynamoDB, OpenAI</p>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>TTEK Inc. – Frontend Developer (Vue.js)</h4>
          <p className='italic mb-2'>Ho Chi Minh City | Jul 2023 – Jul 2024</p>
          <ul className='list-disc'>
            <li>Built reusable UI components and pages for <a href="https://www.ttekglobal.com/risklaboverview" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">RiskLab</a>, a real-time border management platform.</li>
            <li>Modified socket.io for real-time account monitoring.</li>
          </ul>
          <p className='mt-2'><span className='font-semibold'>Tech:</span> Vue.js, Vuetify, Socket.io</p>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>9thWonder Vietnam – Full Stack Developer</h4>
          <p className='italic mb-2'>Nha Trang | Jun 2018 – Jun 2023</p>
          <ul className='list-disc'>
            <li>Delivered multiple high-profile projects for US clients like <a href="https://powersports.honda.com/motorcycle/touring/gold-wing-tour" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Honda</a>, <a href="https://www.bosley.com/scheduler/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Bosley</a>, <a href="https://www.encompasstech.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Encompass</a>, and more.</li>
            <li>Built internal tools (Email Validator, Cypress Template Generator) to streamline QA processes.</li>
            <li>Optimized database performance (e.g., 10x speed improvement on a 20M-record table).</li>
          </ul>
          <p className='mt-2'><span className='font-semibold'>Tech:</span> Vue.js, React.js, Node.js, WordPress, Cypress, PHP, MongoDB, MySQL</p>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4 mt-10'>🧪 SELECTED FREELANCE PROJECTS (2019 – Present)</h4>
          
          <h5 className='text-xl font-semibold mt-4'><a href="https://snootysims.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">SnootySims.com</a></h5>
          <p>Custom homepage, search experience, and personalization features for a Sims 4 fan platform with 10K+ daily users.</p>
          <p className='mt-1'><span className='font-semibold'>Tech:</span> WordPress, PHP, JS</p>

          <h5 className='text-xl font-semibold mt-4'>Shopee CRM & Analytics</h5>
          <p>Built CRM dashboard to manage goods, orders, and customer outreach for Shopee sellers.</p>
          <p className='mt-1'><span className='font-semibold'>Tech:</span> Vue.js, Nest.js, MongoDB</p>

          <h5 className='text-xl font-semibold mt-4'>DAO Chat & Management System</h5>
          <p>Developed chat app (like Messenger) and admin dashboard for DAO Entertainment.</p>
          <p className='mt-1'><span className='font-semibold'>Tech:</span> React, Vue, NestJS, Firebase, MongoDB</p>

          <h5 className='text-xl font-semibold mt-4'>GTA Xtreme Mobile App</h5>
          <p>React Native app fetching articles from WordPress GraphQL, optimized for responsiveness.</p>
          <p className='mt-1'><span className='font-semibold'>Tech:</span> React Native, twrnc, WordPress</p>

          <h5 className='text-xl font-semibold mt-4'><a href="https://linkandcluster.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Link & Cluster Plugin</a></h5>
          <p>Built an SEO internal-link management plugin and its marketing site. Also acted as PM for the client.</p>
          <p className='mt-1'><span className='font-semibold'>Tech:</span> WordPress, PHP, JS</p>
        </div>
      </div>
    </div>
  )
}

export default Experience