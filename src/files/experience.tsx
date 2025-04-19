import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">💼 PROFESSIONAL EXPERIENCE</h2>
      <div className='flex-1 overflow-y-auto'>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>BetaMind Inc. – Full Stack Developer</h4>
          <p className='italic mb-2'>Tokyo, Japan | Jun 2024 – Apr 2025</p>
          <ul className='list-disc'>
            <li>Built and maintained core front-end components using React.js and AWS Serverless stack (Lambda, DynamoDB, API Gateway).</li>
            <li>Led the team in the "Spice – Smart Rirekisho" AI-powered resume platform; managed sprints, performed code reviews, and delivered on tight deadlines.</li>
            <li>Integrated OpenAI features to enhance UX for job seekers.</li>
            <li>Improved UI performance and consistency across multiple devices and browsers.</li>
          </ul>
          <p className='mt-2'><span className='font-semibold'>Key Projects:</span></p>
          <ul className='list-disc ml-6'>
            <li><a href="https://www.milogos.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Milogos</a>: Built management and relationship subsystems</li>
            <li><a href="https://resume.zcareer.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">resume.zcareer.com</a>: Led development of an AI-driven smart resume (Rirekisho) builder application</li>
          </ul>
          <p className='mt-2'><span className='font-semibold'>Tech:</span> React.js, AWS Lambda, CDK, API Gateway, DynamoDB, OpenAI</p>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>TTEK Inc. – Frontend Developer (Vue.js)</h4>
          <p className='italic mb-2'>Ho Chi Minh City, Vietnam | Jul 2023 – Jul 2024</p>
          <ul className='list-disc'>
            <li>Developed reusable UI components for <a href="https://www.ttekglobal.com/risklaboverview" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">RiskLab</a>, a risk management platform for border control agencies.</li>
            <li>Modified and extended socket.io for real-time monitoring.</li>
            <li>Actively contributed to architectural decisions and documentation.</li>
          </ul>
          <p className='mt-2'><span className='font-semibold'>Tech:</span> Vue.js, Vuetify, Socket.io</p>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>9thWonder Vietnam – Full Stack Developer</h4>
          <p className='italic mb-2'>Nha Trang, Vietnam | Jun 2018 – Jun 2023</p>
          <p className='mb-2'><a href="https://www.facebook.com/watch/?v=570726515042209" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Watch me at 9thWonder Vietnam</a></p>
          <p className='mb-2'>Worked on 15+ client and internal projects across a variety of stacks. Promoted from Junior to Senior-level roles and trusted with both development and mentoring tasks.</p>
          <p className='font-semibold'>Highlighted Projects:</p>
          <ul className='list-disc'>
            <li><a href="https://mazi.io/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Mazi</a>: Full-featured production/talent management system (Vue.js + Node.js + MongoDB + AWS)</li>
            <li>Email Validation Checker: Internal tool to validate HTML email templates</li>
            <li>Cypress Template: Automation testing base template using Cypress + Cucumber</li>
            <li>WordPress websites: built modules, custom widgets all in perfect-pixel manner, optimized performance, created helper plugins, contributed testing suites. Lived sites: <a href="https://braincare-dtc.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">BrainCare</a>, <a href="https://www.exaktime.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">ExakTime</a>, <a href="https://www.gravinawindows.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Gravina Windows</a>, <a href="https://syndeoinstitute.org/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Syndeo Institute</a>, <a href="https://www.babcockpower.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">BabcockPower</a></li>
            <li><a href="https://www.encompasstech.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Encompass</a>: used Gatsby.js to build React Static Site Generator, so it's really fast.</li>
            <li><a href="https://resource.hach.com/XOS-Analyzer-Simulator/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">XOS Simulator</a>: Solo developer; built Vue 3 UI simulating X camera hardware</li>
            <li>VIOC Oil Change: MySQL query optimization (20M+ records), boosted API speed by 10x</li>
            <li><a href="https://powersports.honda.com/motorcycle/touring/gold-wing-tour" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Honda Powersport</a>: Converted Figma to HTML with animations and pixel-perfect design</li>
          </ul>
          <p className='mt-2'><span className='font-semibold'>Tech:</span> Vue.js, React.js, Node.js, WordPress, Cypress, PHP, MongoDB, MySQL</p>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4 mt-10'>🧪 FREELANCE EXPERIENCE (2019 – Present)</h4>
          <p className='mb-2'>Led or contributed to multiple freelance and personal projects across diverse domains:</p>
          <p className='font-semibold'>Highlighted Projects:</p>
          <ul className='list-disc'>
            <li>Shopee CRM & Analytics: Vue + NestJS app for e-commerce management</li>
            <li>DAO Chat & DAO Management: React/Vue apps for media company internal tools</li>
            <li><a href="https://chromewebstore.google.com/detail/shopee-hotato-h%E1%BB%97-tr%E1%BB%A3-ng%C6%B0%E1%BB%9D/dnmkbgpnpnphdjpfbiechdlflkgabolh?hl=vi" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Hotato Extension</a>: Chrome extension for Shopee product analysis</li>
            <li><a href="https://snootysims.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">SnootySims</a>: High-traffic WordPress site for Sims 4 content (10K+ daily users)</li>
            <li><a href="https://linkandcluster.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Link and Cluster Plugin</a>: WordPress SEO tool; acted as both lead dev and project manager</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience